import React, { Component} from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";
import {Card, CardDeck} from 'react-bootstrap';
import { Form, FormGroup,  Input} from 'reactstrap';
import '../../App.css';
import axios from 'axios';
import Upper from "../../Components/Upper.component";
import company from '../../Images/Profile/company.png';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import '../../Components/Cads/card-style.css'

const SignUpCustomer = props => (
    <div>   
        
        <Card  bg="light" text="black" style={{ width: '20rem'  }} className="card text-center shadow mycard">
        <div className="overflow">    
        <Card.Img variant="top" height="240" src={!props.signupcustomer.businessImg ? company :props.signupcustomer.businessImg} alt="" className="card-img-top" />
        </div>
        <Card.Header><center>Are you from around {props.signupcustomer.signup_city}?</center></Card.Header>
            <Card.Body>
            
            <center>
                <h1>
                    <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={props.signupcustomer.sumRate/props.signupcustomer.rateTime}
                    />
                </h1>
            </center>
                
            <Card.Title><center>{props.signupcustomer.signup_company}</center></Card.Title>
            <Card.Text >
                Owner : {props.signupcustomer.signup_firstName} {props.signupcustomer.signup_lastName}<br/>
                Contact Number : {props.signupcustomer.signup_number}<br/>
                Location : {props.signupcustomer.signup_city}<br/>
                Address : {props.signupcustomer.signup_address2}<br/>
            </Card.Text>
            <center><Link to={"/customer/more/"+props.signupcustomer._id}>Visit More</Link></center>
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

    sortItems = (event) => {
        let users = this.state.users;
        const selector = event.target.value;

        if(selector === "1"){
            window.location.reload();
        }
        else if(selector =="2"){
            console.log("Test");
            users.sort((a,b) => (a.sumRate/a.rateTime < b.sumRate/b.rateTime) ? 1: -1);
            this.setState({users: users});
        }
    }

    onChange = e => {
        this.setState({ location: e.target.value.toLowerCase()});
        
    };
   
    UserList () {
        const local = this.state.location;
        if(local ==null || local===""){
            return this.state.users.map(function(currentSignUpCustomer, i){
                if(currentSignUpCustomer.signup_type === "2" && currentSignUpCustomer.signup_category === "Vehicles"){
                return <SignUpCustomer signupcustomer={currentSignUpCustomer} key={i} />;
                }
                return null;
            })
        }
        else{
            return this.state.users.map(function(currentSignUpCustomer, i){
                if(currentSignUpCustomer.signup_type === "2" && currentSignUpCustomer.signup_category === "Vehicles" && currentSignUpCustomer.signup_city.toLowerCase() === local ){
                return <SignUpCustomer signupcustomer={currentSignUpCustomer} key={i} />;
                }
                return null;
            })
        }
    }

    
    render() {
        
//const [rating, setRating] = useState(0);
//const [hoverRating, setHoverRating] = useState(0);
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
                        Sort By
                        <select onChange={(event)=>this.sortItems(event)}>
                                    <option value={1}>Normal</option>
                                    <option value={2}>Rating</option>
                                </select>
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
