import React, { Component } from 'react';
import Upper from "../Components/Upper.component";
import '../Css/Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Upper/>   
                <p>Welcome to Home</p>
            </div> 
        )
    }
}