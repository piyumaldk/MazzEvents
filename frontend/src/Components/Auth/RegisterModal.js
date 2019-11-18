import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class SignUp extends Component {
  state = {
    modal: false,
    signup_firstName: '',
    signup_lastName: '',
    signup_option: '',
    signup_email: '',
    signup_password: '',
    signup_aPassword: '',
    signup_number: '',
    signup_location: '',
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();
    //Close modal
    this.toggle(); 
  }

  render() {
    return (
        <div>
            <NavLink onClick={this.toggle} href="#">
                Sign Up
            </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='firstName'>First Name</Label>
                <Input type="text" name="firstName" id="firstName" placeholder="firstName" onChange={this.onChange}/>

                <Label for='lastName'>Last Name</Label>
                <Input type="text" name="lastName" id="lastName" placeholder="lastName" onChange={this.onChange}/>

                <Label for='option'>Are you a free user?</Label>
                <select name="option" type="name" value={this.state.signup_option} onChange={this.onChangeSignupOption}>
                    <option value="0">Free User</option>
                    <option value="1">Service Provider</option>
                </select>

                <Label for='email'>Email Address</Label>
                <Input type="email" name="email" id="email" placeholder="Email Address" onChange={this.onChange}/>

                <Label for='password'>Password</Label>
                <Input type="password" name="password" id="password" placeholder="Password" onChange={this.onChange}/>

                <Label for='aPassword'>Confirm Password</Label>
                <Input type="password" name="aPassword" id="aPassword" placeholder="Confirm Password" onChange={this.onChange}/>

                <Label for='number'>Contact Number</Label>
                <Input type="number" name="number" id="number" placeholder="Contact Number" onChange={this.onChange}/>

                <Label for='location'>Home town</Label>
                <Input type="text" name="location" id="location" placeholder="Home Town" onChange={this.onChange}/>

                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Sign Up
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  {}
)(SignUp);

