import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import LeftAdmin from "../../Components/LeftAdmin.component";
import Upper from "../../Components/Upper.component";
import { Link } from 'react-router-dom';
import SignUp3 from '../../Components/Auth/RegisterStaffModal';
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
            <Link to={"/admin/editstaff/" +props.signupcustomer._id}>Edit</Link>
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

    onChange = e => {
        this.setState({ signup_email: e.target.value.toLowerCase()});
        
    };
    
    UserList() {
        const email = this.state.signup_email;
        if(email ==null || email===""){
            return this.state.users.map(function(currentSignUpCustomer, i){
                if(currentSignUpCustomer.signup_type === "3"){
                return <SignUpCustomer signupcustomer={currentSignUpCustomer} key={i} />;
                }
                return null;
            })
        }
        else{
            return this.state.users.map(function(currentSignUpCustomer, i){
                if(currentSignUpCustomer.signup_type === "3" && currentSignUpCustomer.signup_email.toLowerCase() === email ){
                return <SignUpCustomer signupcustomer={currentSignUpCustomer} key={i} />;
                }
                return null;
            })
        }
    }

    render() {

        
        return (
            <div>
                <LeftAdmin/>
                <div className="right">
                    <Upper/>

                    <div>
                    <h3 className="sp_head">List of Our Staff Members</h3>
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
                                    {/* <th>Address</th>
                                    <th>Second Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Zip</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                
                                { this.UserList() }
                            </tbody>
                        </table>
                        </div>
                        <SignUp3/>
                    </div>

                </div>
            </div>   
        )
    }
}