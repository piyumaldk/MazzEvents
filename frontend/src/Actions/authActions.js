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
    ADDING_SUCCESS
    } from "./types";
    
//Check token & load Customer: Any
export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({ type: USER_LOADING});

    axios.get('/', tokenConfig(getState))
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
//Register Customer :Customer
export const register = ({ signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_number, signup_location}) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    //Request body
    const body = JSON.stringify({ signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_number, signup_location});

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
};

//Register Customer:Service Provider
export const register2 = ({ signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_category, signup_number, signup_address, signup_text, signup_daymax, signup_nightmax, signup_company, signup_address2, signup_city, signup_state, signup_zip,signup_package1name,signup_package1text,signup_package1price,signup_max1,signup_package2name,signup_package2text,signup_package2price,signup_max2,signup_package3name,signup_package3text,signup_package3price,signup_max3,sumRate, rateTime }) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    //Request body
    const body = JSON.stringify({ signup_type, signup_firstName, signup_lastName, signup_email, signup_password, signup_aPassword, signup_category, signup_number, signup_address, signup_text, signup_daymax, signup_nightmax, signup_company, signup_address2, signup_city, signup_state, signup_zip,signup_package1name,signup_package1text,signup_package1price,signup_max1,signup_package2name,signup_package2text,signup_package2price,signup_max2,signup_package3name,signup_package3text,signup_package3price,signup_max3,sumRate, rateTime });
    
    axios.post('/mazzevents/addcustomer', body, config)
        .then(res => dispatch({
            type: ADDING_SUCCESS
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        });
};

//Login Customer: Any
export const login = ({ signup_email, signup_password }) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    //Request body
    const body = JSON.stringify({ signup_email, signup_password });
  
    axios.post('/mazzevents/auth', body, config)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            });
        });
};

//Logout Customer : Any
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

//Setup config/headers and token
export const tokenConfig = getState => {
    //Get token from localstorage
    const token = getState().auth.token;
    //Headers
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };
    //If token, add to header
    if(token) {
        config.headers['x-auth-token'] = token;
    }
    return config;
};