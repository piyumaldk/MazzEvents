import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import LeftAdmin from "../../Components/LeftAdmin.component";
import Upper from "../../Components/Upper.component";
import { Link } from 'react-router-dom';

const Notifications = props => (
    <tr>
        <td>{props.notifications.topic}</td>
        <td>{props.notifications.detail}</td>
        <td>
            <Link to={"/admin/editnotification/" +props.notifications._id}>Edit</Link>
        </td>
    </tr>
)

export default class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/notifications/')
            .then(response => {
                this.setState({ users: response.data });
                console.log(response.data);
                
            })
            .catch(function (error){
                console.log(error);
            })
    }

    UserList() {
        return this.state.users.map(function(currentNotifications, i){
            // if(currentSignUpCustomer.signup_type === "3"){
            return <Notifications notifications={currentNotifications} key={i} />;
            // }
            // return null;
        })
    }

    render() {

        
        return (
            <div>
                <LeftAdmin/>
                <div className="right">
                    <Upper/>

                    <div>
                    <h3>List Notifications</h3>
                        <table className="table table-striped" style={{ marginTop: 20 }} >
                            <thead>
                                <tr>
                                    <th>Topic</th>
                                    <th>Detail</th>
                                    {/* <th>Email</th>
                                    <th>Number</th> */}
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
                        {/* <SignUp3/> */}
                    </div>

                </div>
            </div>   
        )
    }
}