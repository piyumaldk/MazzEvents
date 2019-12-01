import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import store from './store';
import { loadUser} from './Actions/authActions';
import { connect } from 'react-redux';
import Home from "./Pages/Home.component";
import AboutUs from "./Pages/AboutUs.component";
import ServiceProvider from "./Pages/ServiceProvider/ServiceProvider";
import Admin from "./Pages/Admin/Admin";
import Staff from "./Pages/Staff/Staff";
import Customer from "./Pages/Customer/Customer";


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    console.log(this.props.isAuthenticated);
    let route = <Switch>
      <Route path="/serviceprovider" component={ServiceProvider}/>
      <Route path="/customer" component={Customer}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/staff" component={Staff}/>  
    </Switch>

    if(this.props.isAuthenticated === false) {
      route = <Switch>
        <Route path="/serviceprovider" render={() => <h1>Not found : Error 404</h1>}/>
        <Route path="/customer" render={() => <h1>Not found : Error 404</h1>}/>
        <Route path="/admin" render={() => <h1>Not found : Error 404</h1>}/>
        <Route path="/staff" render={() => <h1>Not found : Error 404</h1>}/> 
      </Switch>
    }        
    return(
      <div>
        
    <Router>
      <Route default path="/" exact component={Home}/> 
      <Route path="/aboutus" component={AboutUs}/>
      {route} 
    </Router>
    
    </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps,null)(App);