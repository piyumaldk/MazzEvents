import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Pages/Home.component";


export default class LeftStaff extends Component {
    render() {
        return (
            <div class="sidenav">
                <h5>Customer</h5>
                <p>Components</p>
                <a href="/serviceprovider/addservices">Add Services +</a>
                <a href="/customer/photo">Photographers</a>
                <a href="/customer/dj">Dj</a>
                <a href="/customer/music">Music</a>
                <a href="/customer/catering">Catering</a>
                <a href="/customer/reception">Reception Halls</a>
                <a href="/customer/hotels">Hotels</a>
                <a href="/customer/flowers">Flowers</a>
                <a href="/customer/vehicles">Vehicles</a>
                <p>More Pages</p>
                <a href="/customer/chat">Chat</a>
                <a href="/customer/mail">Mail Box</a>
                <a href="/customer/eventscl">Events Calendar</a>
                <a href="/customer/account">My Account</a>
                <a href="/customer/rating">Rating</a>
            </div>
        )
    }
}
