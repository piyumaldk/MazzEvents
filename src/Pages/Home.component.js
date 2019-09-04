import React, { Component } from 'react';
import Upper from "../Components/Upper.component";
import Background from '../Images/home.jpg';
import classes from '../App.css';

export default class Home extends Component {
    render() {
        return (
            <div class="container-fluid">
            <div class="bg">
                <Upper/>
                
            </div>
            </div>
        )
    }
}