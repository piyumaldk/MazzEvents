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
  NavLink,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../Actions/authActions';
import { clearErrors } from '../../Actions/errorActions';
class SignUp extends Component {

  state = {
    modal: false,
    signup_type: '1',
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
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
  //Bring msgs from backend
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if(error !== prevProps.error) {
      //Check signup errors
      if(error.id === 'REGISTER_FAIL') {
        this.setState({ msg: error.msg.msg });
      } 
      else {
        this.setState({ msg: null });
      }
    }
    //If modal is open
    if(this.state.modal) {
      //If authenticated
      if(isAuthenticated){
        //Closing modal
        this.toggle();
      }
    }
  }
  //Where modal open and close
  toggle = () => {
    //Clear messages
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value});
  };

  onSubmit = e => {
    e.preventDefault();
    const { signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_number, signup_location } = this.state;
    //Create user object
    const newSignUpCustomer = {
      signup_type,
      signup_firstName, 
      signup_lastName, 
      signup_email, 
      signup_password, 
      signup_aPassword, 
      signup_number, 
      signup_location
    };
    //Attempt to Register
    this.props.register(newSignUpCustomer);
    this.props.history.push('/');
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
                <Input type="text" name="signup_firstName" id="signup_firstName" placeholder="First Name" className="mb-3" onChange={this.onChange}/>

                <Label for='lastName'>Last Name</Label>
                <Input type="text" name="signup_lastName" id="signup_lastName" placeholder="Last Name" className="mb-3" onChange={this.onChange}/>

                <Label for='email'>Email Address</Label>
                <Input type="email" name="signup_email" id="signup_email" placeholder="Email Address" className="mb-3" onChange={this.onChange}/>

                <Label for='password'>Password</Label>
                <Input type="password" name="signup_password" id="signup_password" placeholder="Password" className="mb-3" onChange={this.onChange}/>

                <Label for='aPassword'>Confirm Password</Label>
                <Input type="password" name="signup_aPassword" id="signup_aPassword" placeholder="Confirm Password" className="mb-3" onChange={this.onChange}/>

                <Label for='number'>Contact Number</Label>
                <Input type="number" name="signup_number" id="signup_number" placeholder="Contact Number" className="mb-3" onChange={this.onChange}/>

                <Label for='location'>Home town</Label>
                <Input type="text" name="signup_location" id="signup_location" placeholder="Home Town" className="mb-3" onChange={this.onChange}/>

                { this.state.msg ? (<Alert color="danger">{ this.state.msg }</Alert>) : null }

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
  { register, clearErrors }
)(SignUp);

