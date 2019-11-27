import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";

export default class Music extends Component {
    render() {
        return (
            <div>
                <LeftCustomer/>
                <div class="right">
                This is LeftCustomer - Music
                    
                </div>
            </div>   
        )
    }
}