import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import {Table} from 'react-bootstrap';
import {Button, ButtonGroup} from 'react-bootstrap';

export default class ServiceProviderAccount extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div class="right">Service Provider Account

                <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Service Type</th>
      <th>Address</th>
      <th>Email Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</Table>
 <ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Edit Account</Button>
  <Button variant="secondary">Delete Account</Button>
  <Button variant="secondary">Edit Service</Button>
  <Button variant="secondary">Delete Service</Button>
</ButtonGroup>
            </div>
                
            </div>   
        )
    }
}