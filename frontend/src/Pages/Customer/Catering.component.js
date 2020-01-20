import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";
import {Button,Card, CardDeck} from 'react-bootstrap';
import '../../App.css';
import axios from 'axios';
import Upper from "../../Components/Upper.component";
import catering from '../../Images/catering.jpg';

const SignUpCustomer = props => (
    <div>
        
            
        <Card  bg="light" text="black" style={{ width: '18rem'  }}>
            
        <Card.Img variant="top" src={props.signupcustomer.businessImg} />
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

export default class Catering extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/mazzevents/')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
        
    }

    UserList() {
        return this.state.users.map(function(currentSignUpCustomer, i){
            if(currentSignUpCustomer.signup_type === "2" && currentSignUpCustomer.signup_category === "Catering"){
            return <SignUpCustomer signupcustomer={currentSignUpCustomer} key={i} />;
            }
            return null;
        })
    }

    render() {

        
        return (
            <div>
                <LeftCustomer/>
                <div className="right">
                    <Upper/>
                    <div>
                        
                        
                          <div  className="row card_ss">
                          <CardDeck>
                            { this.UserList() } 
                            </CardDeck>
                            </div>   
                        
                        
                         
                    </div>
                </div>
            </div>   
        )
    }
}