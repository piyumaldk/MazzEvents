import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../Actions/authActions';
import { clearErrors } from '../../Actions/errorActions';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import "bootstrap/dist/css/bootstrap.min.css";

import PersonIcon from '@material-ui/icons/Person';
class LogIn extends Component {
  state = {
    modal: false,
    signup_email: '',
    signup_password: '',
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
  //Bring msgs from backend
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if(error !== prevProps.error) {
      //Check login errors
      if(error.id === 'LOGIN_FAIL') {
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
    const { signup_email, signup_password } = this.state;
    const user = {
        signup_email,
        signup_password
    };
    //console.log(user);
    //Attempt to login
    this.props.login(user);
    
  };

  render() {
    return (
        <div>
            <NavLink onClick={this.toggle} href="#">
                Log In
            </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Log In </ModalHeader>

          <center><AccountCircleSharpIcon style={{ fontSize: 80 }} /></center>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='email'>Email Address</Label>
                <Input id="InputAdornment" type="email" name="signup_email" id="signup_email" placeholder="Email Address" className="mb-3" onChange={this.onChange}/>
    
                <Label for='password'>Password</Label>
                <Input type="password" name="signup_password" id="signup_password" placeholder="Password" className="mb-3" onChange={this.onChange}/>

                { this.state.msg ? (<Alert color="danger">{ this.state.msg }</Alert>) : null }

                <Button color='dark' style={{ marginTop: '2rem' }} block>
                  Log in
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
  { login, clearErrors }
)(LogIn);
