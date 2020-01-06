import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import '../../App.css';
import axios from 'axios';
import LeftStaff from "../../Components/LeftStaff.component";
import {Alert} from 'reactstrap';
import Upper from "../../Components/Upper.component";
import { Link } from 'react-router-dom';
import SignUpCatering from '../../Components/Auth/RegisterCateringModal';
import SignUpDj from '../../Components/Auth/RegisterDjModal';
import SignUpFlowers from '../../Components/Auth/RegisterFlowersModal';
import SignUpHotels from '../../Components/Auth/RegisterHotelModal';
import SignUpMusic from '../../Components/Auth/RegisterMusicModal';
import SignUpPhotography from '../../Components/Auth/RegisterPhotographyModal';
import SignUpVehicles from '../../Components/Auth/RegisterVehiclesModal';


const type = props =>props.signupcustomer.signup_type;



const SignUpCustomer = props => (
    <tr>
        <td>{props.signupcustomer.signup_firstName}</td>
        <td>{props.signupcustomer.signup_lastName}</td>
        <td>{props.signupcustomer.signup_email}</td>
        <td>{props.signupcustomer.signup_number}</td>
        <td>{props.signupcustomer.signup_address}</td>
        <td>{props.signupcustomer.signup_address2}</td>
        <td>{props.signupcustomer.signup_city}</td>
        <td>{props.signupcustomer.signup_state}</td>
        <td>{props.signupcustomer.signup_zip}</td>
        <td>
            <Link to={"/staff/editserviceprovider/"+props.signupcustomer._id}>Edit</Link>
        </td>
    </tr>
)

export default class StaffServiceProvider extends Component {

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
            if(currentSignUpCustomer.signup_type == "2" && currentSignUpCustomer.signup_category == "Photgrapher"){
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
                    <h3>List of Our Service Providers</h3>
                        <table className="table table-striped" style={{ marginTop: 20 }} >
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Address</th>
                                    <th>Second Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Zip</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                { this.UserList() }
                            </tbody>
                        </table>
                        <table>
                            <tr>
                                
                                <th><SignUpPhotography/></th>
                                
                            </tr>
                        </table>
                    </div>

                </div>
            </div>   
        )
    }
}

