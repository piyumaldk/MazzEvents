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
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register2 } from '../../Actions/authActions';
import { clearErrors } from '../../Actions/errorActions';
class SignUpFlowers extends Component {
  state = {
    modal: false,
    signup_type: '2',
    signup_firstName: '',
    signup_lastName: '',
    signup_option: '',
    signup_email: '',
    signup_password: '',
    signup_aPassword: '',
    signup_category: 'Flowers',
    signup_number: '',
    signup_address: '',
    signup_address2: '',
    signup_city: '',
    signup_state: '',
    signup_zip: '',
    signup_package1name: '',
    signup_package1text: '',
    signup_package1price: '',
    signup_max1: '',
    signup_package2name: '',
    signup_package2text: '',
    signup_package2price: '',
    signup_max2: '',
    signup_package3name: '',
    signup_package3text: '',
    signup_package3price: '',
    signup_max3: '',
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
    const { signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_category, signup_number, signup_address, signup_address2, signup_city, signup_state, signup_zip,signup_package1name,signup_package1text,signup_package1price,signup_max1,signup_package2name,signup_package2text,signup_package2price,signup_max2,signup_package3name,signup_package3text,signup_package3price,signup_max3, sumRate, rateTime  } = this.state;
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
      signup_zip,
      signup_package1name,
      signup_package1text,
      signup_package1price,
      signup_max1,
      signup_package2name,
      signup_package2text,
      signup_package2price,
      signup_max2,
      signup_package3name,
      signup_package3text,
      signup_package3price,
      signup_max3,
      sumRate,
      rateTime

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
      signup_category: "Flowers",
      signup_number: "", 
      signup_address: "",
      signup_address2: "",
      signup_city: "",
      signup_state: "",
      signup_zip: "",
      signup_package1name: "",
      signup_package1text: "",
      signup_package1price: "",
      signup_max1: "",
      signup_package2name: "",
      signup_package2text: "",
      signup_package2price: "",
      signup_max2: "",
      signup_package3name: "",
      signup_package3text: "",
      signup_package3price: "",
      signup_max3: "",
      sumRate: 0,
      rateTime: 0


    });
  }
  
  render() {
    return (
        <div>
            <Button onClick={this.toggle} href="#">
                Flowers+
            </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Register a Flowers</ModalHeader>
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
                
                <Label for='package1'>Package 1 Name</Label>
                <Input type="text" name="signup_package1name" id="signup_package1name" placeholder="1st Package" className="mb-3" onChange={this.onChange}/>

                <Label for='signup_package1text'>Package 1 Text</Label>
                <Input type="textarea" name="signup_package1text" id="signup_package1text" placeholder="description" className="mb-3" onChange={this.onChange} />
                
                <Label for='package1price'>Package 1 Price</Label>
                <Input type="text" name="signup_package1price" id="signup_package1price" placeholder="1st Package" className="mb-3" onChange={this.onChange}/>

                <Label for='max1'>Maximum package 1 per day</Label>
                <Input type="text" name="signup_max1" id="signup_max1" placeholder="max per day " className="mb-3" onChange={this.onChange}/> 

                <Label for='package2'>Package 2 Name</Label>
                <Input type="text" name="signup_package2name" id="signup_package2name" placeholder="2nd Package" className="mb-3" onChange={this.onChange}/>

                <Label for='package2price'>Package 2 Price</Label>
                <Input type="text" name="signup_package2price" id="signup_package2price" placeholder="1st Package" className="mb-3" onChange={this.onChange}/>

                <Label for='signup_package2text'>Package 2 Text</Label>
                <Input type="textarea" name="signup_package2text" id="signup_package2text" placeholder="description" className="mb-3" onChange={this.onChange} />

                <Label for='max2'>Maximum package 2 per day</Label>
                <Input type="text" name="signup_max2" id="signup_max2" placeholder="max per day" className="mb-3" onChange={this.onChange}/> 

                <Label for='package3'>Package 3 Name</Label>
                <Input type="text" name="signup_package3name" id="signup_package3name" placeholder="3rd Package" className="mb-3" onChange={this.onChange}/>

                <Label for='package3price'>Package 3 Price</Label>
                <Input type="text" name="signup_package3price" id="signup_package3price" placeholder="3rd Package" className="mb-3" onChange={this.onChange}/>

                <Label for='signup_package3text'>Package 3 Text</Label>
                <Input type="textarea" name="signup_package3text" id="signup_package3text"  placeholder="description" className="mb-3" onChange={this.onChange}/>

                <Label for='max3'>Maximum package 3 per day</Label>
                <Input type="text" name="signup_max3" id="signup_max3" placeholder="max per day" className="mb-3" onChange={this.onChange}/>

                       

                { this.state.msg ? (<Alert color="danger">{ this.state.msg }</Alert>) : null }

                <Button color='dark' disabled={ 
                  !this.state.signup_type || !this.state.signup_firstName ||!this.state.signup_package3name ||!this.state.signup_package3text ||!this.state.signup_package3price ||!this.state.signup_max3 ||!this.state.signup_package2name ||!this.state.signup_package2text ||!this.state.signup_package2price ||!this.state.signup_max2 ||!this.state.signup_package1name ||!this.state.signup_package1text ||!this.state.signup_package1price ||!this.state.signup_max1 ||!this.state.signup_lastName || !this.state.signup_email || !this.state.signup_password || !this.state.signup_aPassword || !this.state.signup_category || !this.state.signup_number || !this.state.signup_address || !this.state.signup_address2 || !this.state.signup_city || !this.state.signup_state || !this.state.signup_zip
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
)(SignUpFlowers);

