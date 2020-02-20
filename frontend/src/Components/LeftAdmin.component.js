import React, { Component } from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import MailIcon from '@material-ui/icons/Mail';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default class LeftAdmin extends Component {
    render() {
        return (
            <div> 
                <nav className="sidenav">
                    <ul className="list-unstyled components">
                        <center><h>Administrator Dashboard</h></center>
                        <p>Components</p>

                        <div className="row">
                        <div className="col-md-1"><a href="/admin/staff"><PersonAddIcon  style={{ fontSize: 22}}/></a></div>
                        <div className="col-md-10">
                            <li><a href="/admin/staff">Staff</a></li>
                        </div>
                        </div>
                        
                        <div className="row">
                        <div className="col-md-1"><a href="/admin/staff"><ChatIcon style={{ fontSize: 22}} /></a></div>
                        <div className="col-md-10">
                            <li><a href="/admin/chat">Chat</a></li>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/admin/staff"><MailIcon style={{ fontSize: 22}} /></a></div>
                        <div className="col-md-10">
                            <li><a href="/admin/mailbox">Mail Box</a></li>
                        </div>
                        </div>
                    
                        {/* <div className="row">
                        <div className="col-md-1"><a href="/admin/staff"><CalendarTodayIcon style={{ fontSize: 22}} /></a></div>
                        <div className="col-md-10">
                            <li><a href="/admin/eventcalendar">Event Calendar</a></li>
                        </div>
                        </div> */}

                        <div className="row">
                        <div className="col-md-1"><a href="/admin/staff"><InsertChartIcon style={{ fontSize: 22}} /></a></div>
                        <div className="col-md-10">
                            <li><a href="/admin/charts">Charts</a></li>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/admin/staff"><NotificationsActiveIcon style={{ fontSize: 22}} /></a></div>
                        <div className="col-md-10"><li><a href="/admin/notification">Notifications</a></li></div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/admin/staff"><NotificationsActiveIcon style={{ fontSize: 22}} /></a></div>
                        <div className="col-md-10"><li><a href="/admin/sendnotification">Send Notification</a></li></div>
                        </div>


                        <div className="row">
                        <div className="col-md-1"><a href="/admin/staff"><PersonAddIcon style={{ fontSize: 22}} /></a></div>
                        <div className="col-md-10"><li><a href="/admin/serviceprovider">Service Provider</a></li></div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/admin/staff"><PersonAddIcon style={{ fontSize: 22}} /></a></div>
                        <div className="col-md-10"><li><a href="/admin/customer">Customer</a></li></div>
                        </div>

                        {/* <div className="row">
                        <div className="col-md-1"><a href="/admin/staff"><RateReviewIcon  style={{ fontSize: 22}} /></a></div>
                        <div className="col-md-10"><li><a href="/admin/customerreviews">Customer Reviews</a></li></div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/admin/staff"><SupervisorAccountIcon style={{ fontSize: 22}} /></a></div>
                        <div className="col-md-10"><li><a href="/admin/authenticaton">Authentication</a></li></div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/admin/staff"><RoomIcon style={{ fontSize: 22}} /></a></div>
                        <div className="col-md-10"><li><a href="/admin/maps">Maps</a></li></div>
                        </div> */}
                    </ul>      
                </nav>
            </div>
        )
    }
}
