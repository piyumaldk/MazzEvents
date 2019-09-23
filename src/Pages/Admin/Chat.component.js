import React, { Component } from 'react';
import LeftAdmin from "../../Components/LeftAdmin.component";

export default class AdminChat extends Component {
    render() {
        return (
            <div>
                <LeftAdmin/>
                <div class="right">
                    This is Admin - Chat
                </div> 
            </div>   
        )
    }
}