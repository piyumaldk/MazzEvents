import React, { Component } from 'react';
import Upper from "../Components/Upper.component";
import Background from '../Images/home.jpg';

export default class Home extends Component {
    render() {
        return (
            <div className="bg">
                <Upper/>
                <img src={ Background } width="100%" height="100%"/>
            </div>
        )
    }
}