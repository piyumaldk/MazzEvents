import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';
import '../App.css';

export default class LeftServiceProvider extends Component {
    render() {
        return (
            <div class="sidenav">
                <h5>Staff Dashboard</h5>
                <p>Components</p>
                <a href="/staff/account">Staff Account</a>
                <a href="/staff/chat">Chat</a>
                <a href="/staff/mailbox">Mail Box</a>
                <a href="/staff/eventcalendar">Event Calendar</a>
                <a href="/staff/charts">Charts</a>
                <a href="/staff/sendnotification">Send Notification</a>
                <a href="/staff/serviceprovider">Service Provider +</a>
                <a href="/staff/customer">Customer +</a>
                <p>More Pages</p>
                <a href="/staff/customerreviews">Customer Reviews</a>
                <a href="/staff/authentication">Authentication</a>
                <a href="/staff/maps">Maps</a>
            </div>
        )
    }
}
