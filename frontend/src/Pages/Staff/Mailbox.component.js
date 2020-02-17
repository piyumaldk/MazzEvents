import React, { Component } from 'react';
import { connect } from 'react-redux';
import Upper from "../../Components/Upper.component";
import LeftStaff from "../../Components/LeftStaff.component";
import { Table, Nav, Form, Col, Button, Modal, Alert, Card } from 'react-bootstrap';


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
    window.location.reload();
    alert("Sent successfully")
  }

  render() {
    const { email } = this.state;
    const spacer = {
      margin: 10
    }
    const textArea = {
      borderRadius: 8
    }
    return (
      <div>
        <LeftStaff/>
          <div className="right">
            <div className="background"> 
              <Upper/>
          <div className="centerMail">
              <Card style={{ width: '55rem' }}>
                <Card.Body>
                  <div style={{ marginTop: 10 }} >
                    <h2> Send Email </h2>
                      <form>
                        <label> Recipient </label>
                        <br />
                        <input value={email.recipient} style={{ width: 800 }} className="bodr"
                          onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })} />
                        <div style={spacer} />
                        <label> Subject </label>
                        <br />
                        <input value={email.subject} style={{ width: 800 }} className="bodr"
                          onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                        <div style={spacer} />
                        <label> Message </label>
                        <br />
                        <textarea rows={3} value={email.text} style={textArea} style={{ width: 800 }}
                          onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
                      </form>
                    <div style={spacer} />
                    <Button onClick={this.sendEmail}> Send Email </Button>
                  </div>
                </Card.Body>
              </Card>
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

export default connect(mapStateToProps, null)(StaffMailbox);
