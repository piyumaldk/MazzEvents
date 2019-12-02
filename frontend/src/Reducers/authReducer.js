import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from '../Actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    type: null,
    fName: null,
    lName: null,
    email: null,
    number: null,
    location: null

  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true
        };
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: state.token !== null,
          
          isLoading: false,
          type: localStorage.getItem('type'),
          fName: localStorage.getItem('fName'),
          lName: localStorage.getItem('lName'),
          email: localStorage.getItem('email'),
          number: localStorage.getItem('number'),
        };
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('type', action.payload.signupcustomer.type);
        localStorage.setItem('email', action.payload.signupcustomer.email);
        localStorage.setItem('fName', action.payload.signupcustomer.firstName);
        localStorage.setItem('lName', action.payload.signupcustomer.lastName);
        localStorage.setItem('location', action.payload.signupcustomer.location);
        localStorage.setItem('number', action.payload.signupcustomer.number);

        console.log(action.payload);
        return {
          ...state,
          token: action.payload.token,
          isAuthenticated: true,
          isLoading: false,
          type: action.payload.signupcustomer.type,
          fName: action.payload.signupcustomer.firstName,
          lName: action.payload.signupcustomer.lastName,
          email: action.payload.signupcustomer.email,
          number: action.payload.signupcustomer.number,
          location: action.payload.signupcustomer.location
        };
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
          localStorage.removeItem('type');
          localStorage.removeItem('token');
          localStorage.removeItem('email');
          localStorage.removeItem('fName');
          localStorage.removeItem('lName');
          localStorage.removeItem('location');
          localStorage.removeItem('number');
          return {
            type: null,
            token: null,
            isAuthenticated: false,
            isLoading: false,
            fName: null,
            lName: null,
            email: null,
            number: null,
            location: null
          }
      case REGISTER_FAIL:
        localStorage.removeItem('type');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('fName');
        localStorage.removeItem('lName');
        localStorage.removeItem('location');
        localStorage.removeItem('number');
       
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false
        };
      default:
        return state;
    }
  }
  