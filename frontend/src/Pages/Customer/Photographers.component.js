import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";
import {Button, Card, CardDeck} from 'react-bootstrap';
import { Form, FormGroup, Input} from 'reactstrap';
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

export default class Photgraphers extends Component {

    state = {
        location: ''
      };

    constructor(props) {
        super(props);
        this.state = {users: []};
        //this.onChangeLocation = this.onChangeLocation.bind(this);

        // this.state = {location: ''}
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
        this.setState({ location: e.target.value});
        
    };
   
    

    UserList (state) {
        const local = this.state.location;
        //local = local.toUpperCase();

        console.log(local);
            return this.state.users.map(function(currentSignUpCustomer, i){
                if(currentSignUpCustomer.signup_type === "2" && currentSignUpCustomer.signup_category === "Photographer" && currentSignUpCustomer.signup_city === local ){
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
                       redda =  {this.state.location}
                        <Form>
                            <FormGroup>
                                <Input type="location" name="location" id="location" placeholder="Location" onChange={this.onChange}/>
                            </FormGroup>
                            <Button>Serach Location</Button>
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
// import React, { Component } from 'react';
// import LeftCustomer from "../../Components/LeftCustomer.component";

// import {Form, Button,Card, CardDeck} from 'react-bootstrap';
// import '../../App.css';
// import axios from 'axios';

// import {Alert} from 'reactstrap';
// import Upper from "../../Components/Upper.component";
// import { Link } from 'react-router-dom';
// import SignUpCatering from '../../Components/Auth/RegisterCateringModal';
// // import catering from '../../Images/catering.jpg';
// import img1 from '../../Images/Customer/dj.jpg';
// const type = props =>props.signupcustomer.signup_type;

// const SignUpCustomer = props => (
//     <div>
        
            
//         <Card  bg="light" text="black" style={{ width: '18rem'  }}>
            
//         <Card.Img variant="top" src={img1} />
//         <Card.Header><center>Are you from around {props.signupcustomer.signup_city}?</center></Card.Header>
//             <Card.Body>
//             <Card.Title><center>{props.signupcustomer.signup_company}</center></Card.Title>
//             <Card.Text>
//                 Owner : {props.signupcustomer.signup_firstName} {props.signupcustomer.signup_lastName}<br/>
//                 Contact Number : {props.signupcustomer.signup_number}<br/>
//                 Location : {props.signupcustomer.signup_city}<br/>
//                 Address : {props.signupcustomer.signup_address2}<br/>
//             </Card.Text>
//             <center><Button variant="dark">Go somewhere</Button></center>
//             </Card.Body>
//         </Card>  
        
         
//     </div>
// )

// export default class Photgraphers extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {users: []};
//     }

//     componentDidMount() {
//         axios.get('http://localhost:4000/mazzevents/')
//             .then(response => {
//                 this.setState({ users: response.data });
//             })
//             .catch(function (error){
//                 console.log(error);
//             })
//     }

//     UserList() {
//         return this.state.users.map(function(currentSignUpCustomer, i){
//             if(currentSignUpCustomer.signup_type == "2" && currentSignUpCustomer.signup_category == "Photgrapher"){
//             return <SignUpCustomer signupcustomer={currentSignUpCustomer} key={i} />;
//             }
//         })
//     }

//     render() {

        
//         return (
//             <div>
//                 <LeftCustomer/>
//                 <div class="right">
//                     <Upper/>
//                     <div>
                        
                        
//                           <div  className="row card_ss">
//                           <CardDeck>
//                             { this.UserList() } 
//                             </CardDeck>
//                             </div>   
                        
                        
                         
//                     </div>
//                 </div>
//             </div>   
//         )
//     }
// }