import React, { Component } from 'react';
import Background from '../images/home.jpg';
export default class Home extends Component {
    render() {
        return (
            <div>
                <img src={ Background } width="100%" height="100%"/>
            </div>
        )
    }
}