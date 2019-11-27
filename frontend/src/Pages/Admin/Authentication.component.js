import React, { Component } from 'react';
import LeftAdmin from "../../Components/LeftAdmin.component";

export default class AdminAuthentication extends Component {
    render() {
        return (
            <div>
                <LeftAdmin/>
                <div class="right">
                    This is Admin - Authentication
                </div> 
            </div>   
        )
    }
}