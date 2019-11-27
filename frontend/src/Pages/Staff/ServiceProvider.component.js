import React, { Component } from 'react';
import LeftStaff from "../../Components/LeftStaff.component";

export default class StaffServiceProvider extends Component {
    render() {
        return (
            <div>
                <LeftStaff/>
                <div class="right">
                    This is Staff - Service Provider
                </div>
                
            </div>   
        )
    }
}