import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import Single from './single';

// var HtmlToReactParser = require('html-to-react').Parser;

// var htmlInput = '<div style="background: red;"><h1>Title</h1><p>A paragraph</p></div>';
// var htmlToReactParser = new HtmlToReactParser();
// var reactElement = htmlToReactParser.parse(htmlInput);
const Display = props => {
  const [display, setdisplay] = useState([]);
  // const id = props.match.params.id;
  const { id } = useParams();
  useEffect(() => {
    document.getElementById('loader').hidden = false;
    //  const id = this.props.match.params.id;
    //  console.log(id);
    fetch(process.env.REACT_APP_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // body: JSON.stringify({"query": "mutation{ poster_index{ image_poster} }" })
      body: JSON.stringify({
        query: `
         mutation{
             display(display_id:${id}){ display_title display_description },
             }`,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        // console.log(data["data"]);
        // return;
        setdisplay(data["data"].display);
        //  this.setState({
        //    display: data["data"].display,
        //  });
        return;
      }).then(() => {
        document.getElementById('loader').hidden = true;
      });
  }, [id]);


  return (
    <>
      <Single display={display} />
    </>
  );
};



export default Display;