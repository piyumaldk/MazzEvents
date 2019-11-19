import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";
import Card from '../../Components/Cads/CardUI';
import axios from 'axios';

import img1 from '../../Images/Customer/hotel.jpg';

const Flor = props => (
    props.flor.signup_firstName

)

export default class Hotels extends Component {

    constructor(props){
        super(props);
        this.state = {customers:[]};
    }

    componentDidMount(){
        axios.get('http://localhost:4000/mazzevent/')
        .then(response => {
            this.setState({customers:response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }

    flower(){
        return this.state.customers.map(function(currentflwr, i){
            return < Flor flor={currentflwr} key={i}/> 
        });
    }


    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="col-md-2">
                    <LeftCustomer />
                </div>
                <div className="col-md-10">
                    <div className="row card_ss">
                        
                        <div className="col-md-3">
                            <Card imgsrc={img1} title={this.flower()} />
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
        )
    }
}