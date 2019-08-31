import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Home.component";
import LogIn from "./Components/LogIn.component";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>MazzEvents - nipuni</h2>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LogIn} />
        </div>
      </Router>
    );
  }
}

export default App;