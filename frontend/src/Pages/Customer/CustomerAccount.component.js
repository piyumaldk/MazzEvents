import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";
import {Form, Button } from 'react-bootstrap';
import '../../Css/Customer.css'
import img1 from "../../Images/Customer/new.jpg"

export default class CustomerAccount extends Component {   
    render() {
        return (
            <div>
                <LeftCustomer/>
                <div className="container">
                This is LeftCustomer - CustomerAccount
                <div className="overflow">
                <img alt="" src={img1} className="card-img-top" />
                </div>
                <div id="signup">
                    <div className="col-md-5 col-md-offset-5">
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="name" placeholder="firstName" />
                            </Form.Group>

                            <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="name" placeholder="LastName" />
                            </Form.Group>

                            {/* <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Are you a Free User or a Service Provider?</Form.Label>
                                <select name="cars" type="name" value={this.state.signup_option} onChange={this.onChangeSignupOption}>
                                    <option value="0">Free User</option>
                                    <option value="1">Service Provider</option>
                                </select>
                            </Form.Group> */}

                            {/* <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={this.state.signup_password} onChange={this.onChangeSignupPassword}/>
                            </Form.Group>
                        
                            <Form.Group controlId="aPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={this.state.signup_aPassword} onChange={this.onChangeSignupAPassword}/>
                            </Form.Group> */}

                            <Form.Group controlId="Email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group controlId="Number">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="number" placeholder="Number"/>
                            </Form.Group>

                            <Form.Group controlId="Location">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="name" placeholder="Location" />
                            </Form.Group>
                            <div className="btn">
                            <Button variant="primary" type="submit" value="Create Signup" >
                                Update
                            </Button>
                            </div >
                            <div className="btn">
                            <Button variant="primary" type="submit" value="Create Signup" >
                                Delete
                            </Button>
                            </div>
                        </Form>
                    </div>
                </div>
                    
                </div>
            </div>   
        )
    }
}