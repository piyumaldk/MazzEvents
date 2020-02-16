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
import { login } from '../../Actions/authActions';
import { clearErrors } from '../../Actions/errorActions';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

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
          <ModalHeader toggle={this.toggle}>Log In</ModalHeader>
          <center><AccountCircleSharpIcon style={{ fontSize: 80 }} /></center>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='email'>Email Address</Label>

                <div className="container">
                    <div className="row">
                        <div className="col-md-1">
                        <EmailIcon style={{ fontSize: 30 }} />
                  </div>
                        <div className="col-md-11">
                        <Input type="email" className="fontAwesome" name="signup_email" id="signup_email" placeholder="Email Address" className="mb-3" onChange={this.onChange}/>
                  </div>
                    </div>

                </div>

                <Label for='password'>Password</Label>

                <div className="container">
                    <div className="row">
                        <div className="col-md-1">
                        <LockIcon style={{ fontSize: 30 }} />
                  </div>
                        <div className="col-md-11">
                        <Input type="password" name="signup_password" id="signup_password" placeholder="Password" className="mb-3" onChange={this.onChange}/>
                  </div>
                    </div>

                </div>

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
