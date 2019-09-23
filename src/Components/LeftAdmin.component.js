import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class LeftServiceProvider extends Component {
    render() {
        return (
            <div class="sidenav">
                <h5>Admintrator Dashboard</h5>
                <p>Components</p>
                <a href="/admin/staff">Staff +</a>
                <a href="/admin/chat">Chat</a>
                <a href="/admin/mailbox">Mail Box</a>
                <a href="/admin/eventcalendar">Event Calendar</a>
                <a href="/admin/charts">Charts</a>
                <a href="/admin/sendnotification">Send Notification</a>
                <a href="/admin/serviceprovider">Service Provider +</a>
                <a href="/admin/customer">Customer +</a>
                <p>More Pages</p>
                <a href="/admin/customerreviews">Customer Reviews</a>
                <a href="/admin/authenticaton">Authentication</a>
                <a href="/admin/maps">Maps</a>
            </div>
        )
    }
}
