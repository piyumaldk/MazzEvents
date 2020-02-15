import React, { Component } from 'react';
import LeftAdmin from "../../Components/LeftAdmin.component";
import Upper from "../../Components/Upper.component";
export default class AdminSendNotification extends Component {
    render() {
        return (
            <div>
                <LeftAdmin/>
                <div className="right">
                <Upper/>
                    This is Admin - SendNotification
                </div> 
            </div>   
        )
    }
}