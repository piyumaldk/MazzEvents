import React, { Component } from 'react';
import Upper from "../Components/Upper.component";
import {Form, Button, Col} from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

export default class SignUp extends Component {

    constructor(props){
        super(props);

        this.onChangeSignupFirstName = this.onChangeSignupFirstName.bind(this);
        this.onChangeSignupLastName = this.onChangeSignupLastName.bind(this);
        this.onChangeSignupOption = this.onChangeSignupOption.bind(this);
        this.onChangeSignupEmail = this.onChangeSignupEmail.bind(this);
        this.onChangeSignupPassword = this.onChangeSignupPassword.bind(this);
        this.onChangeSignupAPassword = this.onChangeSignupAPassword.bind(this);
        this.onChangeSignupNumber = this.onChangeSignupNumber.bind(this);
        this.onChangeSignupLocation = this.onChangeSignupLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            signup_firstName: '',
            signup_lastName: '',
            signup_option: '',
            signup_email: '',
            signup_password: '',
            signup_aPassword: '',
            signup_number: '',
            signup_location: '',
            signup_completed: false
        }
    }

    onChangeSignupFirstName(e){
        this.setState({
            signup_firstName: e.target.value
        });
    }
    onChangeSignupLastName(e){
        this.setState({
            signup_lastName: e.target.value
        });
    }
    onChangeSignupOption(e){
        this.setState({
            signup_option: e.target.value
        });
    }
    onChangeSignupEmail(e){
        this.setState({
            signup_email: e.target.value
        });
    }
    onChangeSignupPassword(e){
        this.setState({
            signup_password: e.target.value
        });
    }
    onChangeSignupAPassword(e){
        this.setState({
            signup_aPassword: e.target.value
        });
    }
    onChangeSignupNumber(e){
        this.setState({
            signup_number: e.target.value
        });
    }
    onChangeSignupLocation(e){
        this.setState({
            signup_location: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        {/*on Submit logic here*/}
        console.log(`Form submitted:`);
        console.log(`signup First Name: ${this.state.signup_firstName}`);
        console.log(`signup last Name: ${this.state.signup_lastName}`);
        console.log(`signup option: ${this.state.signup_option}`);
        console.log(`signup Email: ${this.state.signup_email}`);
        console.log(`signup Password: ${this.state.signup_password}`);
        console.log(`signup Password Agian: ${this.state.signup_aPassword}`);
        console.log(`signup Number: ${this.state.signup_number}`);
        console.log(`signup Location: ${this.state.signup_location}`);
        console.log(`signup Completed: ${this.state.signup_completed}`);

        const newSignUp = {
            signup_firstName: this.state.signup_firstName, 
            signup_lastName: this.state.signup_lastName,
            signup_option: this.state.signup_option,
            signup_email: this.state.signup_email,
            signup_password: this.state.signup_password,
            signup_aPassword: this.state.signup_aPassword,
            signup_number: this.state.signup_number,
            signup_location: this.state.signup_location,
            signup_completed: this.state.signup_completed
        }

        if(this.state.signup_option=="1"){
            axios.post('http://localhost:4000/mazzevents/addserviceprovider', newSignUp)
                .then(res => console.log(res.data));
        }
        else{
            axios.post('http://localhost:4000/mazzevents/addcustomer', newSignUp)
                .then(res => console.log(res.data));
        }

        // axios.post('http://localhost:4001/mazzevent/customers', newSignUp)
        //         .then(res => console.log(res.data));
        
        this.setState({
            signup_firstName: '',
            signup_lastName: '',
            singup_option: '',
            signup_email: '',
            signup_password: '',
            signup_aPassword: '',
            signup_number: '',
            signup_location: '',
            signup_completed: false
        })
    }
    
    render() {
        return (
            <div>
                <Upper/>
                <div id="signup">
                    <div class="col-md-5 col-md-offset-5">
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="name" placeholder="firstName" value={this.state.signup_firstName} onChange={this.onChangeSignupFirstName}/>
                            </Form.Group>

                            <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="name" placeholder="LastName" value={this.state.signup_lastName} onChange={this.onChangeSignupLastName}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Are you a Free User or a Service Provider?</Form.Label>
                                <select name="cars" type="name" value={this.state.signup_option} onChange={this.onChangeSignupOption}>
                                    <option value="0">Free User</option>
                                    <option value="1">Service Provider</option>
                                </select>
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={this.state.signup_password} onChange={this.onChangeSignupPassword}/>
                            </Form.Group>
                        
                            <Form.Group controlId="aPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={this.state.signup_aPassword} onChange={this.onChangeSignupAPassword}/>
                            </Form.Group>

                            <Form.Group controlId="Email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Email" value={this.state.signup_email} onChange={this.onChangeSignupEmail}/>
                            </Form.Group>

                            <Form.Group controlId="Number">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="number" placeholder="Number" value={this.state.signup_number} onChange={this.onChangeSignupNumber}/>
                            </Form.Group>

                            <Form.Group controlId="Location">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="name" placeholder="Location" value={this.state.signup_location} onChange={this.onChangeSignupLocation}/>
                            </Form.Group>

                            <Button variant="primary" type="submit" value="Create Signup" >
                                Sign Up
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}