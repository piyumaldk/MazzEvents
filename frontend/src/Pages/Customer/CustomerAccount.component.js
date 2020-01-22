import React, {Component} from 'react';
import axios from 'axios';
import {Button, Card, Form, Col} from 'react-bootstrap';
import LeftCustomer from "../../Components/LeftCustomer.component";
import Upper from "../../Components/Upper.component";
import { connect } from 'react-redux';
import AddImage from "../../Components/AddCustomerImage.component";
import Delete from "../../Components/Delete.component";
import customer from '../../Images/Profile/customer.jpg';

class CustomerAccount extends Component {

    constructor(props) {
        super(props);

        this.onChangeSignupFirstName = this.onChangeSignupFirstName.bind(this);
        this.onChangeSignupLastName = this.onChangeSignupLastName.bind(this);
        this.onChangeSignupEmail = this.onChangeSignupEmail.bind(this);
        this.onChangeSignupPassword = this.onChangeSignupPassword.bind(this);
        this.onChangeSignupAPassword = this.onChangeSignupAPassword.bind(this);
        this.onChangeSignupNumber = this.onChangeSignupNumber.bind(this);
        this.onChangeSignupLocation = this.onChangeSignupLocation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            signup_firstName: '',
            signup_lastName: '',
            signup_email: '',
            signup_password: '',
            signup_aPassword: '',
            signup_number: '',
            signup_location: '',
            signup_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/mazzevents/'+this.props.id)
            .then(response => {
                this.setState({
                    signup_firstName: response.data.signup_firstName,
                    signup_lastName: response.data.signup_lastName,
                    signup_email: response.data.signup_email,
                    signup_password: response.data.signup_password,
                    signup_aPassword: response.data.signup_aPassword,
                    signup_number: response.data.signup_number,
                    signup_location: response.data.signup_location,
                    profilePic: response.data.profileImg,
                    signup_completed: response.data.signup_completed
                })
            })

            axios.get('http://localhost:4000/mazzevents/getprofileimg/'+this.props.id)
            .then(response => {
                console.log("testing");
                this.setState({
                    ownerId: response.data.ownerId,
                    profilePic: response.data.profileImg
                })
            })

            .catch(function(error) {
                console.log(error)
            })
    }

    onChangeSignupFirstName(e){
        this.setState({
            signup_firstName: e.target.value
        });
    }
    onChangeSignupLastName(e){
        this.setState({
            signup_lastName: e.target.value
        });
    }
    onChangeSignupEmail(e){
        this.setState({
            signup_email: e.target.value
        });
    }
    onChangeSignupPassword(e){
        this.setState({
            signup_password: e.target.value
        });
    }
    onChangeSignupAPassword(e){
        this.setState({
            signup_aPassword: e.target.value
        });
    }
    onChangeSignupNumber(e){
        this.setState({
            signup_number: e.target.value
        });
    }
    onChangeSignupLocation(e){
      this.setState({
          signup_location: e.target.value
      });
  }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            signup_firstName: this.state.signup_firstName, 
            signup_lastName: this.state.signup_lastName,
            signup_email: this.state.signup_email,
            signup_password: this.state.signup_password,
            signup_aPassword: this.state.signup_aPassword,
            signup_number: this.state.signup_number,
            signup_location: this.state.signup_location,
            signup_completed: this.state.signup_completed
        };
        
        axios.post('http://localhost:4000/mazzevents/updatecustomer/'+this.props.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/customer/photo');
    }
    
    render() {
        return (
            <div>
                <LeftCustomer/>
                <div className="right">
                    <Upper/>

                    <div className="left">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={!this.state.profilePic ? customer :this.state.profilePic} />
                            <Card.Body>
                            <Card.Title><center>{this.state.signup_firstName} {this.state.signup_lastName}</center></Card.Title>
                            <Card.Text>
                                Email Address: {this.state.signup_email}<br/>
                                Contact Number: {this.state.signup_number}<br/>
                            
                            </Card.Text>
                            <br/>
                            <center>
                        <AddImage/> 
                        <Delete/>
                        </center>
                            </Card.Body>
                        </Card>
                    </div>
                    
                    <div className="rightAccount">
                        <h3>Update My details</h3>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" className="form-control" value={this.state.signup_firstName} onChange={this.onChangeSignupFirstName}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" className="form-control" value={this.state.signup_lastName} onChange={this.onChangeSignupLastName}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" className="form-control" value={this.state.signup_email} onChange={this.onChangeSignupEmail}/>
                                </Form.Group>
                                <Form.Group controlId="ContactNumber">
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control  type="text" className="form-control" value={this.state.signup_number} onChange={this.onChangeSignupNumber}/>
                                </Form.Group>
                            </Form.Row>
                            <Button variant="primary" type="submit"  value="Update">
                                Update
                            </Button>
                        </Form>
                        
                    </div>
                </div>
             </div>
        )
    }
}

const mapStateToProps = state => ({
    id: state.auth.id,
    fName: state.auth.fName,
    lName: state.auth.lName,
    email: state.auth.email,
    number: state.auth.number
  });

export default connect(mapStateToProps,null)(CustomerAccount);