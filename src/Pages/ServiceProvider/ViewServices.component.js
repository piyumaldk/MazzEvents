import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import {Badge, Table} from 'react-bootstrap';

export default class ServiceProviderViewServices extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div class="right">
                <h3>
    Services<Badge variant="secondary"></Badge>
  </h3>
  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Service Type</th>
      <th>Service Provider</th>
      <th>prices</th>
      <th>Ratings</th>
      <th>Address</th>
      <th>Email Address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Decorations</td>
      <td>Mark</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Catering</td>
      <td>Jacob</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</Table>
                </div>
            </div>   
        )
    }
}