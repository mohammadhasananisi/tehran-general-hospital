import React from "react";
import { Link} from 'react-router-dom';
const Archive = (props) => {
  return (
    <>
      <div className="pagebox">
        <div className="container">
          <fieldset style={{borderBottom: 1,padding: 4}}>
            <legend>
              <h1>آرشیو اخبار</h1>
            </legend>
          </fieldset>

          
{props.news_list.map(ns =>{
  return(
          <div className="row">
            <div className="col-sm-12">
              <div className="media">
                <div className="media-left">
                <Link to={`/display/`+ ns.id_news}>
                    <img
                      className="media-object"
                      src={ns.image_news}
                      alt={ns.image_news}
                    />
                    </Link>
                </div>
                <div className="media-body">
                  <h4 className="media-heading">
                  <Link to={`/display/`+ ns.id_news}>
                  {ns.title_news}
                    </Link>
                  </h4>

                  <p>
                  {ns.text_news}
                  </p>
                  <span>
                  <Link to={`/display/`+ ns.id_news}>
                      ادامه خبر ...
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          );
        })}



        </div>
      </div>
    </>
  );
};

export default Archive;
