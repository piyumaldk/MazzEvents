import React, { Component } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

export default class Upper extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                <a className="navbar-brand">
                    <img src={Logo} width="30" height="30"/>
                </a>
                <Navbar.Brand href="/">MazzEvents</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Log in</Nav.Link>
                        <Nav.Link href="/aboutus">About us</Nav.Link>       
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search Events</Button>
                    </Form>
                </Navbar>
            </div>
        )
    }
}