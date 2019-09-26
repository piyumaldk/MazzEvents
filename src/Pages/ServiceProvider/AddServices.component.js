import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import {Form, Button, Badge} from 'react-bootstrap';

export default class ServiceProviderAddServices extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div class="right">
                <h3>
    Add Services<Badge variant="secondary"></Badge>
  </h3>

                <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Service Type</Form.Label>
    <Form.Control as="select">
      <option>Decoration</option>
      <option>Catering</option>
      <option>Hotel and venue</option>
      <option>Vehicles</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="formPrice">
    <Form.Label>Price</Form.Label>
    <Form.Control type="price" placeholder="Add a price" />
  </Form.Group>
  <Form.Group controlId="formDescription">
    <Form.Label>Description</Form.Label>
    <Form.Control type="description" placeholder="Tell people what's included" />
  </Form.Group>
  <Form.Group controlId="formDuration">
    <Form.Label>Duration</Form.Label>
    <Form.Control type="duration" placeholder="" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
                </div>
            </div>   
        )
    }
}