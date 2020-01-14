import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import Upper from "../../Components/Upper.component";
export default class ServiceProviderAddDiscountOffers extends Component {
    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div className="right">
                <Upper/>
                    This is Serivce Proivder - Add Discount Offers
                </div>
            </div>   
        )
    }
}