import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";
import Upper from "../../Components/Upper.component";
import axios from 'axios';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import {Button, Card, Form, Col} from 'react-bootstrap';
import company from '../../Images/Profile/company.png';
import normal from '../../Images/Profile/normal.png';
import {Input} from 'reactstrap';
import Message from "../../Components/Message.component";

import '../../Components/Cads/card-style.css';

class More extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
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
            sumRate: '',
            rateTime: '',
            rating: 1,
            name: '',
            subject: '',
            text: '',
            signup_completed: false
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/mazzevents/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    signup_firstName: response.data.signup_firstName,
                    signup_lastName: response.data.signup_lastName,
                    signup_email: response.data.signup_email,
                    signup_number: response.data.signup_number,
                    signup_address: response.data.signup_address,
                    signup_address2: response.data.signup_address2,
                    signup_city: response.data.signup_city,
                    signup_state: response.data.signup_state,
                    signup_zip: response.data.signup_zip,
                    signup_text: response.data.signup_text,
                    signup_company: response.data.signup_company,
                    businessPic: response.data.businessImg,
                    profilePic: response.data.profileImg,
                    sumRate: response.data.sumRate,
                    rateTime: response.data.rateTime,
                    signup_completed: response.data.signup_completed
                })
                console.log(this.state.signup_email);
                localStorage.setItem("spEmail",this.state.signup_email);
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }
    onChangeSubject(e){
        this.setState({
            subject: e.target.value
        });
    }
    onChangeText(e){
        this.setState({
            text: e.target.value
        });
    }

    onStarClick(nextValue, prevValue, name){
        this.setState({rating: nextValue});
        console.log(this.state.rating);
        const data = {
            customerId : this.props.id,
            customerFName : this.props.fName,
            customerLName : this.props.lName,
            customerEmail : this.props.email,
            spId : this.props.match.params.id,
            rating : nextValue
        }
        console.log(data)

        axios.post('http://localhost:4000/rating/addrating', data)
            .then(res => {
                console.log(res.data)
            }); 
        console.log(this.state.sumRate)  
        const sumRate = this.state.sumRate + nextValue;
        const rateTime = this.state.rateTime + 1;
        
        const data2 = {
            spId : this.props.match.params.id,
            sumRate : sumRate,
            rateTime : rateTime
        }
        console.log(data2)
        axios.post('http://localhost:4000/rating/addrating2', data2)
            .then(res => {
                console.log(res.data)
        }); 

    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            customerId : this.props.id,
            customerFName : this.props.fName,
            customerLName : this.props.lName,
            customerEmail : this.props.email,
            spId : this.props.match.params.id,
            name: this.state.name, 
            subject: this.state.subject,
            text: this.state.text,
            //signup_completed: this.state.signup_completed
        };
        console.log(obj);
        axios.post('http://localhost:4000/request/addrequest/', obj)
            .then(res => console.log(res.data));

        //this.props.history.push('/customer/photo');
    }
    render() {
        const { rating } = this.state;
        return (
            <div>
                
                <LeftCustomer/>
                <div className="right">
                    <Upper/>
                    <div className="background">
                    <Message/>
                        <center>
                            <h1>
                                <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    value={rating}
                                    onStarClick={this.onStarClick.bind(this)}
                                />
                            </h1>
                        </center>

            
                        <div className="rightMore">
                            <div className="moretop">
                            
                            </div>
                        </div>

                        <div className="rightmore">
                            <div className="morebottomleft">
                                <div class="cardAlignRight">     
                                    <Card style={{ width: '18rem', height:'27rem'}}>
                                    <div className="overflow">     
                                    <Card.Img variant="top" height="240" src={!this.state.businessPic ? company:this.state.businessPic} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{this.state.signup_company}</Card.Title>
                                        <Card.Text>
                                        Owner : {this.state.signup_firstName} {this.state.signup_lastName}<br/>
                                        Location : {this.state.signup_city}<br/>
                                        Address 1 : {this.state.signup_address}<br/>
                                        </Card.Text>
                                    </Card.Body>
                                    </Card>
                                </div>
                            </div>

                            <div className="morebottomright">
                                <div class="cardAlignLeft">    
                                    <Card style={{ width: '18rem', height:'27rem'}}>
                                <div className="overflow">     
                                    <Card.Img variant="top" height="240" src={!this.state.profilePic ? normal:this.state.profilePic} />
                                </div>
                                        <Card.Body>
                                            <Card.Title>{this.state.signup_firstName} {this.state.signup_lastName}</Card.Title>
                                            <Card.Text>
                                            Contact Number : {this.state.signup_number}<br/>
                                            Address 2: {this.state.signup_address2}<br/>
                                            State : {this.state.signup_state}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        {/* ddddddddddddddddddddddddddddddddddddddddddddd */}

            <h3>Request</h3>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" className="form-control" onChange={this.onChangeName}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="textfield" className="form-control" onChange={this.onChangeSubject}/>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Text</Form.Label>
                                    <Input type="textarea" name="signup_text" id="signup_text" placeholder="text" className="mb-3" onChange={this.onChangeText}/>
                                </Form.Group>
                            </Form.Row>

                            <div className="row">
                                <div className="col-md-6">
                            <Button disabled={!this.state.name || !this.state.subject || !this.state.text} variant="dark" type="submit"  value="Update">
                                Send Request
                            </Button>
                                </div>
                               
                            </div>
                          
                        </Form>
            {/* dddddddddddddddddddddddddddddddddddddddddddddd */}

            
            
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

export default connect(mapStateToProps,null)(More);