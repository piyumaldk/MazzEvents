import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import LeftStaff from "../../Components/LeftStaff.component";
import Upper from "../../Components/Upper.component";
import { Link } from 'react-router-dom';
import SignUpFlowers from '../../Components/Auth/RegisterFlowersModal';
import { Form, FormGroup,Input} from 'reactstrap';

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
            <Link to={"/staff/editserviceprovider/" + props.signupcustomer._id}>Edit</Link>
        </td>
    </tr>
)

export default class StaffCatering extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/mazzevents/')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChange = e => {
        this.setState({ signup_email: e.target.value.toLowerCase()});
        
    };

    //Flowers
    UserList() {
        const email = this.state.signup_email;
        if(email ==null || email===""){
            return this.state.users.map(function(currentSignUpCustomer, i){
                if(currentSignUpCustomer.signup_type === "2" && currentSignUpCustomer.signup_category === "Flowers"){
                return <SignUpCustomer signupcustomer={currentSignUpCustomer} key={i} />;
                }
                return null;
            })
        }
        else{
            return this.state.users.map(function(currentSignUpCustomer, i){
                if(currentSignUpCustomer.signup_type === "2" && currentSignUpCustomer.signup_category === "Flowers" && currentSignUpCustomer.signup_email.toLowerCase() === email ){
                return <SignUpCustomer signupcustomer={currentSignUpCustomer} key={i} />;
                }
                return null;
            })
        }
    }

    render() {


        return (
            <div>
                <LeftStaff />
                <div className="right">
                    <Upper />

                    <h3 className="sp_head">List of Registered Flower service Providers</h3>
                    <Form>
                        <FormGroup>
                            <Input type="signup_email" name="signup_email" id="signup_email" placeholder="Search Email here" onChange={this.onChange}/>
                        </FormGroup>
                    </Form>
                    <div className="sp_table">
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
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {this.UserList()}
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <th><SignUpFlowers /></th>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


