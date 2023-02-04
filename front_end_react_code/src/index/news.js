import React from 'react';
import { Link } from 'react-router-dom';

const News = props =>{
    return(
        <div className="container" id="news">
        <div className="text-center mnewsTitle">
        <h3 className="title-top">اخبار</h3>
      </div>
      <div className="mmnews">
        <div className="row">


         {props.news.map(ns=>{
           return(
            <div className="col-md-4" key={ns.id_news}>
            <p>
              <img
                src={ns.image_news}
                alt={ns.title_news}
              />{" "}
              <Link to={`/display/`+ ns.id_news}>
           {ns.title_news}
           </Link>
            </p>

            <p>
              {ns.text_news}{" "}
              <Link to={`/display/`+ ns.id_news}>
                ادامه خبر ...
              </Link>
            </p>
          </div>

           );
         })}


      

        </div>
      </div>
      <div className="text-center" style={{ margin: "63px" }}>
          <Link  className="btn btn-info" to="/news/archive">
          آرشیو اخبار
    
        </Link>
      </div>
        </div>
    );
};

export default News;