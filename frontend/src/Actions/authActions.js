import axios from 'axios';
import { returnErrors } from './errorActions';

import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    GET_ERRORS,
    CLEAR_ERRORS
    } from "./types";
    
//Check token & load user
export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({ type: USER_LOADING});

    axios.get('/mazzevents/addcustomer', tokenConfig(getState))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
}
//Register Customer
export const register = ({ signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_number, signup_location}) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    //Request body
    const body = JSON.stringify({ signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_number, signup_location});

    axios.post('/mazzevents/addcustomer', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            });
        });
}

//Setup config/headers and token
export const tokenConfig = getState => {
    //Get token from localstorage
    const token = getState().auth.token;
    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    //If token, add to header
    if(token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
}