import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import Upper from "../Components/Upper.component";

import {Button, Card, CardDeck} from 'react-bootstrap';
import axios from 'axios';
import catering from '../Images/catering.jpg';

const SignUpCustomer = props => (
    <div>
        
            
        <Card  bg="light" text="black" style={{ width: '18rem'  }}>
            
        <Card.Img variant="top" src={catering} />
        <Card.Header><center>Are you from around {props.signupcustomer.signup_city}?</center></Card.Header>
            <Card.Body>
            <Card.Title><center>{props.signupcustomer.signup_company}</center></Card.Title>
            <Card.Text>
                Owner : {props.signupcustomer.signup_firstName} {props.signupcustomer.signup_lastName}<br/>
                Contact Number : {props.signupcustomer.signup_number}<br/>
                Location : {props.signupcustomer.signup_city}<br/>
                Address : {props.signupcustomer.signup_address2}<br/>
            </Card.Text>
            <center><Button variant="dark">Go somewhere</Button></center>
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
        axios.get('http://localhost:4000/mazzevents/getevent')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    // UserList() {
    //     return this.state.users.map(function(currentSignUpCustomer, i){
    //         if(currentSignUpCustomer.signup_type === "2"){
    //         return <SignUpCustomer signupcustomer={currentSignUpCustomer} key={i} />;
    //         }
    //         return null;
    //     })
    // }

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
                        
                        
                          {/* <div  className="row card_ss">
                          <CardDeck>
                            { this.UserList() } 
                            </CardDeck>
                            </div>    */}
                        
                        
                         
                    </div>
            </div>   

                </div>
                
                    
                </div>  
        )
    }
}