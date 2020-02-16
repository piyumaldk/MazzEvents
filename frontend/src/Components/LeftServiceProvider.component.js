import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';
import '../App.css';
import Help from './Help';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ChatIcon from '@material-ui/icons/Chat';
import MailIcon from '@material-ui/icons/Mail';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import ContactsIcon from '@material-ui/icons/Contacts';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import HelpIcon from '@material-ui/icons/Help';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import StarIcon from '@material-ui/icons/Star';

export default class LeftServiceProvider extends Component {
    render() {
        return (
            <div className="sidenav">
                
                <p>Components</p>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><ContactsIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                        <a href="/serviceprovider/addservices">My service</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><ChatIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                        <a href="/serviceprovider/chat">Chat</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><MailIcon style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <a href="/serviceprovider/mailbox">Mail Box</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><CalendarTodayIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <a href="/serviceprovider/eventcalendar">Event Calendar</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><InsertChartIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <a href="/serviceprovider/charts">Charts</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><DashboardIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <a href="/serviceprovider/viewservices">View Services</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><StarIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <a href="/serviceprovider/reviews">Reviews and Ratings</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><PersonAddIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <a href="/serviceprovider/adddiscountoffers">Add Discount Offers +</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><ViewAgendaIcon style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <a href="/serviceprovider/viewbookings">View Bookings</a>
                    </div>
                </div>
               
                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><AccountBoxIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <a href="/serviceprovider/account">Account</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><HelpIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <div class="help">
                        <Help/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}


