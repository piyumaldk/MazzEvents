import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";
import Upper from "../../Components/Upper.component"

export default class CeventsCalender extends Component {
    render() {
        return (
            <div>
                <LeftCustomer/>
                <div className="right">
                <Upper/>
                This is LeftCustomer - Events Calender
                    
                </div>
            </div>   
        )
    }
}