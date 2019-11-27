import React, { Component } from 'react';
import LeftAdmin from "../../Components/LeftAdmin.component";

export default class AdminCustomer extends Component {
    render() {
        return (
            <div>
                <LeftAdmin/>
                <div class="right">
                    This is Admin - Customers
                </div> 
            </div>   
        )
    }
}