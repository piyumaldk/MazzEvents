import React, { Component } from 'react';
import LeftStaff from "../../Components/LeftStaff.component";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class StaffMaps extends Component {
    render() {
        return (
            <div>
                <LeftStaff/>
                <Map
                    google={this.props.google}
                    zoom={8}
                   
                    initialCenter={{ lat: 6.927079, lng: 79.861244 }}
                />
                
            </div>   
        )
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCrcGjAE9YcTLCA-BgiofQ5N_U4HWC5xNk")
})(StaffMaps)


