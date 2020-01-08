import axios from 'axios';
import { returnErrors } from './errorActions';
import {ADDING_SUCCESS} from "./types";
 


export const Photographer_Action = ({ Name, Email, Phone_number, City, Website, Fackbook_link}) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    //Request body
    const body = JSON.stringify({ Name, Email, Phone_number, City, Website, Fackbook_link });
    
    axios.post('/mazzevents/Add_Photographers', body, config)
        .then(res => dispatch({
            type: ADDING_SUCCESS
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        });
};

//Add DJ
export const djAction = ({ Name, Email, Phone_number, City, Website, Fackbook_link }) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    //Request body
    const body = JSON.stringify({ Name, Email, Phone_number, City, Website, Fackbook_link });
    
    axios.post('/mazzevents/adddj', body, config)
        .then(res => dispatch({
            type: ADDING_SUCCESS
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        });
};



export const Vehicle_Action = ({ Name, Email, Phone_number, City, Website, Brand, Type}) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    //Request body
    const body = JSON.stringify({ Name, Email, Phone_number, City, Website, Brand, Type });
    
    axios.post('/mazzevents/Add_vehicles', body, config)
        .then(res => dispatch({
            type: ADDING_SUCCESS
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        });
};

export const Music_Action = ({ Name, Email, Phone_number, City, Website, Fackbook_link, Youtube_link}) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    //Request body
    const body = JSON.stringify({ Name, Email, Phone_number, City, Website, Fackbook_link, Youtube_link });
    
    axios.post('/mazzevents/Add_Music', body, config)
        .then(res => dispatch({
            type: ADDING_SUCCESS
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        });
};

export const Flower_Action = ({ Name, Email, Phone_number, City, Website, Fackbook_link}) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    //Request body
    const body = JSON.stringify({ Name, Email, Phone_number, City, Website, Fackbook_link });
    
    axios.post('/mazzevents/Add_Flower', body, config)
        .then(res => dispatch({
            type: ADDING_SUCCESS
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        });
};

