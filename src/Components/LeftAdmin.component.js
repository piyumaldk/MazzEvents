import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';
import '../Css/Sidenav.css';

export default class LeftServiceProvider extends Component {
    render() {
        return (
            <div> 
                <nav id="sidenav">
                    <ul class="list-unstyled components">
                        <h>Administrator Dashboard</h>
                        <p>Components</p>
                        <li><a href="/admin/staff">Staff +</a></li>
                        <li><a href="/admin/chat">Chat</a></li>
                        <li><a href="/admin/mailbox">Mail Box</a></li>
                        <li><a href="/admin/eventcalendar">Event Calendar</a></li>
                        <li><a href="/admin/charts">Charts</a></li>
                        <li><a href="/admin/sendnotification">Send Notification</a></li>
                        <li><a href="/admin/serviceprovider">Service Provider +</a></li>
                        <li><a href="/admin/customer">Customer +</a></li>
                        <p>More Pages</p>
                        <li><a href="/admin/customerreviews">Customer Reviews</a></li>
                        <li><a href="/admin/authenticaton">Authentication</a></li>
                        <li><a href="/admin/maps">Maps</a></li>   
                    </ul>      
                </nav>
            </div>
        )
    }
}
