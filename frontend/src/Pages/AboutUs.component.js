import React, { Component } from 'react';
import Upper from "../Components/Upper.component";
import {Card} from 'react-bootstrap';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
            
             <Upper/>
              <div className="leftAboutUs">
                  <Card>
                 <h1><b>About Us</b></h1>
                    <h3>We are MazzEvents</h3>
                    <div className="text1">
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
                    </div>
                    
                    <h3>Join with our website and make your event AWESOME!!!</h3>
                    </Card>
                </div>

                <div className="rightAboutUs">
                    <div className="aboutustop">

                    <center><Card>
                    <div className="overflow">
                        <Card.Img variant="top" height="240" src={'../../Images/logo.png'}/>
                    </div>    
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                <b>Address</b><br/> 
                                MazzEvents, 9 Rampart Street, Fort, Gale<br/><br/>
                                <b>Email Addtress</b><br/>
                                <a href>mazzEvents@gmail.com</a><br/><br/>
                                <b>Contact No</b><br/>
                                0770523682<br/>

                               
                                </Card.Text>
                            </Card.Body>
                        </Card></center>
                

                    </div>

                    
                </div>
            </div>
        )
    } }