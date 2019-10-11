import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";

export default class CustomerDash extends Component {
    render() {
        return (
            <div>
                <LeftCustomer/>
                This is Customer - Dash
            </div>   
        )
    }
}