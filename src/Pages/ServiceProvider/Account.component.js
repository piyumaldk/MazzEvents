import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";

export default class ServiceProviderAccount extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                This is Serivce Proivder - Account
            </div>   
        )
    }
}