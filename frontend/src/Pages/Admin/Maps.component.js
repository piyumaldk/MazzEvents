import React, { Component } from 'react';
import LeftAdmin from "../../Components/LeftAdmin.component";
import Upper from "../../Components/Upper.component";
export default class AdminMaps extends Component {
    render() {
        return (
            <div>
                <LeftAdmin/>
                <div className="right">
                <Upper/>
                    This is Admin - Maps
                </div> 
            </div>   
        )
    }
}