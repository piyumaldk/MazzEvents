import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";
import Card from '../../Components/Cads/CardUI';
import { Link } from 'react-router-dom';
import axios from 'axios';

import img1 from '../../Images/Customer/new.jpg';

// const Flor = props => {
//     const {rows} = props.flor.signup_firstName
//     // <p>{props.flor.signup_firstName}</p>
// }

export default class Flowers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: []
        };

    }

    componentDidMount() {
        axios.get('http://localhost:4000/mazzevent/')
            .then(response => {
                // let tmpArray = []
                const mydata = response.data
                this.setState({ customers: mydata });
                // console.log(response.data);

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // flower(){
    //     return this.state.customers.map(function(currentflwr, i){
    //         return < Flor flor={currentflwr} key={i}/> 
    //     });
    // }


    render() {
        console.log(this.state.customers);
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="col-md-3">
                    <LeftCustomer />
                </div>
                <div className="col-md-9">
                    <div className="row card_ss">
                  
                        {Object.keys(this.state.customers).map((key) => (
                            <Card imgsrc={img1} title={this.state.customers[key].signup_firstName} />
                        ))}
                       
                    </div>
                </div>
            </div>
        )
    }
}

//meke css tika hdaganna 
