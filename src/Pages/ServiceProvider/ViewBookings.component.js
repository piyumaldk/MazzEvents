import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";

export default class ServiceProviderViewBookings extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div class="right">
                This is Serivce Proivder -View Bookings
                </div>
            </div>   
        )
    }
}