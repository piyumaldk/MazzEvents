import React, { Component } from 'react';
import LeftAdmin from "../../Components/LeftAdmin.component";

export default class AdminMailbox extends Component {
    render() {
        return (
            <div>
                <LeftAdmin/>
                <div class="right">
                    This is Admin - Mail box
                </div> 
            </div>   
        )
    }
}