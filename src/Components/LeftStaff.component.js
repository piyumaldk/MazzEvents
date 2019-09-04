import React, { Component } from 'react';
import '../App.css';

export default class LeftStaff extends Component {
    render() {
        return (
            <div class="sidenav">
                <h5>Staff Dashboard</h5>
                <p>Components</p>
                <a href="#about">Staff Account</a>
                <a href="#services">Chat</a>
                <a href="#clients">Mail Box</a>
                <a href="#contact">Event Calender</a>
                <a href="#about">Charts</a>
                <a href="#services">Send Notification</a>
                <a href="#clients">Service Providers +</a>
                <a href="#contact">Customers +</a>
                <p>More Pages</p>
                <a href="#about">Customer Reviews +</a>
                <a href="#services">Authentication +</a>
                <a href="#clients">Maps</a>
            </div>
        )
    }
}