import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ServiceProviderAddServices from "./AddServices.component";
import ServiceProviderAddServicesForm from "./AddServicesForm.component";
import ServiceProviderAccount from "./Account.component";
import ServiceProviderAddDiscountOffers from "./AddDiscountOffers.component";
import ServiceProviderCharts from "./Charts.component";
import ServiceProviderChat from "./Chat.component";
import ServiceProviderEventCalendar from "./EventCalendar.component";
import ServiceProviderHelp from "./Help.component";
import ServiceProviderMailbox from "./MailBox.component";
import ServiceProviderReviews from "./Reviews.component";
import ServiceProviderViewBookings from "./ViewBookings.component";
import ServiceProviderViewServices from "./ViewServices.component";
import Upper from "../../Components/Upper.component";
export default class ServiceProvider extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/serviceprovider/addservices" component={ServiceProviderAddServices}/>
                    <Route path="/serviceprovider/addservicesForm" component={ServiceProviderAddServicesForm}/>
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
                </Router>
            </div>
        )
    }
}