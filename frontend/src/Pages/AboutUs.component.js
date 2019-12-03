import React, { Component } from 'react';
import Upper from "../Components/Upper.component";
import {Card} from 'react-bootstrap';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
              <Upper/>
              <div class="leftAboutUs">
                 <h1><font color="blue"><b>About Us</b></font></h1>
                    <h3>We are MazzEvents</h3>
                    <p>
                    Mazz Event is a professional event management company in Galle.
                    Which specializes in planning & coordinating various events from weddings,
                    birthday parties,private functions to kids parties and much more.
                    </p>
                    <p>
                    Our website connect <b>service providers</b> that provide event related services with the 
                    <b>customers</b> who want to make their event a successful one.
                    </p>
                    <p>
                    Both service providers and customers can have a conversation with our <b>live chat</b> 
                    option online about their services
                    </p>
                    
                    <h3>Join with our website and make your event AWESOME!!!</h3>
                </div>

                <div class="rightAboutUs">
                    <div class="aboutustop">
                    <h2><font color="#00ffff">Our Location</font></h2>
                    <h3><font color="black">Map</font></h3>
                    </div>
                </div>

                <div class="rightAboutUs">
                    <div class="aboutusbottomleft">

                    <h2><font text-align= "center" color="white"><b>Contact Us</b></font></h2>

                    <p><font text-align="center" color="white"><ul>
                    <li><b>Owner</b> : Mr.Ilthizam Imtiyas</li>
                    <li><b>Address</b> : MazzEvents, 9 Rampart Street, Fort, Gale</li>
                    <li><b>Email Addtress</b> : <a href>mazzEvents@gmail.com</a></li>
                    <li><b>Contact No</b> : 0770523682</li>
                    </ul></font>
                </p>

                    </div>

                    <div class="aboutusbottomright">

                        <h2><font text-align= "center" color="white"><b>Our Logo</b></font></h2>

                        </div>

                    
                </div>
            </div>
        )
    } }