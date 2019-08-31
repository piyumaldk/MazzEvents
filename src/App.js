import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';



import Home from "./Components/Home.component";
import LogIn from "./Components/LogIn.component";
import AboutUs from "./Components/AboutUs.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">MazzEvents</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Log in</Nav.Link>
              <Nav.Link href="/aboutus">About us</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search Events</Button>
            </Form>
          </Navbar>

          <Route path="/" exact component={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/aboutus" component={AboutUs} />
        </div>
      </Router>
    );
  }
}

export default App;