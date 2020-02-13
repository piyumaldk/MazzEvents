import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";
import Upper from "../../Components/Upper.component";
import axios from 'axios';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import {Card, Button} from 'react-bootstrap';
import company from '../../Images/Profile/company.png';
import normal from '../../Images/Profile/normal.png';

class More extends Component {
    constructor(props) {
        super(props);

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
            })
            .catch(function(error) {
                console.log(error)
            })
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

        axios.post('http://localhost:4000/mazzevents/addrating', data)
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
        axios.post('http://localhost:4000/mazzevents/addrating2', data2)
            .then(res => {
                console.log(res.data)
        }); 

    }

    render() {
        const { rating } = this.state;
        return (
            <div>
                <LeftCustomer/>
                <div className="right">
                    <Upper/>
                    <div className="background">
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
                                    <Card style={{ width: '18rem' },{height:'27rem'}}>
                                    <Card.Img variant="top" height="240" src={!this.state.businessPic ? company:this.state.businessPic} />
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
                                    <Card style={{ width: '18rem' } ,{height:'27rem'}}>
                                    <Card.Img variant="top" height="240" src={!this.state.profilePic ? normal:this.state.profilePic} />
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