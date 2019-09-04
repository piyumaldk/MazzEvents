import React, { Component } from 'react';
import Upper from "../Components/Upper.component";
import { Nav, Form, Button} from 'react-bootstrap';

export default class LogIn extends Component {
    render() {
        return (
            <div>
                <Upper/>
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
                    <Nav>
                    <Nav.Link href="/signup">Create one here!</Nav.Link>
                    </Nav>
                </Form>
            </div>   
            
        )
    }
}