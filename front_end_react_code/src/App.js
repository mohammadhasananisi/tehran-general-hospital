import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {} from 'react-router'
import "bootstrap/dist/css/bootstrap.min.css";
// HashRouter
import Index from "./index/App";
import Header from "./header";
// import Login from "./account/Login";
// import Register from "./account/Register";
import Footer from "./footer";
import Category from "./category/App";
import Display from "./display/App";
import Physician from "./physician/App";
import Contact from "./contact";
import ScrollToTop from "./scrolltotop";
import News from "./news/App";
// const GET_POKEMON_INFO = gql`
// {
//   query: mutation{ poster_index{ image_poster}, category{category_title} 
// }`;

const App = (props) => {
  
  
  return (
    <Router>
      <Header />
      <Switch>
        {/* <ScrollToTop> */}

        <Route path="/news/archive" exact>
          <ScrollToTop>
            <News archive={true} />
          </ScrollToTop>
        </Route>
        
        {/* <Route path="/news" exact>
          <ScrollToTop>
            <News />
          </ScrollToTop>
        </Route> */}

      
        <Route path="/contact" exact>
          <ScrollToTop>
            <Contact />
          </ScrollToTop>
        </Route>

        <Route path="/physician/list" exact>
          <ScrollToTop>
            <Physician />
          </ScrollToTop>
        </Route>

        <Route path="/display/:id" exact>
          <ScrollToTop>
            <Display />
          </ScrollToTop>
        </Route>

        <Route path="/category/:id" exact>
          <ScrollToTop>
            <Category />
          </ScrollToTop>
        </Route>

        {/* <Route path="/login">
          <ScrollToTop>
            <Login />
          </ScrollToTop>
        </Route> */}

        {/* <Route path="/register">
          <Register />
        </Route> */}

        <Route path="/" exact>
          <ScrollToTop>
            <Index />
          </ScrollToTop>
        </Route>

        <Route path="*">
          {document.getElementById('loader').hidden = true}
          <div style={{display:'flex', flexDirection:'column', alignItems: 'center',textAlign:'center',alignContent:'center'}}>
        <img src={process.env.REACT_APP_API_URL +"image/404.jpg"} class="img-responsive img-thumbnail center-block" alt="یافت نشد"/>
        </div>
          </Route>
        
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
