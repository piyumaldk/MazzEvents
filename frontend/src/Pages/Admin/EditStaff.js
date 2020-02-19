import React, { Component } from 'react';
import axios from 'axios';
import LeftAdmin from "../../Components/LeftAdmin.component";
import Upper from "../../Components/Upper.component";
import { Button, Card, Form, Col } from 'react-bootstrap';

 class EditStaff extends Component {
     

    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);

        this.onChangeSignupFirstName = this.onChangeSignupFirstName.bind(this);
        this.onChangeSignupLastName = this.onChangeSignupLastName.bind(this);
        this.onChangeSignupEmail = this.onChangeSignupEmail.bind(this);
        this.onChangeSignupNumber = this.onChangeSignupNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            signup_firstName: '',
            signup_lastName: '',
            signup_email: '',
            signup_number: '',
            _id: '',
           
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:4000/mazzevents/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    signup_firstName: response.data.signup_firstName,
                    signup_lastName: response.data.signup_lastName,
                    signup_email: response.data.signup_email,
                    signup_number: response.data.signup_number,
                    _id: response.data._id
                })
            console.log(this.state.signup_firstName);
            
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
    onChangeSignupNumber(e) {
        this.setState({
            signup_number: e.target.value
        });
    }
   

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            _id: this.state._id,
            signup_firstName: this.state.signup_firstName,
            signup_lastName: this.state.signup_lastName,
            signup_email: this.state.signup_email,
            signup_number: this.state.signup_number,
           
        };
        axios.post('http://localhost:4000/mazzevents/updatecustomer/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/admin/staff/');
        window.location.reload();
        




    }

    deleteUser(e) {
        e.preventDefault();
        alert("Are you sure?")
        console.log("abc")
        var id = localStorage.getItem('spId');
        console.log(id);

        
        axios.delete('http://localhost:4000/mazzevents/removecustomer/' + id, {})
            .then(res => console.log(res));

        this.props.history.push('/admin/staff/');
        window.location.reload();
    }

    render() {
        localStorage.setItem("spId", this.state._id);
        return (
            <div>
                <LeftAdmin />
                <div class="right">
                    <Upper />
                    <div className="frm">
                        <div className="txt">
                            <h3 >Update  Staff Member</h3>
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
                            {/* <div className="form-group">
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
                            </div> */}

                            <div className="form-group">
                                <br />
                                <input type="submit" value="Update Staff Member" className="btn btn-primary" />
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
export default (EditStaff);