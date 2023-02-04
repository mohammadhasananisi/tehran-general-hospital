import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
// NavbarBrand
import { Link } from "react-router-dom";
// import { Link, Switch, Route } from "react-router-dom";
class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      customerguide: [],
      about_us_nav: [],
      in_d_of_e_nav:[],
    };
  }

  componentDidMount() {
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
            customer_guide_nav{ customer_guide_nav_title customer_guide_nav_id },
            about_us_nav{ about_us_nav_title about_us_nav_id },
            in_d_of_e_nav{ in_d_of_e_nav_title in_d_of_e_nav_id },
            }`,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        // console.log(data["data"].about_us_nav);
        // return;
        this.setState({
          customerguide: data["data"].customer_guide_nav,
          about_us_nav: data["data"].about_us_nav,
          in_d_of_e_nav: data["data"].in_d_of_e_nav,
        });
        return;
      });
  }
  render() {
    return (
      <>
        <div className="top">
          <Navbar.Brand to="/" as={Link} style={{ margin: 0, padding: 0 }}>
            <img
              src={process.env.REACT_APP_API_URL + 'image/tehran2.jpeg'}
              className="d-inline-block align-top"
              alt="Logo site"
            />
          </Navbar.Brand>
        </div>

        <Navbar
          collapseOnSelect
          expand="lg"
          bg="nav"
          // variant="white"
          fixed="top"
          sticky="top"
        >
          {/*fixed="bottom" */}

          {/* <Navbar.Brand to="/" as={Link}>
        <img
        src="./logo.jpg"
        width="100"
        height="30"
        className="d-inline-block align-top"
        alt="Logo site"
      /> 
        </Navbar.Brand> */}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Switch>
                <Route path="/login">
                  <Nav.Link as={Link} to="/register">
                    register
                </Nav.Link>
                </Route>

                <Route path="/register">
                  <Nav.Link as={Link} to="/login">
                    Login
                </Nav.Link>
                </Route>

                <Route path="/">
                  <Nav.Link as={Link} to="/login">
                    Login
                </Nav.Link>
                </Route>
              </Switch> */}
            </Nav>


            <Nav>

              <Nav.Link as={Link} to="/">
                صفحه ی اصلی
            </Nav.Link>

              <NavDropdown title="راهنمای مراجعین" id="collaDropdownsible-nav-dropdown">
                {/* <CustomerGuideNavItem customerguide={this.state.customerguide} /> */}
                {this.state.customerguide.map(customer => {
                  return (
                    <NavDropdown.Item as={Link} to={`/display/` + customer.customer_guide_nav_id} >{customer.customer_guide_nav_title}</NavDropdown.Item>
                  );
                })}
                {/* <NavDropdown.Divider /> */}

              </NavDropdown>

              <NavDropdown title="درباره ما" id="collaDropdownsible-nav-dropdown">
                {this.state.about_us_nav.map(about => {
                  return (
                    <NavDropdown.Item as={Link} to={`/display/` + about.about_us_nav_id} >{about.about_us_nav_title}</NavDropdown.Item>
                  );
                })}
              </NavDropdown>

              <Nav.Link as={Link} to="/physician/list">
                معرفی پزشکان
            </Nav.Link>

              {/* <NavDropdown title="خدمات انلاین" id="collaDropdownsible-nav-dropdown-online">
                <NavDropdown.Item as={Link} to="#action/3.1">نوبت دهی آنلاین</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.1">جواب آزمایش</NavDropdown.Item>

                <NavDropdown.Divider />
              </NavDropdown> */}


              <NavDropdown title="دپارتمان بیماران بین الملل" id="collaDropdownsible-nav-dropdown">
                {this.state.in_d_of_e_nav.map(about => {
                  // International Department of Education => in_d_of_e
                  return (
                    <NavDropdown.Item as={Link} to={`/display/` + about.in_d_of_e_nav_id} >{about.in_d_of_e_nav_title}</NavDropdown.Item>
                  );
                })}
              </NavDropdown>

              <Nav.Link as={Link} to="/contact">
                تماس باما
            </Nav.Link>


            </Nav>


          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
