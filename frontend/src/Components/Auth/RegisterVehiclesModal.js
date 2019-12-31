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
class SignUpVehicles extends Component {
  state = {
    modal: false,
    signup_type: '2',
    signup_firstName: '',
    signup_lastName: '',
    signup_option: '',
    signup_email: '',
    signup_password: '',
    signup_aPassword: '',
    signup_category: 'Vehicles',
    signup_number: '',
    signup_address: '',
    signup_address2: '',
    signup_city: '',
    signup_state: '',
    signup_zip: '',
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
    const { signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_category, signup_number, signup_address, signup_address2, signup_city, signup_state, signup_zip } = this.state;
    //Create user object
    const newSignUpServiceProvider = {
      signup_type,
      signup_firstName, 
      signup_lastName, 
      signup_email, 
      signup_password, 
      signup_aPassword, 
      signup_category,
      signup_number, 
      signup_address,
      signup_address2,
      signup_city,
      signup_state,
      signup_zip
    };

    //Attempt to Register
    this.props.register2(newSignUpServiceProvider);
    //Clear form data
    this.setState({
      signup_type: "2",
      signup_firstName: "", 
      signup_lastName: "", 
      signup_email: "", 
      signup_password: "", 
      signup_aPassword: "", 
      signup_category: "Vehicles",
      signup_number: "", 
      signup_address: "",
      signup_address2: "",
      signup_city: "",
      signup_state: "",
      signup_zip: ""
    });
  }

  render() {
    return (
        <div>
            <NavLink onClick={this.toggle} href="#">
                Vehicles+
            </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Register a Vehicle</ModalHeader>
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

                <Label for='Category'>Category</Label>
                <Input type="select" name="signup_category" id="signup_category"  className="mb-3" onChange={this.onChange}>
                  <option>Photography</option>
                  <option>DJ</option>
                  <option>Music</option>
                  <option>Catering</option>
                  <option>Reception Halls</option>
                  <option>Hotels</option>
                  <option>Fowers</option>
                  <option>Vehicles</option>
                </Input>

                <Label for='number'>Contact Number</Label>
                <Input type="number" name="signup_number" id="signup_number" placeholder="Contact Number" className="mb-3" onChange={this.onChange}/>

                <Label for='address'>Address</Label>
                <Input type="text" name="signup_address" id="signup_address" placeholder="Address" className="mb-3" onChange={this.onChange}/>

                <Label for='address2'>Second Address</Label>
                <Input type="text" name="signup_address2" id="signup_address2" placeholder="Second Address" className="mb-3" onChange={this.onChange}/>

                <Label for='city'>City</Label>
                <Input type="text" name="signup_city" id="signup_city" placeholder="City" className="mb-3" onChange={this.onChange}/>

                <Label for='state'>State</Label>
                <Input type="text" name="signup_state" id="signup_state" placeholder="State" className="mb-3" onChange={this.onChange}/>

                <Label for='zip'>Zip</Label>
                <Input type="text" name="signup_zip" id="signup_zip" placeholder="Zip" className="mb-3" onChange={this.onChange}/>

                { this.state.msg ? (<Alert color="danger">{ this.state.msg }</Alert>) : null }

                <Button color='dark' disabled={ 
                  !this.state.signup_type || !this.state.signup_firstName || !this.state.signup_lastName || !this.state.signup_email || !this.state.signup_password || !this.state.signup_aPassword || !this.state.signup_category || !this.state.signup_number || !this.state.signup_address || !this.state.signup_address2 || !this.state.signup_city || !this.state.signup_state || !this.state.signup_zip
                  } style={{ marginTop: '2rem' }} block>
                  Add
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
)(SignUpVehicles);

