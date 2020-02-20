import React, { Component } from 'react';
import axios from 'axios';
import LeftStaff from "../../Components/LeftStaff.component";
import Upper from "../../Components/Upper.component";
import{Card} from 'react-bootstrap';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LinkIcon from '@material-ui/icons/Link';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import PinDropIcon from '@material-ui/icons/PinDrop';

export default class StaffEventCalendar extends Component {

    constructor(props) {
        super(props);

        this.onChangeEventName = this.onChangeEventName.bind(this);
        this.onChangeLocation= this.onChangeLocation.bind(this);
        this.onChangeTime= this.onChangeTime.bind(this);
        this.onChangeLink= this.onChangeLink.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        eventName: '',
        location: '',
        time: '',
        link: '',
        event_completed: false
    }

    }

    onChangeEventName(e){
        this.setState({
            eventName: e.target.value
        });
    }
    onChangeLocation(e){
        this.setState({
            location: e.target.value
        });
    }
    onChangeTime(e){
        this.setState({
            time: e.target.value
        });
    }
    onChangeLink(e){
        this.setState({
            link: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            eventName: this.state.eventName, 
            location: this.state.location,
            time: this.state.time,
            link: this.state.link,
            event_completed: this.state.event_completed
        };

        axios.post('http://localhost:4000/events/addevent',obj)
        .then(res => console.log(res.data));

        window.location.reload(false);
    //this.props.history.push('/staff/account');
}


    render() {
        return (
            <div>
                <LeftStaff/>
                <div className="right">
                <div className="background">
                <Upper/>
                <div className="centerEvent">
                <div className="frm">
                <Card style={{ width: '40rem', top:'0.6rem', height:'35rem'}}>
                <div className="txt">
                <center><h3 >Add Events</h3></center>
                </div>
                
                <Card.Body>
                <center><form onSubmit={this.onSubmit} >
                    
                    <div className="form-group">
                        <label><EmojiEventsIcon/>Event Name</label>
                        <input  type="text"
                                className="form-control"
                                //value={this.state.signup_eventName}
                                onChange={this.onChangeEventName}
                                />
                    </div>
                    <div className="form-group">
                        <label><PinDropIcon />Location</label>
                        <input  type="text"
                                className="form-control"
                               // value={this.state.location}
                                onChange={this.onChangeLocation}
                                />
                    </div>
                    <div className="form-group">
                        <label><ScheduleIcon/>Time</label>
                        <input  type="text"
                                className="form-control"
                                //value={this.state.time}
                                onChange={this.onChangeTime}
                                />
                    </div>
                    <div className="form-group">
                        <label><LinkIcon/>Link</label>
                        <input  type="text"
                                className="form-control"
                                //value={this.state.time}
                                onChange={this.onChangeLink}
                                />
                    </div>
                    <div className="form-group">
                        <br/>
                        <center><input type="submit" value="Add Event" className="btn btn-dark"/></center>   
                    </div>
                   
                </form></center>
                </Card.Body>
                </Card>

                </div>
                </div>
                </div>
            </div>
                
                
            </div>   
        )
    }
}