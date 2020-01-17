import React, { Component, useState } from 'react';
// import LeftStaff from "../../Components/LeftStaff.component";
// import {Table, Nav, Form, Col, Button, Modal,Alert} from 'react-bootstrap';
import axios from 'axios';

import { connect } from 'react-redux';

class StaffMailbox extends Component {

  

    state = {
        email: {
          recipient: '',
          sender: this.props.email,
          subject: '',
          text: '',
        }
      }

      
        sendEmail = _ => {
          const { email } = this.state;
          fetch(`http://127.0.0.1:4000/send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
            .catch(err => console.error(err))

            this.props.history.push('/staff/mailbox');
        }
       
        render() {
          const { email } = this.state;
          const spacer = {
            margin: 10
          }
          const textArea = {
            borderRadius: 4
          }
          return (
            <div className="App">
              <div style={{ marginTop: 10 }} >
                <h2> Send Email </h2>
                <label> Recipient </label>
                <br />
                <input value={email.recipient}
                  onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })} />
                <div style={spacer} />
                <label> Subject </label>
                <br />
                <input value={email.subject}
                  onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                <div style={spacer} />
                <label> Message </label>
                <br />
                <textarea rows={3} value={email.text} style={textArea}
                  onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
                <div style={spacer} />
                <button onClick={this.sendEmail}> Send Email </button>
              </div>
            </div>
          );
        }
      }
      
      const mapStateToProps = state => ({
        id: state.auth.id,
        fName: state.auth.fName,
        lName: state.auth.lName,
        email: state.auth.email,
        number: state.auth.number
    });
    
    export default connect(mapStateToProps, null)(StaffMailbox);
   