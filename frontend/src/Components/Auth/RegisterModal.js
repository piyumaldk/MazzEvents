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
import { register2 } from '../../Actions/authActions';
import { clearErrors } from '../../Actions/errorActions';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircle';

//email syntax
function validateEmail(email) {
  const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexp.test(email);
}

//validate tel
function validateTel(tel) {
   const reg = /^(0)(7)([0-9]{8})$/;
  //const reg = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/;
  return reg.test(tel);
}


//validate password (minimum 6 characters, atleast one caps and one simple letter, one special character and one number)
function validatePassword(password) {
  const regpw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return regpw.test(password);
}

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
    sumRate: 0,
    rateTime: 0,
    msg: null
  };

  static propTypes = {
    added: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register2: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };
  //Bring msgs from backend
  componentDidUpdate(prevProps) {
    const { error, added } = this.props;
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
      if(added){
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
    const { signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_number, signup_location, sumRate, rateTime } = this.state;
    //Create user object
    const newSignUpCustomer = {
      signup_type,
      signup_firstName, 
      signup_lastName, 
      signup_email, 
      signup_password, 
      signup_aPassword, 
      signup_number, 
      signup_location,
      sumRate,
      rateTime
    };

    //email syntax validation
    if(!validateEmail(this.state.signup_email)){
      alert("Enter valid email address");
  }
  //Tele syntax validation
  else if(!validateTel(this.state.signup_number)){
      alert("Enter valid telephone number");
  }
  //Password syntax validation
  else if(!validatePassword(this.state.signup_password)){
      alert("Enter valid Password (minimum 6 characters, atleast one caps and one simple letter, one special character and one number)");
  }
  else{
    //Attempt to Register
    this.props.register2(newSignUpCustomer);
    this.setState({
      signup_type: "1",
      signup_firstName: "", 
      signup_lastName: "", 
      signup_email: "", 
      signup_password: "", 
      signup_aPassword: "", 
      signup_number: "", 
      signpup_location: "",
      sumRate: 0,
      rateTime: 0
    });
  }
}

  render() {
    return (
        <div>
            <NavLink onClick={this.toggle} href="#">
                Sign Up
            </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <center><AccountCircleSharpIcon style={{ fontSize: 80 }} /></center>
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
  added: state.error.added,
  error: state.error
});

export default connect(
  mapStateToProps,
  { register2, clearErrors }
)(SignUp);

