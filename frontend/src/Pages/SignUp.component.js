import React, { Component } from 'react';
import Upper from "../Components/Upper.component";
import {Form, Button, Col} from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

//validating empty fields for client
// function validate1(signup_email, signup_number) {
//     return {
//         signup_email: signup_email.length === 0,
//         signup_number: signup_number.length === 0,
//         // NIC: NIC.length === 0
//     };
// }

//email syntax
function validateEmail(email) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
}

//validate tel
function validateTel(tel) {
     const reg = /^(0)(7)([0-9]{8})$/;
    //const reg = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/;
    return reg.test(tel);
}


//validate password (minimum 6 characters, atleast one caps and one simple letter, one special character and one number)
function validatePassword(password) {
    const regpw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regpw.test(password);
}

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
        //email syntax validation
        if(!validateEmail(this.state.signup_email)){
            alert("Enter valid email address");
        }
        //Tele syntax validation
        else if(!validateTel(this.state.signup_number)){
            alert("Enter valid telephone number");
        }
        //Password syntax validation
        else if(!validatePassword(this.state.signup_password)){
            alert("Enter valid Password");
        }
        else{
            const headers = {
                'Content-Type':'application/json'
            }

            if(this.state.signup_option==="1"){
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