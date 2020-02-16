import React, { Component } from 'react';
import LeftAdmin from "../../Components/LeftAdmin.component";
import {Table, Nav, Form, Button } from 'react-bootstrap';
import Upper from "../../Components/Upper.component";
import Chat from "../../Components/Chat.component";
export default class AdminChat extends Component {
    render() {
        return (
            <div>
                <LeftAdmin/>
                <div className="chatright">
                <Upper/>
                <Chat/>

                </div>
            </div>   
        )
    }
}