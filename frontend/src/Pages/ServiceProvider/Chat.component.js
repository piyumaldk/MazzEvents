import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import {Table, Nav, Form, Button } from 'react-bootstrap';
import Upper from "../../Components/Upper.component";
import Chat from "../../Components/Chat.component";
export default class ServiceProviderChat extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div className="chatright">
                <Upper/>
                <Chat/>  

                </div>
                
            </div>   
        )
    }
}