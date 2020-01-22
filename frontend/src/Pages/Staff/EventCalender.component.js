import React, { Component } from 'react';
import axios from 'axios';
import LeftStaff from "../../Components/LeftStaff.component";
import Upper from "../../Components/Upper.component";

export default class StaffEventCalendar extends Component {

    constructor(props) {
        super(props);

        this.onChangeEventName = this.onChangeEventName.bind(this);
        this.onChangeLocation= this.onChangeLocation.bind(this);
        this.onChangeTime= this.onChangeTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        eventName: '',
        location: '',
        time: '',
        event_completed: false
    }

    }

    // componentDidMount() {
    //     axios.get('http://localhost:4000/mazzevents/'+this.props.match.params.id)
    //         .then(response => {
    //             this.setState({
    //                 eventName: response.data.eventName,
    //                 location: response.data.location,
    //                 time: response.data.time,
    //                 event_completed: response.data.event_completed
    //             })
    //         })
    //         .catch(function(error) {
    //             console.log(error)
    //         })
    // }

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

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            eventName: this.state.eventName, 
            location: this.state.location,
            time: this.state.time,
            event_completed: this.state.event_completed
        };

        axios.post('http://localhost:4000/mazzevents/addevent',obj)
        .then(res => console.log(res.data));

    this.props.history.push('/staff/account');
}


    render() {
        return (
            <div>
                <LeftStaff/>
                <div class="right">
                <Upper/>
                <div className="frm">
                <div className="txt">
                <h3 >Add Events</h3>
                </div>
                
                <form onSubmit={this.onSubmit} >
                    
                    <div className="form-group">
                        <label>Event Name</label>
                        <input  type="text"
                                className="form-control"
                                //value={this.state.signup_eventName}
                                onChange={this.onChangeEventName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input  type="text"
                                className="form-control"
                               // value={this.state.location}
                                onChange={this.onLocation}
                                />
                    </div>
                    <div className="form-group">
                        <label>Time</label>
                        <input  type="text"
                                className="form-control"
                                //value={this.state.time}
                                onChange={this.onTime}
                                />
                    </div>

                    <div className="form-group">
                        <br/>
                        <input type="submit" value="Add Event" className="btn btn-primary" />    
                    </div>
                   
                </form>
                </div>
                
            </div>
                
                
            </div>   
        )
    }
}