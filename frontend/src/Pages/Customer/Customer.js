import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dj from "./Dj.component";
import Music from "./Music.component";
import Catering from "./Catering.component";
import Flowers from "./Flowers.component";
import Vehicles from "./Vehicles.component";
import Cchat from "./Cchat.component";
import CmailBox from "./CmailBox.component";
import CeventsCalendar from "./CeventsCalendar.component";
import CustomerAccount from "./CustomerAccount.component";
import Rating from "./Rating.component";
import Photographers from "./Photographers.component";
import Halls from "./ReceptionHalls.component";
import ResetPassword from "./ResetPassword";
import More from "./More.component";
import ClientViewNurseCalendar from "./CustomerCalendar";
export default class Customer extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/customer/photo" component={Photographers} />
                    <Route path="/customer/dj" component={Dj} />
                    <Route path="/customer/music" component={Music} />
                    <Route path="/customer/catering" component={Catering} />
                    <Route path="/customer/flowers" component={Flowers} />
                    <Route path="/customer/vehicles" component={Vehicles} />
                    <Route path="/customer/chat" component={Cchat} />
                    <Route path="/customer/mail" component={CmailBox} />
                    <Route path="/customer/eventscl" component={CeventsCalendar} />
                    <Route path="/customer/account" component={CustomerAccount} />
                    <Route path="/customer/rating" component={Rating} />
                    <Route path="/customer/halls" component={Halls} />
                    <Route path="/customer/repassword" component={ResetPassword} />
                    <Route path="/customer/more/:id" component={More} />
                    <Route path="/customer/testing" component={ClientViewNurseCalendar} />
                </Router>
            </div>
        )
    }
}