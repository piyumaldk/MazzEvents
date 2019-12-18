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
import { Photographer_Action } from '../../Actions/serviceActions';
import { clearErrors } from '../../Actions/errorActions';
class Add_Music extends Component {
  state = {
    modal: false,
    Name: '',
    Email: '',
    Phone_number: '',
    City: '',
    Brand: '',
    Type: '',

    msg: null
  };

  static propTypes = {
    added: PropTypes.bool,
    error: PropTypes.object.isRequired,
    Vehicle_Action: PropTypes.func.isRequired,
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
    let { Name, Email } = this.state;
    //Create user object
    let dj = {
      Name,
      Email
    };
    //Register
    this.props.Vehicle_Action(dj);
    //Clear form data
    this.setState({
      Name: "",
      Email: ""
    });
  }

  render() {
    return (
        <div>
        <NavLink onClick={this.toggle} href="#">
          Music
        </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Register a Musician</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='Name'>Name</Label>
                <Input type="text" name="Name" id="Name" placeholder="Name" className="mb-3" onChange={this.onChange}/>

                <Label for='Email'>Email</Label>
                <Input type="text" name="Email" id="Email" placeholder="Email" className="mb-3" onChange={this.onChange}/>

                <Label for='Phone_number'>Contact Number</Label>
                <Input type="text" name="Phone_number" id="Phone_number" placeholder="Phone_number" className="mb-3" onChange={this.onChange}/>

                <Label for='City'>City</Label>
                <Input type="text" name="City" id="City" placeholder="City" className="mb-3" onChange={this.onChange}/>

                <Label for='Youtube_link'>Youtube link</Label>
                <Input type="text" name="Youtube_link" id="Youtube_link" placeholder="Youtube_link" className="mb-3" onChange={this.onChange}/>

                <Label for='Fackbook_link'>Fackbook link</Label>
                <Input type="text" name="Fackbook_link" id="Fackbook_link" placeholder="Fackbook_link" className="mb-3" onChange={this.onChange}/>

                { this.state.msg ? (<Alert color="danger">{ this.state.msg }</Alert>) : null }

                <Button color='dark' style={{ marginTop: '2rem' }} block>
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
  { Photographer_Action, clearErrors }
)(Add_Music);