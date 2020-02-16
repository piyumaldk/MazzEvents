import React, {Component} from 'react';
import axios from 'axios';
import Upper from "../../Components/Upper.component";
import { connect } from 'react-redux';
import LeftServiceProvider from "../../Components/LeftServiceProvider.component";
class Respond extends Component {

    constructor(props) {
        super(props);

        this.state = {
            signup_firstName: '',
            signup_lastName: '',
            signup_email: '',
            name: '',
            subject: '',
            text: '',
            spId: '',
            customerId: '',
            customerEmail: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/request/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    profile_data: response.data,
                    signup_firstName: response.data.signup_firstName,
                    signup_lastName: response.data.signup_lastName,
                    signup_email: response.data.signup_email,
                    name: response.data.name,
                    subject: response.data.subject,
                    text: response.data.text,
                    spId: response.data.spId,
                    customerId: response.data.customerId,
                    customerEmail: response.data.customerEmail
                })  
                console.log(response.data.spId);
                console.log(response.data.customerId);    
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <LeftServiceProvider/>
                <div className="right">
                    <Upper/>
                    <div>
                    
                    {this.state.customerEmail}

                    {this.props.email}
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

export default connect(mapStateToProps,null)(Respond);