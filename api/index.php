<?php

require_once __DIR__ . '/class/db.php';

require_once __DIR__ . '/vendor/autoload.php';

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
use GraphQL\GraphQL;
$db = new Db;

try {
    $poster_type = new ObjectType([
        'name' => 'poster',
        'fields' => [
            // 'year' => ['type' => Type::string()],
            // 'id' => ['type' => Type::int()],
            'image_poster' => ['type' => Type::string()],
        ]
    ]);

    $category_type = new ObjectType([
        'name' => 'category',
        'fields' => [
            'category_id' => ['type'=> Type::int()],
            'category_title' => ['type' => Type::string()], 
            'category_text' =>['type' => Type::string()],
            'category_poster' =>['type' => Type::string()],
        ]
    ]);

    $gallery_type = new ObjectType([
        'name' => 'gallery',
        'fields' => [
            'gallery_image' => ['type' => Type::string()], 
        ]
    ]);

    $article_type = new ObjectType([
        'name' => 'article',
        'fields' => [
            'id_article' => ['type'=> Type::int()],
            'title_article' => ['type' => Type::string()], 
            'text_article' => ['type' => Type::string()], 
            'image_article' => ['type' => Type::string()], 
        ]
    ]);

    $news_type = new ObjectType([
        'name' => 'news',
        'fields' => [
            'id_news' => ['type'=> Type::int()],
            'title_news' => ['type' => Type::string()], 
            'text_news' => ['type' => Type::string()], 
            'image_news' => ['type' => Type::string()], 
        ]
    ]);

    
    $single_category_type = new ObjectType([
        'name' => 'single_category',
        'fields' => [
            // 'category_id'=> ['type'=> Type::int()],
            'category_title' => ['type' => Type::string()], 
            'category_description' => ['type' => Type::string()], 
        ]
    ]);


    $customer_guide_nav_type = new ObjectType([
        'name' => 'customer_guide_nav',
        'fields' => [
            // 'category_id'=> ['type'=> Type::int()],
            'customer_guide_nav_title' => ['type' => Type::string()],
            // 'customer_guide_nav_text' => ['type' => Type::string()],
            'customer_guide_nav_id' => ['type' => Type::int()], 
        ]
    ]);


    $about_us_nav_type = new ObjectType([
        'name' => 'about_us_nav',
        'fields' => [
            // 'category_id'=> ['type'=> Type::int()],
            'about_us_nav_title' => ['type' => Type::string()],
            // 'customer_guide_nav_text' => ['type' => Type::string()],
            'about_us_nav_id' => ['type' => Type::int()], 
        ]
    ]);


    $in_d_of_e_nav_type = new ObjectType([
        'name' => 'in_d_of_e_nav',
        'fields' => [
            // 'category_id'=> ['type'=> Type::int()],
            'in_d_of_e_nav_title' => ['type' => Type::string()],
            // 'customer_guide_nav_text' => ['type' => Type::string()],
            'in_d_of_e_nav_id' => ['type' => Type::int()], 
        ]
    ]);


    $display_type = new ObjectType([
        'name' => 'display',
        'fields' => [
            'display_title' => ['type' => Type::string()], 
            'display_description' => ['type' => Type::string()], 
        ]
    ]);


    $doctor_type = new ObjectType([
        'name' => 'doctor',
        'fields' => [
            'id' => ['type' => Type::int()], 
            'first_name' => ['type' => Type::string()], 
            'last_name' => ['type' => Type::string()], 
            'user_image' => ['type' => Type::string()], 
            'role_title' => ['type' => Type::string()], 
            'bio' => ['type' => Type::string()], 
        ]
    ]);



    $single_doctor_type = new ObjectType([
        'name' => 'single_doctor',
        'fields' => [
            'id' => ['type' => Type::int()], 
            'first_name' => ['type' => Type::string()], 
            'last_name' => ['type' => Type::string()], 
            'image' => ['type' => Type::string()], 
            'role_title' => ['type' => Type::string()], 
            'bio' => ['type' => Type::string()], 
        ]
    ]);
    

    $role_doctor_type = new ObjectType([
        'name' => 'role_doctor',
        'fields' => [
            'role_title' => ['type' => Type::string()], 
        ]
    ]);

    $mutationType = new ObjectType([
        'name' => 'site',
        'fields' => [
            'poster_index' => [
                'type' => Type::listOf($poster_type),
                'resolve' => function ($site, $args,$context) {
                    global $db;
                    return $db->poster();
                },
            ],

            'category' => [
                'type' => Type::listOf($category_type),
                'resolve' => function ($site, $args,$context) {
                    global $db;
                    return $db->category();
                },
            ],

            'article' => [
                'type' => Type::listOf($article_type),
                'resolve' => function ($site, $args,$context) {
                    global $db;
                    return $db->article();
                },
            ],


            'news' => [
                'type' => Type::listOf($news_type),
                'resolve' => function ($site, $args,$context) {
                    global $db;
                    return $db->news(false,3);
                },
            ],


            'news_list' => [
                'type' => Type::listOf($news_type),
                'resolve' => function ($site, $args,$context) {
                    global $db;
                    return $db->news(false,false);
                },
            ],


            'gallery' => [
                'type' => Type::listOf($gallery_type),
                'resolve' => function ($site, $args,$context) {
                    global $db;
                    return $db->gallery();
                },
            ],


            'single_category' => [
                'type' => $single_category_type,
                // 'type' => Type::listOf($single_category_type),
                'args' =>[
                    'category_id'=> Type::int(),
                ],
                'resolve' => function ($site, $args,$context) {
                    global $db;
                    // return $args['category_id'];
                    return $db->category(array('single_category'=> $args['category_id']));
                },
            ],


            'display' => [
                'type' => $display_type,
                // 'type' => Type::listOf($single_category_type),
                'args' =>[
                    'display_id'=> Type::int(),
                ],
                'resolve' => function ($site, $args,$context) {
                    global $db;
                    return $db->display($args['display_id']);
                },
            ],



            'customer_guide_nav' => [
                'type' => Type::listOf($customer_guide_nav_type),
                'resolve' => function ($site, $args,$context) {
                    global $db;
                    return $db->customer_guide(array('nav'=> true));
                },
            ],


            'about_us_nav' => [
                'type' => Type::listOf($about_us_nav_type),
                'resolve' => function ($site, $args,$context) {
                    global $db;
                    return $db->about_us_nav(array('nav'=> true));
                },
            ],


            'in_d_of_e_nav' => [
                // International Department of Education
                'type' => Type::listOf($in_d_of_e_nav_type),
                'resolve' => function ($site, $args,$context) {
                    global $db;
                    return $db->in_d_of_e_nav(array('nav'=> true));
                },
            ],


            'doctor' => [
                'type' => Type::listOf($doctor_type),
                'resolve' => function ($site, $args,$context) {
                    global $db;
                    return $db->doctor();
                },
            ],


            'single_doctor' => [
                'type' => $single_doctor_type,
                'args' =>[
                    'doctor_id'=> Type::int(),
                ],
                'resolve' => function ($site, $args,$context) {
                    global $db;
                    return $db->doctor();
                },
            ],


            'role_doctor' => [
                'type' => Type::listOf($role_doctor_type),
                'resolve' => function ($site, $args,$context) {
                    global $db;
                    return $db->role_doctor();
                },
            ],



        ],
    ]);
/*
   fetch('http://localhost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({"query": "mutation{ poster_index{ image_poster} }" })
        // body: JSON.stringify({"query": "mutation{ poster_index{ image_poster}, category{category_title} }" })
      })
        .then(r => r.json())
        .then(data => console.log('data returned:', data));
        
*/

    $schema = new Schema([
        // 'query' => $queryType,
        'mutation' => $mutationType,
    ]);

    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);
    $query = $input['query'];
    $variableValues = isset($input['variables']) ? $input['variables'] : null;

    $rootValue = ['prefix' => 'You said: '];
    $result = GraphQL::executeQuery($schema, $query, $rootValue, null, $variableValues);
    $output = $result->toArray();

} catch (\Exception $e) {
    $output = [
        'error' => [
            'message' => $e->getMessage()
        ]
    ];
}


header('Content-Type: application/json; charset=UTF-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
echo json_encode($output);

?>