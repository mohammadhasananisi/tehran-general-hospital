import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h5 className="title-bottom">لینک های مفید</h5>
            <ul>
              <li>
                <a href="https://ibto.ir/">سازمان انتقال خون</a>
              </li>
              <li>
                <a href="http://irimc.org/">سازمان نظام پزشکی</a>
              </li>
              <li>
                <a href="http://www.hbi.ir/default.aspx?templateid=0">
                  وزارت بهداشت درمان و آموزش پزشکی
                </a>
              </li>
              <li>
                <a href="https://fdo.sbmu.ac.ir/">معاونت غذا و دارو</a>
              </li>
              <li>
                <a href="http://www.daroosaz.net/">انجمن داروسازان ایران </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h5 className="title-bottom">اطلاعات تماس</h5>
            <div className="div_footer_fix_col_sm_4"></div>
            <p>
              <b>آدرس:</b> تهران ، میدان هفتم تير&nbsp;،خیابان کریم خان زند ،
              خیابان سنايی
            </p>

            <p>
              <b>تلفن :</b>۵- ۰۲۱۸۸۸۲۱۰۲۱
            </p>

            <p>
              <b>کد پستی:</b> ۱۵۸۵۷۳۷۳۱۱
            </p>

            <p>
              <b>فاکس:</b> ۰۲۱۸۸۳۱۷۲۹۸
            </p>

            <p>
              <a
                href="https://instagram.com/tehran_general_hospital?igshid=f8n1o5z0z9vx"

              >
                <img
                  alt="instagram"
                  className="img-responsive"
                  src="http://localhost/asset/image/insta1.png"
                  style={{ float: 'left', width: '50px', height: '50px' }}
                />
              </a>
              &nbsp;{" "}
              <a href="https://www.aparat.com/tehranhospital" target="_blank"
                rel="noopener noreferrer">
                <img
                  alt="آپارات"
                  src="http://localhost/asset/image/aparat.jpg"
                  style={{ width: '50px', height: '50px', float: 'left' }}
                />
              </a>
              &nbsp;
              <a
                href="https://www.facebook.com/teharan.hospital.1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Facebook"
                  src="http://localhost/asset/image/fb.png"
                  style={{ width: '50px', height: '50px', float: 'left' }}
                />
              </a>
            </p>
          </div>


          <div className="col-sm-4">
            <h5 className="title-bottom" >ادرس روی نقشه</h5>
<br/>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.3434141178204!2d51.41736211533507!3d35.71777188018587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01686f225b83%3A0x72cdad85ea047526!2sTehran+Hospital!5e0!3m2!1sen!2s!4v1533723726933" 
            style={{ border: 0 }} frameBorder="0"></iframe>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;