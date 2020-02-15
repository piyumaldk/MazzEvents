import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import Upper from "../Components/Upper.component";

import {Button, Card, CardDeck} from 'react-bootstrap';
import axios from 'axios';

const Events = props => (
    <div>   
        <Card  bg="light" text="black" style={{ width: '20rem'  }}>   
        {/* <Card.Img variant="top" height="240" src={company} /> */}
        <Card.Header><center>Upcoming Event</center></Card.Header>
            <Card.Body>
            <Card.Title><center>Redda</center></Card.Title>
            <Card.Text >
                {props.events.eventName}<br/>
                {props.events.location}<br/>
                {props.events.time}<br/>
                <br/>
            </Card.Text>
            <center><Button variant="dark" href={props.events.link}>Go somewhere</Button></center>
            </Card.Body>
        </Card>     
    </div>
)

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
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
            
    }

    UserList() {
        return this.state.users.map(function(currentEvents, i){
            return <Events events={currentEvents} key={i} />;
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
                    <p>Upcoming events</p>

                    <div>
                    <div>
                        
                    <CardDeck>
                    {this.UserList()}
                        
                        </CardDeck>
                         
                    </div>
            </div>   

                </div>
                
                    
                </div>  
        )
    }
}