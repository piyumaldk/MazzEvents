import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import '../../App.css';
import axios from 'axios';
import LeftStaff from "../../Components/LeftStaff.component";
import {Alert} from 'reactstrap';
import Upper from "../../Components/Upper.component";
import { Link } from 'react-router-dom';


const type = props =>props.signupcustomer.signup_type;



const SignUpCustomer = props => (
    <tr>
        <td>{props.signupcustomer.signup_firstName}</td>
        <td>{props.signupcustomer.signup_lastName}</td>
        <td>{props.signupcustomer.signup_email}</td>
        <td>{props.signupcustomer.signup_number}</td>
        <td>{props.signupcustomer.signup_location}</td>
    </tr>
)

export default class StaffCustomer extends Component {

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
            if(currentSignUpCustomer.signup_type == "1"){
            return <SignUpCustomer signupcustomer={currentSignUpCustomer} key={i} />;
            }
        })
    }

    render() {

        
        return (
            <div>
                <LeftStaff/>
                <div class="right">
                    <Upper/>

                    <div>
                    <h3>List of Our Customers</h3>
                        <table className="table table-striped" style={{ marginTop: 20 }} >
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                { this.UserList() }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>   
        )
    }
}

