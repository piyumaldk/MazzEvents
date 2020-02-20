import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";
import Upper from "../../Components/Upper.component";
import axios from 'axios';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';
import { Button, Card, Form, Col } from 'react-bootstrap';
import company from '../../Images/Profile/company.png';
import normal from '../../Images/Profile/normal.png';
import { Input } from 'reactstrap';
import Message from "../../Components/Message.component";
import CommentSection from "./Comment.component";
import '../../Components/Cads/card-style.css';

class More extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);

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
            comment: '',
            signup_completed: false
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/mazzevents/' + this.props.match.params.id)
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
                localStorage.setItem("spEmail", this.state.signup_email);
                localStorage.setItem("spId", this.props.match.params.id);
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeSubject(e) {
        this.setState({
            subject: e.target.value
        });
    }
    onChangeText(e) {
        this.setState({
            text: e.target.value
        });
    }

    onChangeComment(e) {
        this.setState({
            comment: e.target.value
        });
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
        const data = {
            customerId: this.props.id,
            customerFName: this.props.fName,
            customerLName: this.props.lName,
            customerEmail: this.props.email,
            spId: this.props.match.params.id,
            rating: nextValue
        }

        axios.post('http://localhost:4000/rating/checkrating', data)
            .then(res => {
                if (res.data.success) {
                    //thibboth
                    console.log("Thiyenawa");
                    axios.post('http://localhost:4000/rating/addrating', data)
                        .then(res => {
                            console.log(res.data)
                        });
                    const sumRate = this.state.sumRate + nextValue - res.data.response_body.rate;
                    const rateTime = this.state.rateTime;
                    const rate = sumRate/rateTime;

                    const data2 = {
                        spId: this.props.match.params.id,
                        sumRate: sumRate,
                        rateTime: rateTime,
                        rate: rate
                    }
                    axios.post('http://localhost:4000/rating/addrating2', data2)
                        .then(res => {
                            console.log(res.data)
                        });
                    console.log(sumRate);
                    console.log(rateTime);
                    //thibboth
                }
                else {
                    //Na
                    console.log("Na");
                    axios.post('http://localhost:4000/rating/addrating', data)
                        .then(res => {
                            console.log(res.data)
                        });
                    const sumRate = this.state.sumRate + nextValue;
                    const rateTime = this.state.rateTime + 1;
                    const rate = sumRate/rateTime;

                    const data2 = {
                        spId: this.props.match.params.id,
                        sumRate: sumRate,
                        rateTime: rateTime,
                        rate: rate
                    }
                    axios.post('http://localhost:4000/rating/addrating2', data2)
                        .then(res => {
                            console.log(res.data)
                        });
                    console.log(sumRate);
                    console.log(rateTime);
                }
            })
        //window.location.reload();
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            customerId: this.props.id,
            customerFName: this.props.fName,
            customerLName: this.props.lName,
            customerEmail: this.props.email,
            spId: this.props.match.params.id,
            name: this.state.name,
            subject: this.state.subject,
            text: this.state.text,
            
        };
        
        axios.post('http://localhost:4000/request/addrequest/', obj)
            .then(res => console.log(res.data));

        
    }

    onClick(e) {
        
        const data = {
            customerId: this.props.id,
            customerFName: this.props.fName,
            customerLName: this.props.lName,
            customerEmail: this.props.email,
            spId: this.props.match.params.id,
            comment: this.state.comment
        }
        
        axios.post('http://localhost:4000/comment/addcomment', data)
            .then(res => {
                console.log(res.data)
            });
        window.location.reload();
    }
    render() {
        const { rating } = this.state;
        return (
            <div>
                <LeftCustomer />
                
                <div className="right ">
                    <Upper/>
                    <div className="background"> 
                        <div className="row card_ss">
                            <div className="col-md-4">
                                {/* <div className="cardwdth"> */}

                                <Card style={{  width:'24rem', height: '27rem' }}>
                                    <div className="overflow">
                                        <Card.Img variant="top" height="240" src={!this.state.businessPic ? company : this.state.businessPic} />
                                    </div>
                                    <Card.Body>
                                        <center><Card.Title>{this.state.signup_company}</Card.Title></center>
                                        <Card.Text>
                                            Email : {this.state.signup_email}<br />
                                            Location : {this.state.signup_city}<br />
                                            {/* Text : {this.state.signup_text}<br /> */}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                {/* </div> */}
                                <br />
                            </div>


                            <div className="col-md-4">
                                <div className="flip-box1 ">
                                    <div className="flip-box-inner1 ">
                                        <div className="flip-box-front1 ">
                                        {/* <div className="cardwdth"> */}
                                            <Card style={{  width:'24rem', height: '27rem' }}>
                                                <div className="overflow">
                                                    <Card.Img variant="top" height="240" src={!this.state.profilePic ? normal : this.state.profilePic} />
                                                </div>
                                                <Card.Body>
                                                    <center><Card.Title>{this.state.signup_firstName} {this.state.signup_lastName}</Card.Title></center>
                                                    <Card.Text>
                                                        Contact Number : {this.state.signup_number}<br />
                                                        Address 1 : {this.state.signup_address}<br />
                                                        Address 2: {this.state.signup_address2}<br />
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                            {/* </div> */}
                                        </div>
                                        <div class="flip-box-back1">
                                            <center>
                                                <Card.Header>
                                                    <b>Text</b>
                                                </Card.Header>
                                            </center>
                                            <Card.Text>{this.state.signup_text}
                                            </Card.Text>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            

                            <div className="col-md-4">
                                <center>
                                    <h1>
                                        <StarRatingComponent
                                            name="rate1"
                                            starCount={5}
                                            value={rating}
                                            onStarClick={this.onStarClick.bind(this)}
                                        />
                                    </h1>
                                </center><br />

                                <center><h3>Request</h3></center>
                                <Form onSubmit={this.onSubmit}>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridFirstName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" className="form-control" onChange={this.onChangeName} />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridLastName">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control type="textfield" className="form-control" onChange={this.onChangeSubject} />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Text</Form.Label>
                                            <Input type="textarea" name="signup_text" id="signup_text" placeholder="text" className="mb-3" onChange={this.onChangeText} />
                                        </Form.Group>
                                    </Form.Row>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Button disabled={!this.state.name || !this.state.subject || !this.state.text} variant="dark" type="submit" value="Update">
                                                Send Request
                                            </Button>
                                        </div>
                                        <div className="col-md-6">
                                            <Message />
                                        </div>

                                    </div>

                                </Form><br />
                                <Input type="textarea" name="comment" id="comment" placeholder="Comment" className="mb-3" onChange={this.onChangeComment} />
                                <div className="row">
                                    <div className="col-md-6">
                                        <Button disabled={!this.state.comment} onClick={this.onClick} variant="dark">Comment on him</Button>
                                    </div>

                                    <div className="col-md-6">
                                        <Button href="http://localhost:3000/customer/calendar" variant="dark">Check Availability</Button>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div>
                        <br/><br/><br/><br/>
                        <CommentSection />
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

export default connect(mapStateToProps, null)(More);