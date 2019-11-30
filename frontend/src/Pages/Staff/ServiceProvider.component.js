import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import '../../App.css';
import axios from 'axios';
import LeftStaff from "../../Components/LeftStaff.component";
import {Alert} from 'reactstrap';

export default class StaffServiceProvider extends Component {

    
    constructor(props){
        super(props);

        this.onChangeSignupFirstName = this.onChangeSignupFirstName.bind(this);
        this.onChangeSignupLastName = this.onChangeSignupLastName.bind(this);
        this.onChangeSignupEmail = this.onChangeSignupEmail.bind(this);
        this.onChangeSignupPassword = this.onChangeSignupPassword.bind(this);
        this.onChangeSignupAPassword = this.onChangeSignupAPassword.bind(this);
        this.onChangeSignupNumber = this.onChangeSignupNumber.bind(this);
        this.onChangeSignupLocation = this.onChangeSignupLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            signup_firstName: '',
            signup_lastName: '',
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
        console.log(`Form submitted:`);
        console.log(`signup First Name: ${this.state.signup_firstName}`);
        console.log(`signup last Name: ${this.state.signup_lastName}`);
        console.log(`signup Email: ${this.state.signup_email}`);
        console.log(`signup Password: ${this.state.signup_password}`);
        console.log(`signup Password Agian: ${this.state.signup_aPassword}`);
        console.log(`signup Number: ${this.state.signup_number}`);
        console.log(`signup Location: ${this.state.signup_location}`);
        console.log(`signup Completed: ${this.state.signup_completed}`);

        const newSignUp = {
            signup_firstName: this.state.signup_firstName, 
            signup_lastName: this.state.signup_lastName,
            signup_email: this.state.signup_email,
            signup_password: this.state.signup_password,
            signup_aPassword: this.state.signup_aPassword,
            signup_number: this.state.signup_number,
            signup_location: this.state.signup_location,
            signup_completed: this.state.signup_completed,
            msg: this.props.msg
        }

        axios.post('http://localhost:4000/mazzevents/addserviceprovider', newSignUp)
            .then(res => console.log(res.data));
        
        this.setState({
            signup_firstName: '',
            signup_lastName: '',
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
                <LeftStaff/>
                <div id="signup" class="right">
                    <center>
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

                            { this.state.msg ? (<Alert color="danger">{ this.state.msg }</Alert>) : null }

                            <Button variant="primary" type="submit" value="Create Signup" >
                                Add Service Provider
                            </Button>
                        </Form>
                        
                    </div>
                    </center>
                </div>
            </div>
        )
    }
}

