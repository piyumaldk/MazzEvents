import React, { Component, useState } from 'react';
import LeftSeriveProvider from "../../Components/LeftServiceProvider.component";
import Upper from "../../Components/Upper.component";
import Calendar from 'react-calendar';
import axios from 'axios';


export default class ServiceProviderEventCalendar extends Component {
    state = {
        date : null,
        unavilableDates : [],
    }
    
    setUnavailableDates=(dates)=>{
        dates.map(date=>{
           
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

    

    render() {
        return (
            <div>
                <LeftSeriveProvider/>
                <div className="right">
                <Upper/>
                <br/>
                <center>
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />

                </center>
                    

                    
                </div>
            </div>   
        )
    }
}