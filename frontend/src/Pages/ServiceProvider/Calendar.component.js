import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';
import axios from 'axios';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import Upper from "../../Components/Upper.component";

class Calendar extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            date: null,
            unavailableDates:[],
            loading:true
        }
    }

    componentDidMount(){
        this.getUnavailableDates();
    }

    getUnavailableDates = () => {
        var token = this.props.id;
        axios.get('http://localhost:4000/calendar/'+token)
        .then(response => {
            console.log(response.data.profile_data.unavailableDates);
            this.setUnavailableDates(response.data.profile_data.UnavailableDates);
        })
    }
    
    setUnavailableDates=(dates)=>{
        dates.map(date => {
            this.state.unavailableDates.push({
                id:dates.indexOf(date),
                title: 'Unavailable', 
                start: date, 
                allDay: true,
                color: 'red'  
            })
        })

        this.setState({
            loading:false
        })
    }

    openDateModal = () => {
        this.setState({
            visible: true
        });
    }

    closeDateModal = () => {
        this.setState({
            visible: false,
        });
    }

    dateClick = (date) => {
        console.log(date.dateStr)
        if (new Date(date.dateStr).getTime() >= Date.now()) {
            this.openDateModal();
        }
        this.setState({
            date: date.dateStr
        })       
    }

    addUnavailableDates = () => {
        const dateobj = {
            date: this.state.date,
        };
        const headers = {
            'Content-Type': 'application/json'
        }
        var token = this.props.id;
        console.log(dateobj);
        axios.post('http://localhost:4000/calendar/addcalendar/'+token, dateobj, { headers: headers })
            .then(response => {
                this.closeDateModal();
                window.location.reload();
            }
        )
    }

    render() {
        if (this.state.loading){
            return(
                <p>Loading</p>
            )
        }
        return (
            <div>
                <LeftSeriveProvider/>
                <div className="right">
                    <Upper/>
                    <div class="container-fluid">
                        <div className="row">
                        <center>
                            <h2>Set unavailable dates<br/>on</h2>
                            <div className="col-7">
                            
                                
                                <FullCalendar
                                    defaultView="dayGridMonth"
                                    plugins={[dayGridPlugin, interactionPlugin]}
                                    header={{
                                        left: "prev,next today",
                                        center: "title",
                                    }}
                                    events={this.state.unavailableDates}
                                    dateClick={this.dateClick}
                                    defaultAllDayEventDuration={{'days':1}}
                                />
                                
                                <Modal visible={this.state.visible} width="25%" height="20%" effect="fadeInUp" onClickAway={() => this.closeDateModal()}>
                                    <div class="modal-content">
                                        <div className="modal-header"><h4 align="center"><i ></i>Change availabilty</h4></div>
                                        <center><div className="modal-footer"><Button  type="submit" onClick={() => this.addUnavailableDates()}>Set as unavailable</Button> </div></center>
                                    </div>   
                                </Modal>
                            </div>
                            </center>
                            
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

export default connect(mapStateToProps,null)(Calendar);