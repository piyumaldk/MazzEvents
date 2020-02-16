import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminChat from "./Chat.component";
import AdminAuthentication from "./Authentication.component";
import AdminCharts from "./Charts.component";
import AdminCustomer from "./Customer.component";
import AdminCustomerReviews from "./CustomerReviews.component";
import AdminEventCalendar from "./EventCalendar.component";
import AdminMailbox from "./Mailbox.component";
import AdminMaps from "./Maps.component";
import AdminSendNotification from "./SendNotification.component";
import AdminServiceProvider from "./ServiceProvider.component";
import AdminStaff from "./Staff.component";
import LeftAdmin from "../../Components/LeftAdmin.component";
import EditStaff from "./EditStaff";
import EditNotification from "./EditNotification";
import ANotification from "./Notification";

export default class Admin extends Component {
    render() {
        return (
            <div>
                <LeftAdmin/>
                
                <Router>
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
                    <Route path="/admin/editstaff/:id" component={EditStaff}/>
                    <Route path="/admin/editnotification/:id" component={EditNotification}/>
                    <Route path="/admin/notification/" component={ANotification}/>
                    
                    
                </Router>
               
            </div>
        )
    }
}