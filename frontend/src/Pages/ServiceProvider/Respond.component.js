import React, {Component} from 'react';
import axios from 'axios';
import Upper from "../../Components/Upper.component";
import { connect } from 'react-redux';
import LeftServiceProvider from "../../Components/LeftServiceProvider.component";
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, Thread, Window, MessageList, MessageInput} from 'stream-chat-react';
import {
    Input,
    Label,
    Button,
    Modal,
    ModalHeader,
    ModalBody
  } from 'reactstrap';
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
                    name: response.data.name,
                    subject: response.data.subject,
                    text: response.data.text,
                    spId: response.data.spId,
                    customerId: response.data.customerId,
                    customerEmail: response.data.customerEmail,
                    customerFName:response.data.customerFName,
                    customerLName:response.data.customerLName,
                })  
                console.log(response.data.spId);
                console.log(response.data.customerId);    
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    toggle = () => {
        //Clear messages
        this.setState({
          modal: !this.state.modal,
        });
        if(this.state.modal){
            window.location.reload();
        }
        //this.props.history.push('/customer/chat');
    };

    render() {

        const client = new StreamChat("rc877bcxcrne");
        const userToken = this.props.chatToken;
        const workeremail = this.props.email;
        var m = workeremail.indexOf("@");
        var workername = workeremail.slice(0, m);
        
        
        
        const customeremail = this.state.customerEmail;
        var n = customeremail.indexOf("@");
        var customername = customeremail.slice(0, n);
        
        var channelName = workername.concat('-',customername);
        
        

        
        client.setUser(
            {
                id: workername,
                name: workername,
            },
            userToken,
        );

        const conversation = client.channel('messaging', channelName, {
            name: channelName,
           
            members: [workername, customername]
        });
        return (
            <div>
                <LeftServiceProvider/>
                <div className="right">
                    <Upper/>
                    {this.state.customerEmail}
                    {this.state.customerFName}
                    <div>
                    <Button className="btn btn-dark" onClick={this.toggle} >
                        Response Message
                    </Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{this.props.spEmail}</ModalHeader>
                        <ModalBody>
                        <div>
                                
                                <Chat client={client} theme={'messaging light'}>
                                        <Channel channel={conversation}>
                                            <Window>
                                            <ChannelHeader />
                                            <MessageList />
                                            <MessageInput />
                                            </Window>
                                            <Thread />
                                        </Channel>
                                    </Chat>
                                
                            </div>
                        </ModalBody>
                    </Modal>
                    
                    
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
    number: state.auth.number,
    token: state.auth.token,
    chatToken: state.auth.chatToken,
  });

export default connect(mapStateToProps,null)(Respond);