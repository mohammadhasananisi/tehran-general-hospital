import React from "react";
import { Link } from "react-router-dom";

const Article = (props) => {
let code_html = null;
  return (
    <>
      <div className="container" id="article">
        <div className="text-center">
          <h3 className="title-top">مقالات</h3>
        </div>
        <div className="row">
          <div className="col-md-8 mnews">
            <div
              style={{ background: "#f6f6f6", height: "510px", width: "100%" }}
            >
              <p className="premium-article">برترین مقاله ها</p>

              <div className="row">
                {props.article.map((ar,index) => {
                  
                  if (index===0) {
                    // number = false;
                    code_html = (<div className="col-md-12" key={ar.id_article}>
                    <Link to={`/display/`+ ar.id_article}>
                      <img
                        className="pull-right img-thumb"
                        src={ar.image_article}
                        alt={ar.title_article}
                      />
                      <h4>{ar.title_article}</h4>
                    </Link>
                    <p>{ar.text_article}</p>
                  </div>);
                  } else {
                    code_html = (
                      // <div className="warper_col_sm_6">
                        <div className="col-sm-6" key={ar.id_article}>
                          <Link to={`/display/`+ ar.id_article}>
                            <img
                              className="pull-right img-thumb"
                              src={ar.image_article}
                              alt={ar.title_article}
                            />
                            <h4>{ar.title_article}</h4>
                          </Link>

                          <p>{ar.text_article}</p>
                        </div>
                      // </div>
                    );
                  }

                  return code_html;
                })}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="http://localhost/asset/image/special-banner.jpg"
              className="img-responsive"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
