import React, { Component } from 'react';
import LeftStaff from "../../Components/LeftStaff.component";

export default class StaffCharts extends Component {
    render() {
        return (
            <div>
                <LeftStaff/>
                <div className="right">
                    This is Staff - Charts
                </div>
                
            </div>   
        )
    }
}