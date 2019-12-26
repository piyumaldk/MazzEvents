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
import Upper from "./Components/Upper.component";



class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    
    let route;
    if(this.props.isAuthenticated === false) {
      route = <Switch>
        <Route path="/serviceprovider" component={Home}/>
        <Route path="/customer" component={Home}/>
        <Route path="/admin" component={Home}/>
        <Route path="/staff" component={Home}/>        
      </Switch>
    }
    //Customer 
    if(this.props.isAuthenticated === true && this.props.type === "1") {
      route = <Switch>
        <Route path="/serviceprovider" render={() => <h1>Customers are not allowed to visit Service Provider section.</h1>}/>
        <Route path="/customer" component={Customer}/>
        <Route path="/admin" render={() => <h1>Customers are not allowed to visit Administator section</h1>}/>
        <Route path="/staff" render={() => <h1>Customers are not allowed to visit Staff Member section</h1>}/> 
      </Switch>
    }  
    //ServiceProvider
    if(this.props.isAuthenticated === true && this.props.type === "2") {
      route = <Switch>
        <Route path="/serviceprovider" component={ServiceProvider}/>
        <Route path="/customer" render={() => <h1>Service Providers are not allowed to visit Customer section</h1>}/>
        <Route path="/admin" render={() => <h1>Service Providers are not allowed to visit Administrator section</h1>}/>
        <Route path="/staff" render={() => <h1>Service Providers are not allowed to visit Staff Member section</h1>}/> 
      </Switch>
    }
    //Staff
    if(this.props.isAuthenticated === true && this.props.type === "3") {
      route = <Switch>
        <Route path="/serviceprovider" render={() => <h1>Staff Members are not allowed to visit Service Provider section</h1>}/>
        <Route path="/customer" render={() => <h1>Staff Members are not allowed to visit Customer section</h1>}/>
        <Route path="/admin" render={() => <h1>Staff Members are not allowed to visit Administator section</h1>}/>
        <Route path="/staff" component={Staff}/> 
      </Switch>
    } 
    //Admin
    if(this.props.isAuthenticated === true && this.props.type === "4") {
      route = <Switch>
        <Route path="/serviceprovider" render={() => <h1>Administator is not allowed to visit Service Provider section</h1>}/>
        <Route path="/customer" render={() => <h1>Administator is not allowed to visit Customer section</h1>}/>
        <Route path="/admin" component={Admin}/>
        <Route path="/staff" render={() => <h1>Administator is not allowed to visit Staff Member section</h1>}/> 
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
  isAuthenticated: state.auth.isAuthenticated,
  type: state.auth.type
});

export default connect(mapStateToProps,null)(App);