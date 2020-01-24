// import React, { Component } from 'react';
// import LeftCustomer from "../../Components/LeftCustomer.component";

// export default class Music extends Component {
//     render() {
//         return (
//             <div>
//                 <LeftCustomer/>
//                 <div class="right">
//                 This is LeftCustomer - Music
                    
//                 </div>
//             </div>   
//         )
//     }
// }


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
import {Button, Card, CardDeck, FormControl, Container} from 'react-bootstrap';
import { Form, FormGroup,  Input, Col} from 'reactstrap';
import '../../App.css';
import axios from 'axios';
import Upper from "../../Components/Upper.component";

const SignUpCustomer = props => (
    <div>   
        <Card  bg="light" text="black" style={{ width: '20rem'  }}>   
        <Card.Img variant="top" height="240" src={props.signupcustomer.businessImg} />
        <Card.Header><center>Are you from around {props.signupcustomer.signup_city}?</center></Card.Header>
            <Card.Body>
            <Card.Title><center>{props.signupcustomer.signup_company}</center></Card.Title>
            <Card.Text >
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

export default class Music extends Component {

    state = {
        location: ''
      };

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

    onChange = e => {
        this.setState({ location: e.target.value.toLowerCase()});
        
    };
   
    UserList () {
        const local = this.state.location;
        if(local ==null || local==""){
            return this.state.users.map(function(currentSignUpCustomer, i){
                if(currentSignUpCustomer.signup_type === "2" && currentSignUpCustomer.signup_category === "Music"){
                return <SignUpCustomer signupcustomer={currentSignUpCustomer} key={i} />;
                }
                return null;
            })
        }
        else{
            return this.state.users.map(function(currentSignUpCustomer, i){
                if(currentSignUpCustomer.signup_type === "2" && currentSignUpCustomer.signup_category === "Music" && currentSignUpCustomer.signup_city.toLowerCase() === local ){
                return <SignUpCustomer signupcustomer={currentSignUpCustomer} key={i} />;
                }
                return null;
            })
        }
    }

    render() {
        return (
            <div>
                <LeftCustomer/>
                <div className="right">
                    <Upper/>
                    <div>
                        <Form>
                            <FormGroup>
                                <Input type="location" name="location" id="location" placeholder="Search Location / City here" onChange={this.onChange}/>
                            </FormGroup>
                        </Form>
                        
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
