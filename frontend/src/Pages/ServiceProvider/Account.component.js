import React, {Component} from 'react';
import axios from 'axios';
import {Button, Card, Form, Col} from 'react-bootstrap';
import LeftServiceProvider from "../../Components/LeftServiceProvider.component";
import Upper from "../../Components/Upper.component";
import { connect } from 'react-redux';
import AddImage from "../../Components/AddServiceImage.component";
import normal from '../../Images/Profile/normal.png';
import Delete from "../../Components/Delete.component";

class ServiceProviderAccount extends Component {
    constructor(props) {
        super(props);
        this.onChangeSignupFirstName = this.onChangeSignupFirstName.bind(this);
        this.onChangeSignupLastName = this.onChangeSignupLastName.bind(this);
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
                    signup_address: response.data.signup_address,
                    signup_address2: response.data.signup_address2,
                    signup_city: response.data.signup_city,
                    signup_state: response.data.signup_state,
                    signup_zip: response.data.signup_zip,
                    profilePic: response.data.profileImg,
                    signup_completed: response.data.signup_completed
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
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            signup_firstName: this.state.signup_firstName, 
            signup_lastName: this.state.signup_lastName,
            signup_email: this.state.signup_email,
            signup_password: this.state.signup_password,
            signup_aPassword: this.state.signup_aPassword,
            signup_number: this.state.signup_number,
            signup_address: this.state.signup_address,
            signup_address2: this.state.signup_address2,
            signup_city: this.state.signup_city,
            signup_state: this.state.signup_state,
            signup_zip: this.state.signup_zip,
            signup_completed: this.state.signup_completed
        };
        
        axios.post('http://localhost:4000/mazzevents/updatecustomer/'+this.props.id, obj)
            .then(res => console.log(res.data));

            const obj2 = {
                signup_password: this.state.signup_password,
                signup_completed: this.state.signup_completed
            };
            if(this.state.signup_password){
                axios.post('http://localhost:4000/mazzevents/updatepassword/'+this.props.id, obj2)
                    .then(res => console.log(res.data));
            }
            //this.props.history.push('/customer/photo');
        }
    
    render() {
        return (
            <div>
                <LeftServiceProvider/>
                <div className="right">
                    <Upper/>
                    <div className="left">
                    <Card style={{ width: '18rem'}}>
                        <div className="overflow"> 
                            <Card.Img variant="top" src={!this.state.profilePic ? normal :this.state.profilePic}/>
                         </div>   
                            <Card.Body>
                            <Card.Title><center>{this.state.signup_firstName} {this.state.signup_lastName}</center></Card.Title>
                            <Card.Text>
                                Email Address: {this.state.signup_email}<br/>
                                Contact Number: {this.state.signup_number}<br/>
                            
                            </Card.Text>
                            <br/>
                            <center>
                        <AddImage/> 
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
                            <div className="row">
                                <div className="col-md-6">
                                    <Button variant="dark" type="submit"  value="Update">
                                        Update
                                    </Button>
                                </div>
                                <div className="col-md-6">
                                    <Delete/>
                                </div>
                            </div>
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

export default connect(mapStateToProps,null)(ServiceProviderAccount);