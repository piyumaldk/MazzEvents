import React, { Component } from 'react';
import Upper from "../Components/Upper.component";
import {Form, Button} from 'react-bootstrap';
import '../App.css';
export default class SignUp extends Component {
    render() {
        return (
            <div>
                <Upper/>
                <div id="login">
                    <div class="col-md-5 col-md-offset-5">
                <Form>
                    <Form.Group controlId="signFirstUpName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="name" placeholder="First Name"/>
                    </Form.Group>

                    <Form.Group controlId="signLastUpName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="name" placeholder="Last Name"/>
                    </Form.Group>

                    <Form.Group controlId="signUpPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="loginChecbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
                </div>
                </div>
            </div>
        )
    }
}