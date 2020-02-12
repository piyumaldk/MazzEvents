import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import Upper from "../../Components/Upper.component";
export default class ServiceProviderEventCalendar extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div className="right">
                <Upper/>
                
                </div>
            </div>   
        )
    }
}