import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";

import {Form, Button,Card} from 'react-bootstrap';
import '../../App.css';
import axios from 'axios';

import {Alert} from 'reactstrap';
import Upper from "../../Components/Upper.component";
import { Link } from 'react-router-dom';
import SignUpCatering from '../../Components/Auth/RegisterCateringModal';

const type = props =>props.signupcustomer.signup_type;

const SignUpCustomer = props => (
    <div>
        
            <td>
        <Card style={{ width: '18rem' }}>
            
        <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>{props.signupcustomer.signup_company}</Card.Title>
            <Card.Text>
                Owner : {props.signupcustomer.signup_firstName} {props.signupcustomer.signup_lastName}<br/>
                Contact Number : {props.signupcustomer.signup_number}<br/>
                Location : {props.signupcustomer.signup_city}<br/>
                Address : {props.signupcustomer.signup_address2}<br/>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>  
        </td>
         
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
            if(currentSignUpCustomer.signup_type == "2" && currentSignUpCustomer.signup_category == "Catering"){
            return <SignUpCustomer signupcustomer={currentSignUpCustomer} key={i} />;
            }
        })
    }

    render() {

        
        return (
            <div>
                <LeftCustomer/>
                <div class="right">
                    <Upper/>
                    <div>
                        
                        
                          <div  className="row card_ss">
                            { this.UserList() } 
                            </div>   
                        
                        
                         
                    </div>
                </div>
            </div>   
        )
    }
}