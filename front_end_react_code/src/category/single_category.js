import React from "react";
// import { useParams} from 'react-router-dom';
var HtmlToReactParser = require('html-to-react').Parser;
 
// var htmlInput = '<div style="background: red;"><h1>Title</h1><p>A paragraph</p></div>';

const Single = (props) => {
  var htmlToReactParser = new HtmlToReactParser();
var reactElement = htmlToReactParser.parse(props.category.category_description);
    // const { id } =useParams();
  return (
    <div className="pagebox">
      <div className="container hospital-segmennts" style={{paddingTop:5}}>
  <h1>{props.category.category_title}</h1>

{reactElement}



      </div>
    </div>
  );
};

export default Single;
