import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, Thread, Window, MessageList, MessageInput, conversation } from 'stream-chat-react';
import {
    Input,
    Label,
    Button,
    Modal,
    ModalHeader,
    ModalBody
  } from 'reactstrap';

class Message extends Component {

    constructor(props) {
        super(props);

        //this.onFileChange = this.onFileChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            // profileImg: '',
            // upload: ''
        }
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
        console.log(this.props.chatToken);
        const customeremail = this.props.email;
        var n = customeremail.indexOf("@");
        var customername = customeremail.slice(0, n);
        console.log(localStorage.getItem('spEmail'));
        
        const workeremail = localStorage.getItem('spEmail');
        var m = workeremail.indexOf("@");
        var workername = workeremail.slice(0, m);
        console.log(customeremail);
        var channelName = customername.concat('-',workername);
        console.log(channelName);

        //client.disconnect();
        client.setUser(
            {
                id: customername,
                name: customername,
                //image: props.profilePicUrl,
            },
            userToken,
        );

        const conversation = client.channel('messaging', channelName, {
            name: channelName,
           // image: 'http://bit.ly/2O35mws',
            members: [customername, workername]
        });

        return (
<div>
<Button className="btn btn-dark" onClick={this.toggle} >
                Message
            </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>{this.props.spEmail}</ModalHeader>
          <ModalBody>
          <div className="container">
                <div className="row">
                chatWindow = <Chat client={client} theme={'messaging light'}>
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
            </div>
          </ModalBody>
          </Modal>
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
    spEmail: state.spEmail
});

export default connect(mapStateToProps,null)(Message);