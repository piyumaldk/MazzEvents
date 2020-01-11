
// import React, { Component } from 'react';
// import LeftCustomer from "../../Components/LeftCustomer.component";
// import Card from '../../Components/Cads/CardUI';
// import axios from 'axios';

// import img1 from '../../Images/Customer/dj.jpg';

// const Flor = props => (
//     props.flor.signup_firstName

// )

// export default class Dj extends Component {

//     constructor(props){
//         super(props);
//         this.state = {customers:[]};
//     }

//     componentDidMount(){
//         axios.get('http://localhost:4000/mazzevent/')
//         .then(response => {
//             this.setState({customers:response.data});
//         })
//         .catch(function(error){
//             console.log(error);
//         })
//     }

//     flower(){
//         return this.state.customers.map(function(currentflwr, i){
//             return < Flor flor={currentflwr} key={i}/> 
//         });
//     }


//     render() {
//         return (
//             <div className="container-fluid d-flex justify-content-center">
//                 <div className="col-md-2">
//                     <LeftCustomer />
//                 </div>
//                 <div className="col-md-10">
//                     <div className="row card_ss">
                        
//                         <div className="col-md-3">
//                             <Card imgsrc={img1} title={this.flower()} />
//                         </div>
//                         <div className="col-md-3">
//                             <Card imgsrc={img1} title="Ravindu" />
//                         </div>
//                         <div className="col-md-3">
//                             <Card imgsrc={img1} title="Himash" />
//                         </div>
//                         <div className="col-md-3">
//                             <Card imgsrc={img1} title="Himash" />
//                         </div>
//                     </div>
//                     <div className="row card_ss">
//                         <div className="col-md-3">
//                             <Card imgsrc={img1} title="Sachin" />
//                         </div>
//                         <div className="col-md-3">
//                             <Card imgsrc={img1} title="Ravindu" />
//                         </div>
//                         <div className="col-md-3">
//                             <Card imgsrc={img1} title="Himash" />
//                         </div>
//                         <div className="col-md-3">
//                             <Card imgsrc={img1} title="Himash" />
//                         </div>
//                     </div>
//                 </div>
//             </div>   
//         )
//     }
// }

import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";

import {Button,Card, CardDeck} from 'react-bootstrap';
import '../../App.css';
import axios from 'axios';
import Upper from "../../Components/Upper.component";
//import SignUpCatering from '../../Components/Auth/RegisterCateringModal';
// import catering from '../../Images/catering.jpg';
import img1 from '../../Images/Customer/dj.jpg';
//const type = props =>props.signupcustomer.signup_type;

const SignUpCustomer = props => (
    <div>
        
            
        <Card  bg="light" text="black" style={{ width: '18rem'  }}>
            
        <Card.Img variant="top" src={img1} />
        <Card.Header><center>Are you from around {props.signupcustomer.signup_city}?</center></Card.Header>
            <Card.Body>
            <Card.Title><center>{props.signupcustomer.signup_company}</center></Card.Title>
            <Card.Text>
                Owner : {props.signupcustomer.signup_firstName} {props.signupcustomer.signup_lastName}<br/>
                Contact Number : {props.signupcustomer.signup_number}<br/>
                Location : {props.signupcustomer.signup_city}<br/>
                Address : {props.signupcustomer.signup_address2}<br/>
            </Card.Text>
            <center><Button variant="dark">Go somewhere</Button></center>
            </Card.Body>
        </Card>  
        
         
    </div>
)

export default class Dj extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/mazzevents/')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    UserList() {
        return this.state.users.map(function(currentSignUpCustomer, i){
            if(currentSignUpCustomer.signup_type === "2" && currentSignUpCustomer.signup_category === "Dj"){
            return <SignUpCustomer signupcustomer={currentSignUpCustomer} key={i} />;
            }

            return null;
        })
    }

    render() {

        
        return (
            <div>
                <LeftCustomer/>
                <div className="right">
                    <Upper/>
                    <div>
                        
                        
                          <div  className="row card_ss">
                          <CardDeck>
                            { this.UserList() } 
                            </CardDeck>
                            </div>   
                        
                        
                         
                    </div>
                </div>
            </div>   
        )
    }
}