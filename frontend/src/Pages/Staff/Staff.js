import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import StaffAccount from "./Account.component";
import StaffChat from "./Chat.component";
import StaffMailbox from "./Mailbox.component";
import StaffEventCalendar from "./EventCalendar.component";
import StaffCharts from "./Charts.component";
import StaffCustomer from "./Customer.component";
import EditServiceProvider from "./EditServiceProvider.component";

import StaffCatering from "./Catering.component";
import StaffDj from "./Dj.component";
import StaffMusic from "./Music.component";
import StaffPhotographers from "./Photography.component";
import StaffVehicles from "./Vehicles.component";
import StaffReceptionHalls from "./ReceptionHalls.component";
import StaffFlowers from "./Flowers.component";
import EditEvent from "./EditEvent.component";
import EventList from "./EventList.component";
import DeleteCustomer from "./Delete.component";

//import RegisterVehiclesModal from "../../Components/Auth/RegisterVehiclesModal";


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
                    <Route path="/staff/customer" component={StaffCustomer}/>
                    <Route path="/staff/editserviceprovider/:id" component={EditServiceProvider} />

                    <Route path="/staff/catering" component={StaffCatering}/>
                    <Route path="/staff/dj" component={StaffDj}/>
                    <Route path="/staff/music" component={StaffMusic}/>
                    <Route path="/staff/photographer" component={StaffPhotographers}/>
                    <Route path="/staff/vehicles" component={StaffVehicles}/>
                    <Route path="/staff/receptionhalls" component={StaffReceptionHalls}/>
                    <Route path="/staff/flowers" component={StaffFlowers}/>
                    <Route path="/staff/editevent/:id" component={EditEvent}/>
                    <Route path="/staff/eventlist" component={EventList}/>
                    <Route path="/staff/deletecustomer/:id" component={DeleteCustomer}/>
                </Router>
            </div>
        )
    }
}