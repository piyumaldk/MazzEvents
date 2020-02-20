import React, { Component } from 'react';
import LeftAdmin from "../../Components/LeftAdmin.component";
import Upper from "../../Components/Upper.component";
import Chat from "../../Components/Chat.component";
export default class AdminChat extends Component {
    render() {
        return (
            <div>
                <LeftAdmin/>
                <div className="right">
                <Upper/>
                <Chat/>

                </div>
            </div>   
        )
    }
}