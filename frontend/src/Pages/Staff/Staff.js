import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StaffAccount from "./Account.component";
import StaffChat from "./Chat.component";
import StaffMailbox from "./Mailbox.component";
import StaffEventCalendar from "./EventCalendar.component";
import StaffCharts from "./Charts.component";
import StaffSendNotification from "./SendNotification.component";
import StaffServiceProvider from "./ServiceProvider.component";
import StaffCustomer from "./Customer.component";
import StaffCustomerReviews from "./CustomerReviews.component";
import StaffAuthentication from "./Authentication.component";
import StaffMaps from "./Maps.component";
import EditServiceProvider from "./EditServiceProvider.component";
import StaffCatering from "./Catering.component";
import StaffDj from "./Dj.component";
import StaffMusic from "./Music.component";
import StaffPhotographers from "./Photography.component";
import DeleteOther from "./DeleteOther";


export default class Staff extends Component {
    render() {
        return (
            <div>
                <Router>
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
                    <Route path="/staff/catering" component={StaffCatering}/>
                    <Route path="/staff/dj" component={StaffDj}/>
                    <Route path="/staff/music" component={StaffMusic}/>
                    <Route path="/staff/photographer" component={StaffPhotographers}/>
                    <Route path="/staff/editserviceprovider/:id" component={EditServiceProvider} />
                    <Route path="/staff/deletecustomer/:id" component={DeleteOther} />
                </Router>
            </div>
        )
    }
}