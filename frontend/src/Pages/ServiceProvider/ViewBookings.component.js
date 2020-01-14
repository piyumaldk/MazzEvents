import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import {Table} from 'react-bootstrap';
import Upper from "../../Components/Upper.component";
export default class ServiceProviderViewBookings extends Component {
    render() {
        return (
          <div>
            <LeftSeriveProvider/>
              <div className="right">
              <Upper/>
                <h1>Vehicle Bookings</h1>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Vehicle Type</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Piyumal</td>
                      <td>Audi</td>
                      <td>05.05.2019</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Mithila</td>
                      <td>BMW</td>
                      <td>06.06.2019</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Bhagya</td>
                      <td>Audi</td>
                      <td>07.07.2019</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Nipuni</td>
                      <td>BMW</td>
                      <td>08.08.2019</td>
                    </tr>
                  </tbody>
                </Table>    
            </div>   
          </div>
        )
    }
  }