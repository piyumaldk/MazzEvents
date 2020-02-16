import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';
import '../App.css';

export default class LeftStaff extends Component {
    render() {
        return (
            <div className="sidenav">
                <h5>Staff Dashboard</h5>
                <p>Components</p>
                <a href="/staff/account">Staff Account</a>
                <a href="/staff/chat">Chat</a>
                <a href="/staff/mailbox">Mail Box</a>
                <a href="/staff/eventcalendar">Publicize Events</a>
                <a href="/staff/charts">Charts</a>
                <a href="/staff/customer">Customers</a>
                <p>Our Service Providers</p>
                <a href="/staff/catering">Catering</a>
                <a href="/staff/dj">Dj</a>
                <a href="/staff/music">Music</a>
                <a href="/staff/photographer">Photographers</a>
                <a href="/staff/flowers">Flowers</a>
                <a href="/staff/vehicles">vehicles</a>
                <a href="/staff/receptionhalls">Reception Halls</a>
            </div>
        )
    }
}
