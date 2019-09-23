import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";

export default class ServiceProviderViewServices extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div class="right">
                This is Serivce Proivder - View Services
                </div>
            </div>   
        )
    }
}