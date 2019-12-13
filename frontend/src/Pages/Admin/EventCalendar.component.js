import React, { Component } from 'react';
import LeftAdmin from "../../Components/LeftAdmin.component";
import Upper from "../../Components/Upper.component";
export default class AdminEventCalendar extends Component {
    render() {
        return (
            <div>
                <LeftAdmin/>
                <div class="right">
                <Upper/>
                    This is Admin - Event Calendar
                </div> 
            </div>   
        )
    }
}