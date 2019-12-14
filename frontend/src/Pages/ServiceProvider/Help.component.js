import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import Upper from "../../Components/Upper.component";
export default class ServiceProviderHelp extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div class="right">
                <Upper/>
                This is Serivce Proivder - Help
                </div>
            </div>   
        )
    }
}