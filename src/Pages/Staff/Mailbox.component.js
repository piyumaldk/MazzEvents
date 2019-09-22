import React, { Component } from 'react';
import LeftStaff from "../../Components/LeftStaff.component";

export default class StaffMailbox extends Component {
    render() {
        return (
            <div>
                <LeftStaff/>
                <div class="right">
                    This is Staff - Mailbox
                </div>
                
            </div>   
        )
    }
}