import React from 'react';
import { Link } from "react-router-dom";

const Category = props=>{
    return(
        <div className="hospital-segmennts" id="category">
        <div className="container ">
          <div className="text-center">
            <h3 className="title-top">بخش های بیمارستان</h3>
          </div>

          <div className="row">
            
            {props.category.map(cat =>{
              // console.log(cat);
              // category_title category_text category_poster
              return (
              <div className="col-sm-3 wow slideInRight" data-wow-delay="2ms" key={cat.category_id}>
              <Link to={`category/`+ cat.category_id.toString()}>
                  <img
                    src={cat.category_poster}
                    alt={cat.category_title}
                  />
                  <span>{cat.category_title}</span>
              <p>{cat.category_text}</p>
                </Link>
              </div>);
            })}
        

            
          </div>


        </div>
      </div>
    );
}

export default Category;