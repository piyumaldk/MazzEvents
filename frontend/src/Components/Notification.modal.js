import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Card, CardDeck } from 'react-bootstrap';

import {
    Input,
    Label,
    Button,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';


const Notifications = props => (
    <div>
        <br />
        <Card border="primary" text="black" style={{ width: '100%', borderRadius: '8',margin:'auto' }}>
            <center>
                <Card.Header>
                    <p className="Not_Head">{props.notifications.topic}</p>
                    <p className="Not_date">{props.notifications.time}</p>
                </Card.Header>
                <Card.Body>
                    <p className="Not_detail" >
                        {props.notifications.detail}
                    </p>
                </Card.Body>
            </center>
        </Card>
    </div>
)

class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = { notifi: [] };
    }

    componentDidMount() {

        axios.get('http://localhost:4000/notifications')
            .then(response => {
                this.setState({ notifi: response.data });
                console.log(this.state.notifi);
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    toggle = () => {
        //Clear messages
        this.setState({
            modal: !this.state.modal,

        });
    };

    UserList2() {
        return this.state.notifi.map(function (currentNotifications, i) {
            return <Notifications notifications={currentNotifications} key={i}
            />;
        })
    }

    render() {
        return (
            <div>
                <Button className="btn btn-dark" onClick={this.toggle} href="#">
                    Notification
            </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}></ModalHeader>
                    <ModalBody>

                        <div >
                            <center><h3><b>Notifications</b></h3></center>

                            <div >
                                <div className="container-fluid">

                                    <CardDeck>
                                        {this.UserList2()}

                                    </CardDeck>
                                </div>
                            </div>

                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}



export default (Notification);