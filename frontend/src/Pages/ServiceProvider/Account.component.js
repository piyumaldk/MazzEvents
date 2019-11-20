import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import {Table} from 'react-bootstrap';
import {Button, Card, Form, Col} from 'react-bootstrap';
import Piyumal from '../../Images/piyumal.jpeg';

export default class ServiceProviderAccount extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div class="accountright">
                  <h4>Service Provider Account</h4>
                <div class="account">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Piyumal} />
                    <Card.Body>
                      <Card.Title><center>Piyumal Kularathne</center></Card.Title>
                      <Card.Text>
                        I'm doing a catering servise in giriulla area.<br/>
                        <a href>Piyumaldk95@gmail.com</a><br/>
                        +94771234567<br/>
                      </Card.Text>
                      
                    </Card.Body>
                  </Card>
                  </div>
                
               
                  <Form>
                  <Form.Row>
                      <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="first name" placeholder="Enter first name" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="last name" placeholder="last name" />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="ContactNumber">
                      <Form.Label>Contact Number</Form.Label>
                      <Form.Control placeholder="contact number" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Address</Form.Label>
                      <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                      <Form.Label>Address 2</Form.Label>
                      <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select">
                          <option>Choose...</option>
                          <option>...</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Update
                    </Button>
                  </Form>
                  
                </div>
            </div>   
        )
    }
}