import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import store from './store';
import { loadUser} from './Actions/authActions';

import Home from "./Pages/Home.component";
import LogIn from "./Pages/LogIn.component";
import AboutUs from "./Pages/AboutUs.component";
import SignUp from "./Pages/SignUp.component";

import ServiceProvider from "./Pages/ServiceProvider/ServiceProvider";
import Admin from "./Pages/Admin/Admin";
import Staff from "./Pages/Staff/Staff";
import Customer from "./Pages/Customer/Customer";
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    console.log(this.props.isAuthenticated);
    let route = <Switch>
          <Route path="/serviceprovider" render={() => <h1>Not found : Error 404</h1>}/>
          <Route path="/customer" render={() => <h1>Not found : Error 404</h1>}/>
          <Route path="/admin" render={() => <h1>Not found : Error 404</h1>}/>
          <Route path="/staff" render={() => <h1>Not found : Error 404</h1>}/>
          <Route path="/" component={Home}/>
        </Switch>

if(this.props.isAuthenticated === true) {
  route = <Switch>
    <Route path="/serviceprovider" component={ServiceProvider}/>
    <Route path="/customer" component={Customer}/>
    <Route path="/admin" component={Admin}/>
    <Route path="/staff" component={Staff}/>
    <Route path="/" component={Home}/>
  </Switch>
} 
        
    return (
      
      <Router>
        {route}
      </Router>
      
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated

});

export default connect(mapStateToProps,null)(App);




/*let route = <Switch>
    <Route path="/serviceprovider" render={() => <h1>Not found utto</h1>}/>
    <Route path="/" component={Home}/>
</Switch>

if(isAuthenticated === true) {
  route = <Switch>
  <Route path="/serviceprovider" component={ServiceProvider}/>
  <Route path="/" component={Home}/>
</Switch>
}*/


