import React, {Component} from 'react';
import axios from 'axios';
import Upper from "../../Components/Upper.component";
import { connect } from 'react-redux';
import LeftServiceProvider from "../../Components/LeftServiceProvider.component";
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, Thread, Window, MessageList, MessageInput, conversation } from 'stream-chat-react';
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
            serviceproviderId: '',
            serviceproviderEmail: ''
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
                    serviceproviderId: response.data.serviceproviderId,
                    serviceproviderEmail: response.data.serviceproviderEmail
                })  
                console.log(response.data.spId);
                console.log(response.data.serviceproviderId);    
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    render() {
        const client = new StreamChat("rc877bcxcrne");
        const userToken = this.props.chatToken;
       
        const serviceprovideremail = this.props.email;
        var n = serviceprovideremail.indexOf("@");
        var serviceprovidername = serviceprovideremail.slice(0, n);
        
        
        const customeremail = this.state.serviceproviderEmail;
        var m = customeremail.indexOf("@");
        var customername = customeremail.slice(0, m);
        
        var channelName = customername;
        

        //client.disconnect();
        client.setUser(
            {
                id: serviceprovidername,
                name: serviceprovidername,
                //image: props.profilePicUrl,
            },
            userToken,
        );

        const conversation = client.channel('messaging', channelName, {
            name: channelName,
           // image: 'http://bit.ly/2O35mws',
            members: [serviceprovidername, customername]
        });

        return (
            <div>
                <LeftServiceProvider/>
                <div className="right">
                    <Upper/>
                    <div>
                    
                    
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