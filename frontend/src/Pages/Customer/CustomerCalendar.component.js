import React, { Component } from 'react'
import Upper from "../../Components/Upper.component";
import LeftCustomer from "../../Components/LeftCustomer.component";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import Modal from 'react-awesome-modal';
import axios from '../../../../backend/node_modules/axios';

class CustomerCalendar extends Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            date: null,
            unavailableDates: [],
            loading: true, 
            response_dates: [],
        }
    }

    componentDidMount() {
        this.getUnavailableDates();
    }

    getUnavailableDates = () => {
        axios.get('http://localhost:4000/calendar/'+localStorage.getItem('spId'))
            .then(response => {
                console.log(response.data.profile_data.UnavailableDates)
                this.setState({
                    profile_data:response.data.profile_data,
                    sp:response.data.profile_data.FirstName,
                    sp:response.data.profile_data._id,

                    response_dates: response.data.profile_data.UnavailableDates
                })
                this.setUnavailableDates(response.data.profile_data.UnavailableDates)
            })
    }

    setUnavailableDates = (dates) => {
        dates.map(date => {

            this.state.unavailableDates.push({
                id: dates.indexOf(date),
                title: 'Unavailable', 
                start: date, 
                allDay: true,
                color: 'red',
                rendering: 'background',
                unselectAuto: true,
                editable: false
            })
            console.log(this.state.unavailableDates)
        })

        this.setState({
            loading: false
        })

        console.log(this.state.unavailableDates)

    }

    
    

    

    render() {

        if (this.state.loading) {
            return (
                <p>Loading</p>
            )
        }


        return (
            <div>
                <LeftCustomer />
                <div className="right">
                    <Upper/>
                    <div className="container">
                        <FullCalendar
                            defaultView="dayGridMonth"
                            plugins={[dayGridPlugin, interactionPlugin]}
                            
                            header={{
                                left: "prev,next today",
                                center: "title",
                            }}
                            events={this.state.unavailableDates}
                            dateClick={this.dateClick}
                            eventClick={this.eventClick}
                            defaultAllDayEventDuration={{ 'days': 1 }}
                        />
                         
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerCalendar;