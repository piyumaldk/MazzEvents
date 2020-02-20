import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Upper from "../Components/Upper.component";

import { Button, Card, CardDeck } from 'react-bootstrap';
import axios from 'axios';
import img1 from './../Images/flower.jpeg';
import img3 from './../Images/photo.jpg';
import img4 from './../Images/car.jpeg';
import img5 from './../Images/hall.jpeg';
import img6 from './../Images/dj.jpeg';
import img7 from './../Images/catering.jpeg';
import img8 from './../Images/logo.jpg';
import img9 from './../Images/map.PNG';


const Events = props => (
    
    

    <div className="col-md-3 ">
        <br /><br/>
        <div className="flip-box ">
            <div className="flip-box-inner ">
                <div className="flip-box-front ">
                    <Card className="eventBackground" text="light" style={{ width: '100%', height: '25rem', borderRadius: '8' }}>
                        {/* <Card.Img variant="top" height="240" src={company} /> */}
                        <center><Card.Header><b>{props.events.eventName}</b></Card.Header>
                            <Card.Body>
                                {/* <Card.Title></Card.Title> */}
                                <Card.Text >
                                    Event Name:{props.events.eventName}<br />
                                    Location:{props.events.location}<br />
                                    Time:{props.events.time}<br />
                                    <br />
                                </Card.Text>
                                <center><Button variant="light" href={props.events.link}>View More</Button></center>
                            </Card.Body></center>
                    </Card>
                </div>
            </div>
        </div>
    </div>
)


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [], };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/events')
            .then(response => {
                this.setState({ users: response.data });
                console.log(this.state.users);
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    UserList1() {
        return this.state.users.map(function (currentEvents, i) {
            return <Events events={currentEvents} key={i} />;
        })
    }


    render() {

        return (
            <div>
                <div className="navb">
                    <Upper />
                </div>
                {/* ccd {props.event.eventName} */}
                <div >
                    <Carousel >
                        <Carousel.Item>
                            <img className="d-block w-100" src={img1} alt="First slide" />
                            <Carousel.Caption>
                                {/* <h3>Kasun Kalhara - Musical Night</h3>
                                <p>5th December : @Nelum Pokuna(7pm onwards)</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src={img3} alt="Third slide" />
                            <Carousel.Caption>
                                {/* <h3>New Year Vibe - 2020</h3>
                                <p>31th December : @Viharamahadhevi(9pm onwards)</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src={img4} alt="forth slide" />
                            <Carousel.Caption>
                                {/* <h3>Mithila n Sumanawathi's Big day</h3>
                                <p>18th December : @AvenraNegombo(5pm onwards)</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src={img5} alt="fifth slide" />
                            <Carousel.Caption>
                                {/* <h3>Mithila n Sumanawathi's Big day</h3>
                                <p>18th December : @AvenraNegombo(5pm onwards)</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src={img6} alt="sixth slide" />
                            <Carousel.Caption>
                                {/* <h3>Mithila n Sumanawathi's Big day</h3>
                                <p>18th December : @AvenraNegombo(5pm onwards)</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src={img7} alt="seventh slide" />
                            <Carousel.Caption>
                                {/* <h3>Mithila n Sumanawathi's Big day</h3>
                                <p>18th December : @AvenraNegombo(5pm onwards)</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                        

                    </Carousel>
                </div>
                <section id="upcomming_eve">
             
                <div ><Card bg="dark" text="white" style={{ width: "100%" }}><center><h3><b><div className="text1">Upcoming events</div></b></h3></center></Card>


                    <div>
                        <div className="container-fluid">

                            <CardDeck>
                                {this.UserList1()}

                            </CardDeck>
                        </div>
                    </div>

                </div>
                </section>
                <section id = "about_us">
                <Card bg="dark" text="white" style={{ width: "100%" }}><center><h3><b><div className="text1">About Us</div></b></h3></center></Card>
                <div className="row">
                        {/* <div className="col">
                            

                         </div> */}

                         <div className="col">
                             

                            <div className="col">
                            <div id= "justify">
                                <center>
                                    <h3>We are MazzEvents</h3><br/><br/>
                                    <p >
                                    Mazz Event is a professional event management company in Galle. The company was started on 2018 as 
                                    a startup company for event management.
                                    Which now specializes in planning and coordinating various events from weddings,
                                    birthday parties,private functions to kids parties and much more.
                                    with out being a traditional company  the company is addopting to new digital trends.
                                    </p><br/><br/>
                                </center>
                            </div>
                            </div>
                            
                        </div>

                         <div className="col">
                             <br/>
                                <img width = "90%" height = "90%" src = {img9}/>
                         </div>

                        

                    </div>         
                </section>

                <footer id="main-footer1">
                    <div class="container">
                    <div class="row">
                        <div class="col">
                            <br/>
                                <img align = "left" width = "40%" src = {img8}/>
                            <br/>
                            
                            
                        </div>
                        <div class="col" >
                            <br/>
                            <h2>Contact Us</h2>
                            0770523682<br/><br/>
                            <b>Address</b><br/> 
                            MazzEvents, 9 Rampart Street, Fort, Gale<br/><br/>
                            <b>Email Address</b><br/>
                            <a href>mazzeventsrilanka@gmail.com</a><br/><br/>
                        </div>

                    </div>
                    </div>
                </footer>

                <footer id="main-footer" class="text-center p-4">
                    <div class="container">
                    <div class="row">
                        <div class="col">
                        <p>©2020 All rights reserved by &copy;
                            <span id="year"></span> MazzEvents</p>
                        </div>
                    </div>
                    </div>
                </footer>

                </div>

            
        )
    }
}