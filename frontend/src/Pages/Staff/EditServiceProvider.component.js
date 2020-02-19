import React, { Component } from 'react';
import axios from 'axios';
import LeftStaff from "../../Components/LeftStaff.component";
import Upper from "../../Components/Upper.component";
import { Button, Card, Form, Col } from 'react-bootstrap';

 class EditServiceProvider extends Component {

    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);

        this.onChangeSignupFirstName = this.onChangeSignupFirstName.bind(this);
        this.onChangeSignupLastName = this.onChangeSignupLastName.bind(this);
        this.onChangeSignupEmail = this.onChangeSignupEmail.bind(this);
        this.onChangeSignupPassword = this.onChangeSignupPassword.bind(this);
        this.onChangeSignupAPassword = this.onChangeSignupAPassword.bind(this);
        this.onChangeSignupNumber = this.onChangeSignupNumber.bind(this);
        this.onChangeSignupAddress = this.onChangeSignupAddress.bind(this);
        this.onChangeSignupAddress2 = this.onChangeSignupAddress2.bind(this);
        this.onChangeSignupCity = this.onChangeSignupCity.bind(this);
        this.onChangeSignupState = this.onChangeSignupState.bind(this);
        this.onChangeSignupZip = this.onChangeSignupZip.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            signup_firstName: '',
            signup_lastName: '',
            signup_email: '',
            signup_password: '',
            signup_aPassword: '',
            signup_number: '',
            signup_address: '',
            signup_address2: '',
            signup_city: '',
            signup_state: '',
            signup_zip: '',
            signup_completed: false,
            _id: ''
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:4000/mazzevents/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    profile_data: response.data,
                    signup_firstName: response.data.signup_firstName,
                    signup_lastName: response.data.signup_lastName,
                    signup_email: response.data.signup_email,
                    signup_password: response.data.signup_password,
                    signup_aPassword: response.data.signup_aPassword,
                    signup_number: response.data.signup_number,
                    signup_address: response.data.signup_address,
                    signup_address2: response.data.signup_address2,
                    signup_city: response.data.signup_city,
                    signup_state: response.data.signup_state,
                    signup_zip: response.data.signup_zip,
                    signup_completed: response.data.signup_completed,
                    _id: response.data._id
                })

                // console.log(this.state.profile_data)
            })
            .catch(function (error) {
                console.log(error)
            })
            


    }

    onChangeSignupFirstName(e) {
        this.setState({
            signup_firstName: e.target.value
        });
    }
    onChangeSignupLastName(e) {
        this.setState({
            signup_lastName: e.target.value
        });
    }
    onChangeSignupEmail(e) {
        this.setState({
            signup_email: e.target.value
        });
    }
    onChangeSignupPassword(e) {
        this.setState({
            signup_password: e.target.value
        });
    }
    onChangeSignupAPassword(e) {
        this.setState({
            signup_aPassword: e.target.value
        });
    }
    onChangeSignupNumber(e) {
        this.setState({
            signup_number: e.target.value
        });
    }
    onChangeSignupAddress(e) {
        this.setState({
            signup_address: e.target.value
        });
    }
    onChangeSignupAddress2(e) {
        this.setState({
            signup_address2: e.target.value
        });
    }
    onChangeSignupCity(e) {
        this.setState({
            signup_city: e.target.value
        });
    }
    onChangeSignupState(e) {
        this.setState({
            signup_state: e.target.value
        });
    }
    onChangeSignupZip(e) {
        this.setState({
            signup_zip: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            _id: this.state._id,
            signup_firstName: this.state.signup_firstName,
            signup_lastName: this.state.signup_lastName,
            signup_email: this.state.signup_email,
            signup_password: this.state.signup_password,
            signup_aPassword: this.state.signup_aPassword,
            signup_number: this.state.signup_number,
            signup_address: this.state.signup_address,
            signup_address2: this.state.signup_address2,
            signup_city: this.state.signup_city,
            signup_state: this.state.signup_state,
            signup_zip: this.state.signup_zip,
            signup_completed: this.state.signup_completed
        };
        axios.post('http://localhost:4000/mazzevents/updatecustomer/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/staff/account');
        window.location.reload();
        // alert("Updated successfully")




    }

    deleteUser(e) {
        e.preventDefault();
        alert("Are you sure?")
        console.log("abc")
        var id = localStorage.getItem('spId');
        console.log(id);

        
        axios.delete('http://localhost:4000/mazzevents/removecustomer/' + id, {})
            .then(res => console.log(res));

        this.props.history.push('/staff/account');
        window.location.reload();
    }

    render() {
        localStorage.setItem("spId", this.state._id);
        return (
            <div>
                <LeftStaff />
                <div class="right">
                    <Upper />
                    <div className="frm">
                        <div className="txt">
                            <h3 >Update Service Provider</h3>
                        </div>

                        <form onSubmit={this.onSubmit} >

                            <div className="form-group">
                                <label>First name</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.signup_firstName}
                                    onChange={this.onChangeSignupFirstName}
                                />
                            </div>
                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.signup_lastName}
                                    onChange={this.onChangeSignupLastName}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.signup_email}
                                    onChange={this.onChangeSignupEmail}
                                />
                            </div>
                            <div className="form-group">
                                <label>Contact Number</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.signup_number}
                                    onChange={this.onChangeSignupNumber}
                                />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.signup_address}
                                    onChange={this.onChangeSignupAddress}
                                />
                            </div>
                            <div className="form-group">
                                <label>Second Address</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.signup_address2}
                                    onChange={this.onChangeSignupAddress2}
                                />
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.signup_city}
                                    onChange={this.onChangeSignupCity}
                                />
                            </div>
                            <div className="form-group">
                                <label>State</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.signup_state}
                                    onChange={this.onChangeSignupState}
                                />
                            </div>
                            <div className="form-group">
                                <label>Zip</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.signup_zip}
                                    onChange={this.onChangeSignupZip}
                                />
                            </div>

                            <div className="form-group">
                                <br />
                                <input type="submit" value="Update Service Provider" className="btn btn-primary" />
                            </div>
                            

                        </form>
                            <div>
                                <Button onClick={this.deleteUser}>Delete</Button>
                            </div>

                    </div>

                </div>


            </div>

        )
    }
}
export default (EditServiceProvider);