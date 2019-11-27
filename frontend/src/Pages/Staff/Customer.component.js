import React, { Component } from 'react';
import LeftStaff from "../../Components/LeftStaff.component";

export default class StaffCustomer extends Component {
    render() {
        return (
            <div>
                <LeftStaff/>
                <div class="right">
                    This is Staff - Customer
                </div>
                
            </div>   
        )
    }
}