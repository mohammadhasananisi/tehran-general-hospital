<?php


class Db{ 
    private $conn;
    function __construct() {
        $servername = "localhost";
        $username = "root";
        $password = "root";
        $dbname = "hospital";
        try{
            // $this->conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            $this->conn = new PDO("sqlite:".__DIR__."/db.sqlite3");
            // set the PDO error mode to exception
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }catch(PDOException $e)
        {
        echo "Error: " . $e->getMessage();
        exit();
        }
    }

    private function get_id(){
        return $id = $this->conn->lastInsertId();
    }


    public function poster($img=false){
        if ($img) {
            $stmt = $this->conn->prepare("INSERT INTO `poster` (`image_url`)
                VALUES (:image_url)");
            $stmt->bindParam(':image_url', $img);
            $stmt->execute();
            return true;
        }else{
        $sth = $this->conn->prepare("SELECT `image_url` image_poster FROM `poster`");
         $sth->execute();
         return $sth->fetchAll(\PDO::FETCH_ASSOC);
        }
    }

    public function category($category=false){
        
        if(isset($category['single_category'])){

            $sth = $this->conn->prepare("SELECT  `cat`.`title` category_title, `cat_ds`.`description` category_description
            FROM `category_description` `cat_ds` JOIN `category` `cat` WHERE
            `cat`.`id` = ".intval($category['single_category'])." AND
             `cat`.`id` = `cat_ds`.`category_id` ");
            $sth->execute();
            return $sth->fetch();
            // end single category

        }elseif ($category) {
            $stmt = $this->conn->prepare("INSERT INTO `category` (`title`, `text`, `poster_url`)
                    VALUES (:title, :text, :poster_url)");
            $stmt->bindParam(':title', $category['title']);
            $stmt->bindParam(':text', $category['text']);
            $stmt->bindParam(':poster_url', $category['poster_url']);
            $stmt->execute();
            $id = $this->get_id();

            $stmt = $this->conn->prepare("INSERT INTO `category_description` (`description`, `category_id`)
                    VALUES (:description, :category_id)");
            $stmt->bindParam(':description', $category['description']);
            $stmt->bindParam(':category_id', $id);
            $stmt->execute();
            return true;
        } else {
        $sth = $this->conn->prepare("SELECT `id` category_id,`title` category_title, `text` category_text, `poster_url` category_poster FROM `category`");
         $sth->execute();
         return $sth->fetchAll(\PDO::FETCH_ASSOC);
        }
    }

    public function article($article=false){
        // article for is 1
        if ($article) {
            $stmt = $this->conn->prepare("INSERT INTO `display` (`title`, `text`, `image_url`, `for`)
                    VALUES (:title, :text, :image_url, :for)");
            $stmt->bindParam(':title', $article['title']);
            $stmt->bindParam(':text', $article['text']);
            $stmt->bindParam(':image_url', $article['image_url']);
            $stmt->bindParam(':for', 1);
            $stmt->execute();
            return true;
        }else{
            $sth = $this->conn->prepare("SELECT `id` id_article,`title` title_article, `text` text_article, `image_url` image_article FROM `display` WHERE `for` = 1 ORDER BY `id` DESC LIMIT 5;");
         $sth->execute();
         return $sth->fetchAll(\PDO::FETCH_ASSOC);
        }
    }

    public function news($news=false,$number_row=false){
        // news for is 2
        if ($news) {
            $stmt = $this->conn->prepare("INSERT INTO `display` (`title`, `text`, `image_url`, `for`)
                    VALUES (:title, :text, :image_url, :for)");
            $stmt->bindParam(':title', $news['title']);
            $stmt->bindParam(':text', $news['text']);
            $stmt->bindParam(':image_url', $news['image_url']);
            $stmt->bindParam(':for', 2);
            $stmt->execute();
            return true;
        }else{
            if ($number_row) {
            $sth = $this->conn->prepare("SELECT `id` id_news,`title` title_news, `text` text_news, `image_url` image_news FROM `display` WHERE `for` = 2  ORDER BY `id` DESC LIMIT ".intval($number_row).";");
            }else{
                $sth = $this->conn->prepare("SELECT `id` id_news,`title` title_news, `text` text_news, `image_url` image_news FROM `display` WHERE `for` = 2  ORDER BY `id` DESC ;");
            }
         $sth->execute();
         return $sth->fetchAll(\PDO::FETCH_ASSOC);
        }
    }


    public function gallery($gallery=false){
        if ($gallery) {
            $stmt = $this->conn->prepare("INSERT INTO `gallery` (`image_url`)
                    VALUES (:image_url)");
            $stmt->bindParam(':image_url', $gallery['image_url']);
            $stmt->execute();
            return true;
        }else{
            $sth = $this->conn->prepare("SELECT `image_url` gallery_image FROM `gallery` ORDER BY `id` DESC");
         $sth->execute();
         return $sth->fetchAll(\PDO::FETCH_ASSOC);
        }
    }



    public function display($display_id){
        $sth = $this->conn->prepare("SELECT  `dis_des`.`description` display_description , `dis`.`title` display_title
        FROM `display_description` `dis_des` JOIN `display` `dis` WHERE
        `dis`.`id` = ".intval($display_id)." AND
         `dis`.`id` = `dis_des`.`display_id` ");
        $sth->execute();
        return $sth->fetch();
    }



    public function customer_guide($customer_guide=false){
        // customer guide for 3
        if(isset($customer_guide['nav'])){

            $sth = $this->conn->prepare("SELECT `text` customer_guide_nav_title, `id` customer_guide_nav_id FROM `display` WHERE `for` = 3 ORDER BY `id` DESC");
         $sth->execute();
         return $sth->fetchAll(\PDO::FETCH_ASSOC);

        }else if($customer_guide) {
            $stmt = $this->conn->prepare("INSERT INTO `display` (`title`, `text`, `image_url`, `for`)
                    VALUES (:title, :text, :image_url, :for)");
            $stmt->bindParam(':title', $customer_guide['title']);
            $stmt->bindParam(':text', $customer_guide['text']);
            $stmt->bindParam(':image_url', '');
            $stmt->bindParam(':for', 3);
            $stmt->execute();
            return true;

        }
    }



    public function about_us_nav($about_us_nav=false){
        // about_us nav for 4
        if(isset($about_us_nav['nav'])){

            $sth = $this->conn->prepare("SELECT `text` about_us_nav_title, `id` about_us_nav_id FROM `display` WHERE `for` = 4 ORDER BY `id` DESC");
         $sth->execute();
         return $sth->fetchAll(\PDO::FETCH_ASSOC);

        }else if($about_us_nav) {
            $stmt = $this->conn->prepare("INSERT INTO `display` (`title`, `text`, `image_url`, `for`)
                    VALUES (:title, :text, :image_url, :for)");
            $stmt->bindParam(':title', $about_us_nav['title']);
            $stmt->bindParam(':text', $about_us_nav['text']);
            $stmt->bindParam(':image_url', '');
            $stmt->bindParam(':for', 4);
            $stmt->execute();
            return true;

        }
    }




    public function in_d_of_e_nav($in_d_of_e_nav=false){
        // in_d_of_e_nav for 5 
        // International Department of Education
        if(isset($in_d_of_e_nav['nav'])){

            $sth = $this->conn->prepare("SELECT `text` in_d_of_e_nav_title, `id` in_d_of_e_nav_id FROM `display` WHERE `for` = 5 ORDER BY `id` DESC");
         $sth->execute();
         return $sth->fetchAll(\PDO::FETCH_ASSOC);

        }else if($in_d_of_e_nav) {
            $stmt = $this->conn->prepare("INSERT INTO `display` (`title`, `text`, `image_url`, `for`)
                    VALUES (:title, :text, :image_url, :for)");
            $stmt->bindParam(':title', $in_d_of_e_nav['title']);
            $stmt->bindParam(':text', $in_d_of_e_nav['text']);
            $stmt->bindParam(':image_url', '');
            $stmt->bindParam(':for', 5);
            $stmt->execute();
            return true;

        }
    }


    

    public function doctor($user=false){
        if($user){
            $stmt = $this->conn->prepare("INSERT INTO `users` (`first_name`, `last_name`, `email`, `username`,`image`, `password`)
                VALUES (:first_name, :last_name, :email, :username, :image, :password)");
            $stmt->bindParam(':first_name', $user['first_name']);
            $stmt->bindParam(':last_name', $user['last_name']);
            $stmt->bindParam(':email', $user['email']);
            $stmt->bindParam(':username', $user['username']);
            $stmt->bindParam(':image', $user['image']);
            $stmt->bindParam(':password', $user['password']);
            $stmt->execute();
            $id = $this->get_id();

            $stmt = $this->conn->prepare("INSERT INTO `bio` (`text`, `user_id`)
                VALUES (:text, :user_id)");
            $stmt->bindParam(':text', $user['bio']);
            $stmt->bindParam(':user_id', $id);
            $stmt->execute();

            $stmt = $this->conn->prepare("INSERT INTO `role_users` (`user_id`, `role_id`)
                VALUES (:user_id, :role_id)");
            $stmt->bindParam(':user_id', $id);
            $stmt->bindParam(':role_id', $user['role_id']);
            $stmt->execute();
            return true;
        }else{
        $sth = $this->conn->prepare("SELECT `users`.`id` , `users`.`first_name` , `users`.`last_name`, `users`.`image` user_image,
        `role`.`title` role_title,
        `bio`.`text` bio
        FROM `users` `users` join `role` `role` join `role_users` `role_users` join `bio` `bio` WHERE
        `users`.`id` = `role_users`.`user_id` AND 
        `role_users`.`role_id` = `role`.`id` AND
        `users`.`id` = `bio`.`user_id` AND
        `role`.`for_` = 'doctor'
        ");
         $sth->execute();
         return $sth->fetchAll(\PDO::FETCH_ASSOC);
        }
    }

    public function role_doctor(){
        $sth = $this->conn->prepare("SELECT `title` role_title FROM  `role` WHERE `for_` = 'doctor'
        ");
         $sth->execute();
         return $sth->fetchAll(\PDO::FETCH_ASSOC);

    }



}
?>