import React, { Component } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import {Button, Card, Form, Col} from 'react-bootstrap';
import Piyumal from '../../Images/piyumal.jpeg';
import Upper from '../../Components/Upper.component';
import { connect } from 'react-redux';
import axios from 'axios';

class ServiceProviderAccount extends Component {

  constructor(props){
    super(props);
    this.onChangeSignupFirstName = this.onChangeSignupFirstName.bind(this);
    this.onChangeSignupLastName = this.onChangeSignupLastName.bind(this);
    this.onChangeSignupOption = this.onChangeSignupOption.bind(this);
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
        signup_option: '',
        signup_email: '',
        signup_password: '',
        signup_aPassword: '',
        signup_number: '',
        signup_address: '',
        signup_address2: '',
        signup_city: '',
        signup_state: '',
        signup_zip: '',
        signup_completed: false
    }
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
onChangeSignupOption(e){
    this.setState({
        signup_option: e.target.value
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
onChangeSignupAddress(e){
    this.setState({
        signup_address: e.target.value
    });
}
onChangeSignupAddress2(e){
  this.setState({
      signup_address2: e.target.value
  });
}
onChangeSignupCity(e){
  this.setState({
      signup_city: e.target.value
  });
}
onChangeSignupState(e){
  this.setState({
      signup_state: e.target.value
  });
}
onChangeSignupZip(e){
  this.setState({
      signup_zip: e.target.value
  });
}
onSubmit(e){
    e.preventDefault();
    console.log(`Form submitted:`);
    console.log(`signup First Name: ${this.state.signup_firstName}`);
    console.log(`signup last Name: ${this.state.signup_lastName}`);
    console.log(`signup option: ${this.state.signup_option}`);
    console.log(`signup Email: ${this.state.signup_email}`);
    console.log(`signup Password: ${this.state.signup_password}`);
    console.log(`signup Password Agian: ${this.state.signup_aPassword}`);
    console.log(`signup Number: ${this.state.signup_number}`);
    console.log(`signup Address: ${this.state.signup_address}`);
    console.log(`signup Address2: ${this.state.signup_address2}`);
    console.log(`signup City: ${this.state.signup_city}`);
    console.log(`signup State: ${this.state.signup_state}`);
    console.log(`signup Completed: ${this.state.signup_completed}`);

    const newSignUp = {
        signup_firstName: this.state.signup_firstName, 
        signup_lastName: this.state.signup_lastName,
        signup_option: this.state.signup_option,
        signup_email: this.state.signup_email,
        signup_password: this.state.signup_password,
        signup_aPassword: this.state.signup_aPassword,
        signup_number: this.state.signup_number,
        signup_address: this.state.signup_address,
        signup_address2: this.state.signup_address,
        signup_city: this.state.signup_address,
        signup_state: this.state.signup_address,
        signup_zip: this.state.signup_address,
        signup_completed: this.state.signup_completed
    }

    
  axios.post('/mazzevents/updatecustomer', newSignUp)
    .then(res => console.log(res.data));
  
    
    this.setState({
        signup_firstName: '',
        signup_lastName: '',
        singup_option: '',
        signup_email: '',
        signup_password: '',
        signup_aPassword: '',
        signup_number: '',
        signup_address: '',
        signup_address2: '',
        signup_city: '',
        signup_state: '',
        signup_zip: '',
        signup_completed: false
    })
}



  render() {
    return (
      <div>
        <LeftSeriveProvider/>
        <div  class="right">
          <Upper/>
          <div class="left">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Piyumal} />
                <Card.Body>
                  <Card.Title><center>{this.props.fName} {this.props.lName}</center></Card.Title>
                  <Card.Text>
                    Email Address: {this.props.email}<br/>
                    Contact Number: {this.props.number}<br/>
                    Address :<br/> {this.props.address}<br/>
                    Second Address :<br/> {this.props.address2}<br/>
                    City : {this.props.city}<br/>
                    State : {this.props.state}<br/>
                    Zip : {this.props.zip}<br/>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          <div  class="rightAccount">
          <Form onSubmit={this.onSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="first name" onChange={this.onChangeSignupFirstName}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="last name" onChange={this.onChangeSignupLastName}/>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={this.onChangeSignupEmail}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"/>
              </Form.Group>
            </Form.Row>
            <Form.Group controlId="ContactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control onChange={this.onChangeSignupNumber}/>
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control onChange={this.onChangeSignupAddress}/>
            </Form.Group>
            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control onChange={this.onChangeSignupAddress2}/>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control onChange={this.onChangeSignupCity}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control onChange={this.onChangeSignupState}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control onChange={this.onChangeSignupZip}/>
              </Form.Group>
            </Form.Row>
            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
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
  fName: state.auth.fName,
  lName: state.auth.lName,
  email: state.auth.email,
  number: state.auth.number,
  location: state.auth.location,
  address: state.auth.address,
  address2: state.auth.address2,
  city: state.auth.city,
  state: state.auth.state,
  zip: state.auth.zip
});

export default connect(mapStateToProps,null)(ServiceProviderAccount);