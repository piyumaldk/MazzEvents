import React, { Component } from 'react';
import LeftStaff from "../../Components/LeftStaff.component";

export default class StaffAccount extends Component {
    render() {
        return (
            <div>
                <LeftStaff/>
                <div class="right">
                    This is Staff - Account
                </div>
                
            </div>   
        )
    }
}