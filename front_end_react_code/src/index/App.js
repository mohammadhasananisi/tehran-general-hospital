import React from "react";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
// import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Poster from "./poster";
import Category from "./category";
import Article from "./article";
import Gallery from "./gallery";
import News from "./news";
// Wrapp the AwesomeSlider component with the navigationHandlers

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poster: [],
      category: [],
      article: [],
      news: [],
      gallery: [],
    };
  }
  // componentDidMount
  componentDidMount() {
    document.getElementById('loader').hidden = false;
    // console.log('is working');
    // console.log(process.env.REACT_APP_API_URL);
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
             poster_index{ image_poster}, 
             category{ category_id category_title category_text category_poster},
             article{ id_article title_article text_article image_article },
             news{ id_news title_news text_news image_news },
             gallery{ gallery_image }
            }`,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        // console.log(data["data"].poster_index);

        this.setState({
          poster: data["data"].poster_index,
          category: data["data"].category,
          article: data["data"].article,
          news: data["data"].news,
          gallery: data['data'].gallery
        });
        return;
      }).then(()=> {
        document.getElementById('loader').hidden = true;
      });
      
  }
  render() {
    return (
      <>
        <Poster image={this.state.poster} />
        <Category category={this.state.category} />
        <Article article={this.state.article} />
        <News news={this.state.news} />
        <Gallery gallery={this.state.gallery} />
      </>
    );
  }
}
export default Index;
