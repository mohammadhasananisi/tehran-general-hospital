import React from "react";

const Contact = (props) => {
  return (
    <div class="pagebox">
      <div class="container hospital-segmennts">
        <h1>تماس با ما</h1>
        <p
          dir="rtl"
          style={{fontSize: '20px',textAlign: 'justify'}}
        >
          <strong>آدرس :</strong> &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; تهران ، میدان هفتم تیر
          ،خیابان کریم خان زند ، خیابان سنایی
          <br />
          <strong>تلفن مخابرات :</strong>&nbsp; &nbsp; &nbsp; &nbsp;۵-
          ۰۲۱۸۸۸۲۱۰۲۱&nbsp; &nbsp;
          <br />
          <strong>کد پستی :</strong>&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; ۱۵۸۵۷۳۷۳۱۱
          <br />
          <strong>
            فاکس :&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;{" "}
          </strong>
          ۰۲۱۸۸۳۱۷۲۹۸
        </p>

        <p dir="rtl" >
          &nbsp;
        </p>

        <p dir="rtl" >
          &nbsp;
        </p>

        <p>
          <iframe
          title="map"
            allowfullscreen=""
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.3434141178204!2d51.41736211533507!3d35.71777188018587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01686f225b83%3A0x72cdad85ea047526!2sTehran+Hospital!5e0!3m2!1sen!2s!4v1533723726933"
            style={{border:0}}
            width="600"
            height="450"
            frameborder="0"
          ></iframe>
        </p>
      </div>
    </div>
  );
};

export default Contact;
