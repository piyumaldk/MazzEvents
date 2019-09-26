import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";

export default class Flowers extends Component {
    render() {
        return (
            <div>
                <LeftCustomer/>
                <div class="right">
                This is LeftCustomer - Flowers
                </div>
            </div>   
        )
    }
}