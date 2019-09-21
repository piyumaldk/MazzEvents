import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import Home from "./Pages/Home.component";
import LogIn from "./Pages/LogIn.component";
import AboutUs from "./Pages/AboutUs.component";
import SignUp from "./Pages/SignUp.component";
import StaffCalendar from "./Pages/Staff/Calendar.component";
import LeftCustomer from "./Components/LeftCustomer.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        {/*home Routes*/}
          <Route path="/" exact component={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/aboutus" component={AboutUs} />
        {/*login Routes*/}
          <Route path="/signup" component={SignUp} />
          <Route path="/staff/calendar" component={StaffCalendar} />
          <Route path="/customer/dash" component={LeftCustomer} />
        </div>
        <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="devices">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Devices
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            <main>
                
                <Route path="/home" component={props => <Home />} />
                {/* <Route path="/devices" component={props => <Devices />} />
                <Route path="/" exact component={props => <RootComponent />} /> */}
            </main>
        </React.Fragment>
    )}
    />
      </Router>
    );
  }
}

export default App;