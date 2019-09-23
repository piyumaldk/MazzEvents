import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import Home from "./Pages/Home.component";
import LogIn from "./Pages/LogIn.component";
import AboutUs from "./Pages/AboutUs.component";
import SignUp from "./Pages/SignUp.component";
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

import StaffAccount from "./Pages/Staff/Account.component";
import StaffChat from "./Pages/Staff/Chat.component";
import StaffMailbox from "./Pages/Staff/Mailbox.component";
import StaffEventCalendar from "./Pages/Staff/EventCalendar.component";
import StaffCharts from "./Pages/Staff/Charts.component";
import StaffSendNotification from "./Pages/Staff/SendNotification.component";
import StaffServiceProvider from "./Pages/Staff/ServiceProvider.component";
import StaffCustomer from "./Pages/Staff/Customer.component";
import StaffCustomerReviews from "./Pages/Staff/CustomerReviews.component";
import StaffAuthentication from "./Pages/Staff/Authentication.component";
import StaffMaps from "./Pages/Staff/Maps.component";

import AdminChat from "./Pages/Admin/Chat.component";
import AdminAuthentication from "./Pages/Admin/Authentication.component";
import AdminCharts from "./Pages/Admin/Charts.component";
import AdminCustomer from "./Pages/Admin/Customer.component";
import AdminCustomerReviews from "./Pages/Admin/CustomerReviews.component";
import AdminEventCalendar from "./Pages/Admin/EventCalendar.component";
import AdminMailbox from "./Pages/Admin/Mailbox.component";
import AdminMaps from "./Pages/Admin/Maps.component";
import AdminSendNotification from "./Pages/Admin/SendNotification.component";
import AdminServiceProvider from "./Pages/Admin/ServiceProvider.component";
import AdminStaff from "./Pages/Admin/Staff.component";

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
          {/*Staff Routes*/}
          <Route path="/staff/account" component={StaffAccount}/>
          <Route path="/staff/chat" component={StaffChat}/>
          <Route path="/staff/mailbox" component={StaffMailbox}/>
          <Route path="/staff/eventcalendar" component={StaffEventCalendar}/>
          <Route path="/staff/charts" component={StaffCharts}/>
          <Route path="/staff/sendnotification" component={StaffSendNotification}/>
          <Route path="/staff/serviceprovider" component={StaffServiceProvider}/>
          <Route path="/staff/customer" component={StaffCustomer}/>
          <Route path="/staff/customerreviews" component={StaffCustomerReviews}/>
          <Route path="/staff/authentication" component={StaffAuthentication}/>
          <Route path="/staff/maps" component={StaffMaps}/>
          {/*Admin Routes*/}
          <Route path="/admin/chat" component={AdminChat}/>
          <Route path="/admin/authenticaton" component={AdminAuthentication}/>
          <Route path="/admin/charts" component={AdminCharts}/>
          <Route path="/admin/customer" component={AdminCustomer}/>
          <Route path="/admin/customerreviews" component={AdminCustomerReviews}/>
          <Route path="/admin/eventcalendar" component={AdminEventCalendar}/>
          <Route path="/admin/mailbox" component={AdminMailbox}/>
          <Route path="/admin/maps" component={AdminMaps}/>
          <Route path="/admin/sendnotification" component={AdminSendNotification}/>
          <Route path="/admin/serviceprovider" component={AdminServiceProvider}/>
          <Route path="/admin/staff" component={AdminStaff}/>
        </div>
      </Router>
    );
  }
}
export default App;


