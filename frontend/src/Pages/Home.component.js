import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import Upper from "../Components/Upper.component";

import {Button, Card, CardDeck} from 'react-bootstrap';
import axios from 'axios';

const Events = props => (
    
    <div className="col-md-3">   
    <br/><br/>
        <Card  bg="Danger" text="black" style={{ width: '14.9rem', height:'25rem', borderRadius:'8'}}>   
        {/* <Card.Img variant="top" height="240" src={company} /> */}
       <center><Card.Header><b>{props.events.eventName}</b></Card.Header>
            <Card.Body>
            {/* <Card.Title></Card.Title> */}
            <Card.Text >
                Event Name:{props.events.eventName}<br/>
                Location:{props.events.location}<br/>
                Time:{props.events.time}<br/>
                    <br/>
             </Card.Text>
            <center><Button variant="light" href={props.events.link}>Learn More</Button></center>
            </Card.Body></center>
        </Card>     
    </div>
)

const Notifications = props => (
    <div>   
        <Card  border="primary" text="black" style={{ width: '18.5rem', height:'15rem', borderRadius:'8'}}>   
        {/* <Card.Img variant="top" height="240" src={company} /> */}
       <center><Card.Header><b>{props.notifications.topic}</b></Card.Header>
            <Card.Body>
            {/* <Card.Title></Card.Title> */}
            <Card.Text >
                Date:{props.notifications.time}<br/>
                Detail:{props.notifications.detail}<br/>
                <br/>
             </Card.Text>
            </Card.Body></center>
        </Card>     
    </div>
)

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {users: [], notifi:[]};
    }
    
    componentDidMount() {
        axios.get('http://localhost:4000/events')
            .then(response => {
                this.setState({ users: response.data });
                console.log(this.state.users);
            })
            .catch(function (error){
                console.log(error);
            })

            axios.get('http://localhost:4000/notifications')
            .then(response => {
                this.setState({ notifi: response.data });
                console.log(this.state.notifi);
            })
            .catch(function (error){
                console.log(error);
            })
            
    }

    UserList1() {
        return this.state.users.map(function(currentEvents, i){
            return <Events events={currentEvents} key={i} />;
        })
    }
    UserList2() {
        return this.state.notifi.map(function(currentNotifications, i){
            return <Notifications notifications={currentNotifications} key={i}
             />;
        })
    }

    render() {
        return (
            <div>
                <div className="navb">  
                    <Upper/>
                    </div>
                   {/* ccd {props.event.eventName} */}
                     <div >
                        <Carousel >
                            <Carousel.Item>
                                <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2015/05/15/14/50/concert-768722_960_720.jpg" alt="First slide"/>
                                <Carousel.Caption>
                                    <h3>Kasun Kalhara - Musical Night</h3>
                                    <p>5th December : @Nelum Pokuna(7pm onwards)</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695_960_720.jpg" alt="Third slide"/>
                                <Carousel.Caption>
                                    <h3>New Year Vibe - 2020</h3>
                                    <p>31th December : @Viharamahadhevi(9pm onwards)</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="d-block w-100" src="https://cdn.pixabay.com/photo/2015/09/02/13/04/marriage-918864_960_720.jpg" alt="Third slide"/>
                                <Carousel.Caption>
                                    <h3>Mithila n Sumanawathi's Big day</h3>
                                    <p>18th December : @AvenraNegombo(5pm onwards)</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel> 
                        </div>
                    <div >
                        <br/><Card style={{width:"100%"}}><center><h3><b>Upcoming events</b></h3></center></Card>
                        

                        <div>
                            <div className="container-fluid">
                                    
                                <CardDeck>
                                {this.UserList1()}
                                    
                                    </CardDeck>
                            </div>
                        </div>   

                    </div>
                    <div >
                        <center><h3><b>Notifications</b></h3></center>

                        <div>
                            <div className="container-fluid">
                                    
                                <CardDeck>
                                {this.UserList2()}
                                    
                                    </CardDeck>
                            </div>
                        </div>   

                    </div>
                    <div >
                        
                        
                            <div className="container-fluid">
                            <div className="row bg-primary text-white" >
                                <div col-md-3>

                                </div> 
                                <div col-md-3>

                                </div>
                                <div col-md-3>

                                </div>
                                <div col-md-3>

                                </div>      
                            </div>   
                            </div>
                           

                    </div>
                
                    
                </div>  
        )
    }
}