import React, {Component} from 'react';
import axios from 'axios';
import LeftCustomer from "../../Components/LeftCustomer.component";
import Upper from "../../Components/Upper.component";
import { connect } from 'react-redux';

class CustomerAccount extends Component {

    constructor(props) {
        super(props);

        this.onChangeSignupFirstName = this.onChangeSignupFirstName.bind(this);
        this.onChangeSignupLastName = this.onChangeSignupLastName.bind(this);
        this.onChangeSignupEmail = this.onChangeSignupEmail.bind(this);
        this.onChangeSignupPassword = this.onChangeSignupPassword.bind(this);
        this.onChangeSignupAPassword = this.onChangeSignupAPassword.bind(this);
        this.onChangeSignupNumber = this.onChangeSignupNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            signup_firstName: '',
            signup_lastName: '',
            signup_email: '',
            signup_password: '',
            signup_aPassword: '',
            signup_number: '',
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
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            signup_firstName: this.state.signup_firstName, 
            signup_lastName: this.state.signup_lastName,
            signup_email: this.state.signup_email,
            signup_password: this.state.signup_password,
            signup_aPassword: this.state.signup_aPassword,
            signup_number: this.state.signup_number,
            signup_completed: this.state.signup_completed
        };
        
        axios.post('http://localhost:4000/mazzevents/updatecustomer/'+this.props.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/customer/photo');
    }
    
    render() {
        return (
            <div>
                <LeftCustomer/>
                <div class="right">
                <Upper/>
                <div>
                <h3>Update My details</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First name</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.signup_firstName}
                                onChange={this.onChangeSignupFirstName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Last name</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.signup_lastName}
                                onChange={this.onChangeSignupLastName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.signup_email}
                                onChange={this.onChangeSignupEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Contact Number</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.signup_number}
                                onChange={this.onChangeSignupNumber}
                                />
                    </div>

                    <div className="form-group">
                        <br/>
                        <input type="submit" value="Update" className="btn btn-primary" />    
                    </div>
                </form>
            </div>
                </div>
                
            </div>
            
        )
    }
}

const mapStateToProps = state => ({
    id: state.auth.id,
  });

  export default connect(mapStateToProps,null)(CustomerAccount);