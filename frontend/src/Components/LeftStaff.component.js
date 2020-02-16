import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';
import '../App.css';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ChatIcon from '@material-ui/icons/Chat';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import MoodIcon from '@material-ui/icons/Mood';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';

export default class LeftStaff extends Component {
    render() {
        return (
            <div>
            <nav className="sidenav">
                <ul className="list-unstyled components">
                <h>Staff Dashboard</h>
                <p>Components</p>
                <div className="row">
                        <div className="col-md-1"><a href="/admin/staff"><PersonIcon style={{ fontSize: 22}}/></a></div>
                        <div className="col-md-9">
                            <li><a href="/staff/account">Staff Account</a></li>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/staff/chat"><ChatIcon  style={{ fontSize: 22}}/></a></div>
                        <div className="col-md-9">
                            <li><a href="/staff/chat">Chat</a></li>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/staff/mailbox"><MailIcon  style={{ fontSize: 22}}/></a></div>
                        <div className="col-md-9">
                            <li><a href="/staff/mailbox">Mail Box</a></li>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/staff/mailbox"><EmojiEventsIcon  style={{ fontSize: 22}}/></a></div>
                        <div className="col-md-9">
                            <li><a href="/staff/eventcalendar">Publicize Events</a></li>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/staff/mailbox"><InsertChartIcon  style={{ fontSize: 22}}/></a></div>
                        <div className="col-md-9">
                            <li><a href="/staff/charts">Charts</a></li>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/staff/mailbox"><MoodIcon style={{ fontSize: 22}}/></a></div>
                        <div className="col-md-9">
                            <li><a href="/staff/customer">Customers</a></li>
                        </div>
                        </div>

                        <p>Our Service Providers</p>

                        <div className="row">
                        <div className="col-md-1"><a href="/staff/mailbox"><FastfoodIcon  style={{ fontSize: 22}}/></a></div>
                        <div className="col-md-9">
                            <li><a href="/staff/catering">Catering</a></li>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/staff/mailbox"><LibraryMusicIcon style={{ fontSize: 22}}/></a></div>
                        <div className="col-md-9">
                            <li><a href="/staff/dj">Dj</a></li>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/staff/mailbox"><MusicNoteIcon style={{ fontSize: 22}}/></a></div>
                        <div className="col-md-9">
                            <li><a href="/staff/music">Music</a></li>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/staff/mailbox"><PhotoCameraIcon  style={{ fontSize: 22}}/></a></div>
                        <div className="col-md-9">
                            <li><a href="/staff/photographer">Photographers</a></li>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/staff/mailbox"><LocalFloristIcon style={{ fontSize: 22}}/></a></div>
                        <div className="col-md-9">
                            <li><a href="/staff/flowers">Flowers</a></li>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/staff/mailbox"><AirportShuttleIcon  style={{ fontSize: 22}}/></a></div>
                        <div className="col-md-9">
                            <li><a href="/staff/vehicles">vehicles</a></li>
                        </div>
                        </div>

                        <div className="row">
                        <div className="col-md-1"><a href="/staff/mailbox"><RestaurantMenuIcon  style={{ fontSize: 22}}/></a></div>
                        <div className="col-md-9">
                            <li><a href="/staff/receptionhalls">Reception Halls</a></li>
                        </div>
                        </div>
                </ul>
             </nav>
         </div>
                
        )
    }
}
