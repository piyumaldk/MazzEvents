import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import LeftStaff from "../../Components/LeftStaff.component";
import Upper from "../../Components/Upper.component";
import { Link } from 'react-router-dom';
import { Button, Card, CardDeck } from 'react-bootstrap';
//import SignUpFlowers from '../../Components/Auth/RegisterFlowersModal';

const Events = props => (

    <div className="col-md-3 ">
        <br /><br/>
        <div className="flip-box ">
            <div className="flip-box-inner ">
                <div className="flip-box-front ">
                    <Card bg="dark" text="black" style={{ width: '100%', height: '25rem', borderRadius: '8' }}>
                        {/* <Card.Img variant="top" height="240" src={company} /> */}
                        <center><Card.Header><b>{props.events.eventName}</b></Card.Header>
                            <Card.Body>
                                {/* <Card.Title></Card.Title> */}
                                <Card.Text >
                                    Event Name:{props.events.eventName}<br />
                                    Location:{props.events.location}<br />
                                    Time:{props.events.time}<br />
                                    <br />
                                </Card.Text>
                                <center><Button variant="light" href={props.events.link}>Learn More</Button></center>
                                <Link to={"/staff/editevent/"+props.events._id}>Edit</Link>
                            </Card.Body></center>
                    </Card>
                </div>
            </div>
        </div>
    </div>
)



export default class EventList extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/events')
            .then(response => {
                this.setState({ users: response.data });
                console.log(this.state.users);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    UserList1() {
        return this.state.users.map(function (currentEvents, i) {
            return <Events events={currentEvents} key={i} />;
        })
    }

    render() {

        
        return (
            <div>
                <LeftStaff/>
                <div className="right">
                    <Upper/>

                    <div>
                    <h3>List of Published Events</h3>
                    <div>
                        <div className="container-fluid">

                            <CardDeck>
                                {this.UserList1()}

                            </CardDeck>
                        </div>
                    </div>
                    </div>

                </div>
            </div>   
        )
    }
}


