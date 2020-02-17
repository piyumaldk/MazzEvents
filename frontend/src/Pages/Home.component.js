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
const Events = props => (

    <div className="col-md-3 ">
        <br /><br/>
        <div className="flip-box ">
            <div className="flip-box-inner ">
                <div className="flip-box-front ">
                    <Card bg="dark" text="black" style={{ width: '100%', height: '25rem', borderRadius: '8' }}>
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
                                <center><Button variant="light" href={props.events.link}>Learn More</Button></center>
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
                                <h3>Kasun Kalhara - Musical Night</h3>
                                <p>5th December : @Nelum Pokuna(7pm onwards)</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src={img3} alt="Third slide" />
                            <Carousel.Caption>
                                <h3>New Year Vibe - 2020</h3>
                                <p>31th December : @Viharamahadhevi(9pm onwards)</p>
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
                <div >
                    <br /><Card style={{ width: "100%" }}><center><h3><b>Upcoming events</b></h3></center></Card>


                    <div>
                        <div className="container-fluid">

                            <CardDeck>
                                {this.UserList1()}

                            </CardDeck>
                        </div>
                    </div>

                </div>

                <section id = "about_us">
                    <div className="background">
                
                        <div className="leftAboutUs">
                            <h1><b>About Us</b></h1>
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

                            <div className="rightAboutUs">
                                <div className="aboutustop">

                                <center><Card>
                                    <Card.Img variant="top" height="240" src={img8}/>
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
                </section>


            </div>
        )
    }
}