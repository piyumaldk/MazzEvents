import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';
import '../App.css';
import Help from './Help';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import ChatIcon from '@material-ui/icons/Chat';
import MailIcon from '@material-ui/icons/Mail';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HelpIcon from '@material-ui/icons/Help';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';

export default class LeftCustomer extends Component {
    render(){
        return(
            <div> 
                <nav className="sidenav">
                <ul className="list-unstyled components">
                <center><h>Customer Dashboard</h></center>
                <p>Components</p>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><PhotoCameraIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <li><a href="/customer/photo">Photographers</a></li>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><LibraryMusicIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <li><a href="/customer/dj">Dj</a></li>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><MusicNoteIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10"> 
                    <li><a href="/customer/music">Music</a></li>
                    </div>
                </div>
              
                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><FastfoodIcon   style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <li><a href="/customer/catering">Catering</a></li>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><RestaurantMenuIcon style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <li><a href="/customer/halls">Reception Halls</a></li>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><LocalFloristIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <li><a href="/customer/flowers">Flowers</a></li>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><AirportShuttleIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <li><a href="/customer/vehicles">Vehicles</a></li>
                    </div>
                </div>
        
                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><ChatIcon style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <li><a href="/customer/chat">Chat</a></li>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><MailIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <li><a href="/customer/mail">Mail Box</a></li>
                    </div>
                </div>

                {/* <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><CalendarTodayIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <a href="/customer/eventscl">Events Calendar</a>
                    </div>
                </div> */}

                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><AccountBoxIcon  style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <li><a href="/customer/account">My Account</a></li>
                    </div>
                </div>

                {/* <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><StarIcon style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <li><a href="/customer/rating">Rating</a></li>
                    </div>
                </div> */}
                
                <div className="row">
                    <div className="col-md-1"><a href="/admin/staff"><HelpIcon style={{ fontSize: 22}}/></a></div>
                    <div className="col-md-10">
                    <li> 
                     <div class="help">
                        <Help/>
                     </div>
                    </li>
                    </div>
                </div>
                </ul>
                </nav>    
            </div>
        )
    }
}
