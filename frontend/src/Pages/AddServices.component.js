import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import {Button, Badge, Table, Nav} from 'react-bootstrap';

export default class ServiceProviderAddServices extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div class="right">
                <h3>Add Services<Badge variant="secondary"></Badge></h3>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Service No</th>
                      <th>Location</th>
                      <th>Category</th>
                      <th>Service</th>
                      <th>Price</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Colombo</td>
                      <td>Photography</td>
                      <td>basic package</td>
                      <td>20000</td>
                      <td>..........</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Colombo</td>
                      <td>Photography</td>
                      <td>standard </td>
                      <td>50000</td>
                      <td>..........</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Colombo</td>
                      <td>Photography</td>
                      <td>premium</td>
                      <td>70000</td>
                      <td>..........</td>
                    </tr>
                  </tbody>
                </Table>
                
                
                <Nav>
                    <Nav.Link href="/serviceprovider/addservicesForm"><Button variant="primary">Add service</Button></Nav.Link>
                </Nav>
                </div>
            </div>   
        )
    }
}