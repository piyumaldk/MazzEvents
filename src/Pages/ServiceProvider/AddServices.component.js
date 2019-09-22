import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";

export default class ServiceProviderAddServices extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div class="right">
                This is Serivce Provider - Add Services 
                </div>
            </div>   
        )
    }
}