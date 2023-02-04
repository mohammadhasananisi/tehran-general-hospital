import React from 'react';
// import { useParams} from 'react-router-dom';
import { withRouter } from "react-router-dom";

import Single from './single_category';

class Category extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          category:[],
        };
      }
      componentDidMount() {
        document.getElementById('loader').hidden = false;
        // const { id } = useParams();
        const id = this.props.match.params.id;
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
                single_category(category_id:${id}){ category_title category_description },
                }`,
          }),
        })
          .then((r) => r.json())
          .then((data) => {
            console.log(data["data"]);
    // return;
            this.setState({
              category: data["data"].single_category,
            });
            return;
          }).then(()=> {
            document.getElementById('loader').hidden = true;
          });
      }

    render(){
        return(
            <>
        <Single category={this.state.category} />
            </>
        );
    }
}


export default withRouter(Category);