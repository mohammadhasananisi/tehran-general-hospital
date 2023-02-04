import React from "react";
import List from "./List";
class Physician extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      doctor_list: [],
      role_doctor:[],
    };
  }
  // componentDidMount
  componentDidMount() {
    document.getElementById('loader').hidden = false;
    // console.log('is working');
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
          doctor{ id first_name last_name user_image role_title bio }, 
          role_doctor{ role_title },

            }`,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        // console.log(data["data"]);

        this.setState({
          doctor_list: data["data"].doctor,
          role_doctor:data["data"].role_doctor,
          
        });
        return;
      }).then(()=> {
        document.getElementById('loader').hidden = true;
      });
  }


  render(){
    return(
      <>
      <List doctor={this.state.doctor_list} role_doctor={this.state.role_doctor} />
      </>
    )
  }

  
}
export default Physician;
