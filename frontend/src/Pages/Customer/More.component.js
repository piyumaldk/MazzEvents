import React, { Component } from 'react';
import LeftCustomer from "../../Components/LeftCustomer.component";
import Upper from "../../Components/Upper.component";
import axios from 'axios';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

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
            spId : this.props.match.params.id,
            rating : nextValue
        }
        console.log(data)

        axios.post('http://localhost:4000/mazzevents/addrating', data)
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
                {/*
                This is More
                My mail is {this.state.signup_email}
                Customer Id = {this.props.id}
                Service provider Id = {this.props.match.params.id}
                */}
                <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
                
                rate = {this.state.rating}
                </div>
            </div>   
        )
    }
}

// ReactDOM.render(
//      <More/>, 
//     document.getElementById('app')
// );

const mapStateToProps = state => ({
    id: state.auth.id,
    fName: state.auth.fName,
    lName: state.auth.lName,
    email: state.auth.email,
    number: state.auth.number
  });

export default connect(mapStateToProps,null)(More);