import React, { Component } from 'react'
import Card from './CardUI';
import LeftCustomer from "../LeftCustomer.component";

import img1 from '../../Images/Customer/new.jpg'

class Cards extends Component {
    render() {
        return (

            <div className="container-fluid d-flex justify-content-center">
                <div className="col-md-2">
                    <LeftCustomer />
                </div>
                <div className="col-md-10">
                    <div className="row card_ss">
                        
                        <div className="col-md-3">
                            <Card imgsrc={img1} title="Sachin" />
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img1} title="Ravindu" />
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img1} title="Himash" />
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img1} title="Himash" />
                        </div>
                    </div>
                    <div className="row card_ss">
                        <div className="col-md-3">
                            <Card imgsrc={img1} title="Sachin" />
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img1} title="Ravindu" />
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img1} title="Himash" />
                        </div>
                        <div className="col-md-3">
                            <Card imgsrc={img1} title="Himash" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;