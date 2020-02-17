import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Card, CardDeck} from 'react-bootstrap';

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
        <br/><br/> 
        <Card  border="primary" text="black" style={{ width: '25rem', height:'15em', borderRadius:'8'}}>   
       <center><Card.Header><p className="Not_Head">{props.notifications.topic}</p></Card.Header>
            <Card.Body>
            {/* <Card.Title></Card.Title> */}
            <Card.Text >
                {props.notifications.time}<br/>
                {props.notifications.detail}<br/>
                <br/>
             </Card.Text>
            </Card.Body></center>
        </Card>     
    </div>
)

class Notification extends Component {

    constructor(props) {
        super(props);
        this.state = {notifi:[]};
    }

    componentDidMount() {
    
        axios.get('http://localhost:4000/notifications')
        .then(response => {
            this.setState({ notifi: response.data });
            console.log(this.state.notifi);
        })
        .catch(function (error){
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
        return this.state.notifi.map(function(currentNotifications, i){
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
                <ModalHeader toggle={this.toggle}>Notification List</ModalHeader>
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