import React from "react";
var HtmlToReactParser = require("html-to-react").Parser;
// import {useParams} from 'react-router-dom';
const Single = (props) => {
  var htmlToReactParser = new HtmlToReactParser();
  var reactElement = htmlToReactParser.parse(props.display.display_description);
  // const {id} = useParams();
  return (
    <div className="pagebox">
      {/* {props.html} */}
      <div className="container hospital-segmennts" style={{ paddingTop: 5 }}>
        <h1>{props.display.display_title}</h1>
        {reactElement}
      </div>
    </div>
  );
};

export default Single;
