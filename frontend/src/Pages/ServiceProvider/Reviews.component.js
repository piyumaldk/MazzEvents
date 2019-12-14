import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import Upper from "../../Components/Upper.component";
export default class ServiceProviderReviews extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div class="right">
                <Upper/>
                This is Serivce Proivder - Reviews
                </div>
            </div>   
        )
    }
}