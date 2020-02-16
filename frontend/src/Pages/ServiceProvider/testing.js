import React, { Component } from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import listPlugin from 'fullcalendar/ListView'
import interactionPlugin from "@fullcalendar/interaction";
// import bootstrapPlugin from '@fullcalendar/bootstrap'
import { Button } from 'react-bootstrap';

import { connect } from 'react-redux';

import Modal from 'react-awesome-modal';
//import ProfileNavbar from '../ProfileNavbar'
import axios from 'axios';

class NurseCalendar extends Component {

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
        console.log("----------------dedde")
        var token = this.props.id;
        axios.get('http://localhost:4000/user/userdata/unavailableDates/'+token)
        .then(response => {
            console.log(response.data.profile_data.unavailableDates);
            this.setUnavailableDates(response.data.profile_data.unavailableDates);
        })
    }

        
    setUnavailableDates=(dates)=>{
        dates.map(date => {
           
            this.state.unavailableDates.push({
                id:dates.indexOf(date),
                title: 'Unavailable', // a property!
                start: date, // a property!
                allDay: true,
                color: 'red'// a property! ** see important note below about 'end' **
                
            })
                console.log(this.state.unavailableDates)
        })

        this.setState({
            loading:false
        })

        console.log(this.state.unavailableDates)
        
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
        console.log('-----------------------')
        // console.log(Date.now())
        console.log(date.dateStr)

        if (new Date(date.dateStr).getTime() >= Date.now()) {
            //console.log(date)
            this.openDateModal();
        }

        this.setState({
            date: date.dateStr

        })

        //  alert('Clicked on: ' + this.state.date)        
    }

    addUnavailableDates = () => {

        // e.preventDefault();

        const dateobj = {
            date: this.state.date,
        };
        const headers = {
            'Content-Type': 'application/json'
        }

        var token = this.props.id;
        console.log(dateobj);

        axios.post('http://localhost:4000/user/userdata/unavailableDates/' + token, dateobj, { headers: headers })
            .then(response => {

            //     console.log(response.data.profile_data.UnavailableDates.length)
            //   console.log(response.data.profile_data.UnavailableDates[response.data.profile_data.UnavailableDates.length-1])
                this.closeDateModal();
                window.location.reload();
                })

    }

    render() {

        if (this.state.loading){
            return(
                <p>Loading</p>
            )
        }
        return (

            


            <div>
                {/* <ProfileNavbar /> */}

                <div class="container-fluid">
                    <div className="row">
                        <div className="col-4 calendarback calendarbacktext">
                            <div class="row">
                                <div class="mx-auto banner text-center">
                                    <h1 class="text-capitalize">
                                        <strong class="banner-title">Change</strong>
                                    </h1>
                                    <h1 class="text-capitalize">
                                        <strong class="banner-title">Your</strong>
                                    </h1>
                                    <h1 class="text-capitalize">
                                        <strong class="banner-title">availabilty</strong>
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-7">
                            <FullCalendar
                            defaultView="dayGridMonth"
                            plugins={[dayGridPlugin, interactionPlugin]}
                            // themeSystem={{bootstrap}}
                            header={{
                                left: "prev,next today",
                                center: "title",
                            }}
                            events={this.state.unavailableDates}
                            dateClick={this.dateClick}
                            defaultAllDayEventDuration={{'days':1}}
                            />
                            {/* Deactivate Modal*/ }
                            <Modal visible={this.state.visible} width="25%" height="20%" effect="fadeInUp" onClickAway={() => this.closeDateModal()}>
                                <div class="modal-content">
                                    <div className="modal-header"><h4 align="center"><i className="fa fa-calendar-alt mr-2"></i>Change availabilty on </h4></div>
                                    {/* <div className="modal-footer"><Button classname="btn btn-danger btn-block" type="submit" onClick={() => this.logout()}>LogOut</Button> </div> */}
                                    <center>
                                    <Button variant="btn btn-danger" type="submit" onClick={() => this.logout()}>LogOut</Button> 
                                    <input type="button" class="btn btn-danger" value="Unavailable" onClick={() => this.addUnavailableDates()} />
                                    <input type="button" class="btn btn-info" value="Cancel" onClick={() => this.closeDateModal()} />
                                    </center>
                                </div>
                                
                                
                                
                                
                            </Modal>
                        </div>
                        <div className="col-1 calendarback">

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

export default connect(mapStateToProps,null)(NurseCalendar);