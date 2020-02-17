import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import Upper from "../../Components/Upper.component";
import Chat from "../../Components/Chat.component";
export default class ServiceProviderChat extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div className="right">
                <Upper/>
                <Chat/>  
            </div>  
            </div>   
        )
    }
}