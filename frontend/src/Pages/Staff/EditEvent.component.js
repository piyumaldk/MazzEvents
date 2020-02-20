import React, { Component } from 'react';
import axios from 'axios';
import LeftStaff from "../../Components/LeftStaff.component";
import Upper from "../../Components/Upper.component";
import { Button } from 'react-bootstrap';

 class EditEvent extends Component {

    constructor(props) {
        super(props);
        this.deleteUser = this.deleteUser.bind(this);

        this.onChangeEventName = this.onChangeEventName.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            eventName: '',
            location: '',
            time: '',
            link: '',
            event_completed: false,
            _id: ''
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:4000/events/'+this.props.match.params.id)
            
            .then(response => {
                this.setState({
                    //profile_data: response.data,
                    eventName: response.data.eventName,
                    location: response.data.location,
                    time: response.data.time,
                    link: response.data.link,
                    event_completed: response.data.event_completed,
                    _id: response.data._id
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    onChangeEventName(e) {
        this.setState({
            eventName: e.target.value
        });
    }
    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        });
    }
    onChangeTime(e) {
        this.setState({
            time: e.target.value
        });
    }
    onChangeLink(e) {
        this.setState({
            link: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            _id: this.state._id,
            eventName: this.state.eventName,
            location: this.state.location,
            time: this.state.time,
            link: this.state.link,
            event_completed: this.state.event_completed
        };
        axios.post('http://localhost:4000/events/updateevent/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/staff/eventlist');
        window.location.reload();
    }

    deleteUser(e) {
        e.preventDefault();
        alert("Are you sure?");
        var id = this.props.match.params.id;
        //console.log(id);
        axios.delete('http://localhost:4000/events/removeevent/' + id, {})
            .then(res => console.log(res));

        this.props.history.push('/staff/eventlist');
        window.location.reload();
    }

    render() {
        console.log(this.props.match.params.id);
        
        return (
            <div>
                <LeftStaff />
                <div class="right">
                    <Upper />
                    <div className="frm">
                        <div className="txt">
                            <h3 >Edit the event</h3>
                        </div>

                        <form onSubmit={this.onSubmit} >

                            <div className="form-group">
                                <label>Event Name</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.eventName}
                                    onChange={this.onChangeEventName}
                                />
                            </div>
                            <div className="form-group">
                                <label>Event Location</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.location}
                                    onChange={this.onChangeLocation}
                                />
                            </div>
                            <div className="form-group">
                                <label>Time</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.time}
                                    onChange={this.onChangeTime}
                                />
                            </div>
                            <div className="form-group">
                                <label>Link</label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.link}
                                    onChange={this.onChangeLink}
                                />
                            </div>
                            
                            <div className="form-group">
                                <br />
                                <input type="submit" value="Update the Event" className="btn btn-primary" />
                            </div>
                            

                        </form>
                            <div>
                                <Button onClick={this.deleteUser}>Delete</Button>
                            </div>

                    </div>

                </div>


            </div>

        )
    }
}
export default (EditEvent);