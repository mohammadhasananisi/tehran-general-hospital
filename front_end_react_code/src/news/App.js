import React from 'react';
import {withRouter} from 'react-router-dom';
import Archive from './archive';
// const id = props.match.params.id;
class News extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            news_list:[],
        };
      }

    componentDidMount() {
        document.getElementById('loader').hidden = false;
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
            news_list{ id_news title_news text_news image_news },
               }`,
        }),
      })
        .then((r) => r.json())
        .then((data) => {
        //   console.log(data["data"]);
          // return;
          
           this.setState({
            news_list: data["data"].news_list,
           });
          return;
        }).then(() => {
          document.getElementById('loader').hidden = true;
        });
    }

render(){
    return(
        <>
        <Archive news_list={this.state.news_list} />
        </>
    )
}
}
export default withRouter(News);