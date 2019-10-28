import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class LeftServiceProvider extends Component {
    render() {
        return (
            <div class="sidenav">
                <h5>Service Provider</h5>
                <p>Components</p>
                <a href="/serviceprovider/addservices">Add Services +</a>
                <a href="/serviceprovider/chat">Chat</a>
                <a href="/serviceprovider/mailbox">Mail Box</a>
                <a href="/serviceprovider/eventcalendar">Event Calendar</a>
                <a href="/serviceprovider/charts">Charts</a>
                <a href="/serviceprovider/viewservices">View Services</a>
                <a href="/serviceprovider/reviews">Reviews and Ratings</a>
                <a href="/serviceprovider/adddiscountoffers">Add Discount Offers +</a>
                <a href="/serviceprovider/viewbookings">View Bookings</a>
                <p>More Pages</p>
                <a href="/serviceprovider/account">Account</a>
                <a href="/serviceprovider/help">Help</a>
            </div>
        )
    }
}

