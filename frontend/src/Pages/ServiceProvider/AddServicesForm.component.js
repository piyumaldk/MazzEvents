import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import {Button, Badge, Form, Col, Nav} from 'react-bootstrap';
import Upper from "../../Components/Upper.component";
export default class ServiceProviderAddServicesForm extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div class="right">
                <Upper/>
                <h3>Add Services Form<Badge variant="secondary"></Badge></h3>

                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="Location" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control as="select"  >
                            <option>Photography</option>
                            <option>DJ</option>
                            <option>Music</option>
                            <option>Catering</option>
                            <option>Reception Halls</option>
                            <option>Hotels</option>
                            <option>Fowers</option>
                            <option>Vehicles</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridService">
                        <Form.Label>Service</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        
                    </Form.Row>
                    <Form.Group controlId="formGridDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                    </Form.Group>



                    <Nav>
                    <Nav.Link href="/serviceprovider/addservices"><Button variant="primary">Add</Button></Nav.Link>
                    </Nav>

                </Form>
                
                
                </div>
            </div>   
        )
    }
}