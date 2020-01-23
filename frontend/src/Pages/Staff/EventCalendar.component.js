import React, { Component } from 'react';
import LeftStaff from "../../Components/LeftStaff.component";

export default class StaffEventCalendar extends Component {
    render() {
        return (
            <div>
                <LeftStaff/>
                <div className="right">
                    This is Staff - Event Calendar
                </div>
                
            </div>   
        )
    }
}