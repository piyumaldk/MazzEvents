import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";
import RightCusSaved from "../../Components/RightCusSaved.component"
import Card from '../../Components/Cads/CardUI';
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
            customers: [],
            selected: []
        };


    }



    componentDidMount() {
        axios.get('http://localhost:4001/mazzevent/')
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

    selectFlower(title) {

        // console.log(title)

        const flowers = this.state.selected.concat([title])
        this.setState({
            selected: flowers
        })
    }

    myClick() {
        const selectedArray = JSON.stringify(this.state.selected)
        console.log(selectedArray)
        let json = JSON.stringify(selectedArray);
        const url = 'http://localhost:4001/mazzevent/add';

        axios.post(url, json)
            .then(res => console.log(res.data));
    }





    render() {
        console.log(this.state.customers);
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="col-md-3">
                    <LeftCustomer />
                </div>
                <div className="col-md-7">
                    <div className="row card_ss">

                        {Object.keys(this.state.customers).map((key) => (
                            <Card imgsrc={img1} title={this.state.customers[key].signup_firstName}
                                selectFlower={this.selectFlower.bind(this)} />
                        ))}
                    </div>
                </div>
                <div className="col-md-2">
                    <RightCusSaved selectedFlowers={this.state.selected}

                    />
                </div>
                <div>
                    <button onClick={() => this.myClick()}>
                        Save Array
                    </button>
                </div>
            </div>
        )
    }
}

//meke css tika hdanna 
