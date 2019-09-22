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

import ServiceProviderAddServices from "./Pages/ServiceProvider/AddServices.component";
import ServiceProviderAccount from "./Pages/ServiceProvider/Account.component";
import ServiceProviderAddDiscountOffers from "./Pages/ServiceProvider/AddDiscountOffers.component";
import ServiceProviderCharts from "./Pages/ServiceProvider/Charts.component";
import ServiceProviderChat from "./Pages/ServiceProvider/Chat.component";
import ServiceProviderEventCalendar from "./Pages/ServiceProvider/EventCalendar.component";
import ServiceProviderHelp from "./Pages/ServiceProvider/Help.component";
import ServiceProviderMailbox from "./Pages/ServiceProvider/MailBox.component";
import ServiceProviderReviews from "./Pages/ServiceProvider/Reviews.component";
import ServiceProviderViewBookings from "./Pages/ServiceProvider/ViewBookings.component";
import ServiceProviderViewServices from "./Pages/ServiceProvider/ViewServices.component";

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
          <Route path="/staff/calendar" component={StaffCalendar}/>
        {/*Customer Routes*/}
          <Route path="/customer/dash" component={LeftCustomer} />
        {/*Service Provider Routes*/}
          <Route path="/serviceprovider/addservices" component={ServiceProviderAddServices}/>
          <Route path="/serviceprovider/account" component={ServiceProviderAccount}/>
          <Route path="/serviceprovider/adddiscountoffers" component={ServiceProviderAddDiscountOffers}/>
          <Route path="/serviceprovider/charts" component={ServiceProviderCharts}/>
          <Route path="/serviceprovider/chat" component={ServiceProviderChat}/>
          <Route path="/serviceprovider/eventcalendar" component={ServiceProviderEventCalendar}/>
          <Route path="/serviceprovider/help" component={ServiceProviderHelp}/>
          <Route path="/serviceprovider/mailbox" component={ServiceProviderMailbox}/>
          <Route path="/serviceprovider/reviews" component={ServiceProviderReviews}/>
          <Route path="/serviceprovider/viewbookings" component={ServiceProviderViewBookings}/>
          <Route path="/serviceprovider/viewservices" component={ServiceProviderViewServices}/>
        </div>
      </Router>
    );
  }
}

export default App;