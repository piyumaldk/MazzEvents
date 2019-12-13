import React, { Component } from 'react';
import LeftAdmin from "../../Components/LeftAdmin.component";
import Upper from "../../Components/Upper.component";
export default class AdminStaff extends Component {
    render() {
        return (
            <div>
                <LeftAdmin/>
                <div class="right">
                <Upper/>
                    This is Admin - Staff
                </div> 
            </div>   
        )
    }
}