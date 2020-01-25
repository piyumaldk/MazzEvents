import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";
import Upper from "../../Components/Upper.component";

export default class Cchat extends Component {
    render() {
        return (
            <div>
                
                
                <LeftCustomer/>
                <div className="right">
                <Upper/> 
               
                This is LeftCustomer - Chat
                    
                </div>
            </div>   
        )
    }
}