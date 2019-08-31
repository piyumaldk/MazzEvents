import React, { Component } from 'react';
import { Nav, Form, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SignUp from "./SignUp.component";

export default class LogIn extends Component {
    render() {
        return (
            <router>
                <Form>
                    <Form.Group controlId="loginEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Email"/>
                    </Form.Group>

                    <Form.Group controlId="loginPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="loginChecbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Log in
                    </Button>
                    <p>Don't have an account?</p>
                    <Nav className="mr-auto">
                        <Nav.Link href="/signup">Create one here!</Nav.Link>
                    </Nav>
                </Form>
                <Route path="/signup" component={SignUp} />
            </router>
        )
    }
}