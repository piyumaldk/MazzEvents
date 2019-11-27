import React, { Component } from 'react';
import LeftAdmin from "../../Components/LeftAdmin.component";

export default class AdminEventCalendar extends Component {
    render() {
        return (
            <div>
                <LeftAdmin/>
                <div class="right">
                    This is Admin - Event Calendar
                </div> 
            </div>   
        )
    }
}