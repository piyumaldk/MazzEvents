import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";
import Upper from "../../Components/Upper.component";
import Chat from "../../Components/Chat.component";

export default class Cchat extends Component {
    render() {
        return (
            <div>
                
                
                <LeftCustomer/>
                <div className="right">
                <Upper/> 
                <Chat/>
               
                
                    
                </div>
            </div>   
        )
    }
}