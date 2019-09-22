import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";

export default class ServiceProviderMailBox extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                This is Serivce Proivder - Mail Box
            </div>   
        )
    }
}