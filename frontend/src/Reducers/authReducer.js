import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
  } from '../Actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    chatToken: localStorage.getItem('chatToken'),
    isAuthenticated: null,
    isLoading: false,
    id: null,
    type: null,
    fName: null,
    lName: null,
    email: null,
    number: null,
    location: null,
    address: null,
    address2: null,
    city: null,
    state: null,
    zip: null,
    spId: null,
    spEmail: null
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
          isAuthenticated: state.chatToken !== null,
          isLoading: false,
          type: localStorage.getItem('type'),
          id: localStorage.getItem('id'),
          fName: localStorage.getItem('fName'),
          lName: localStorage.getItem('lName'),
          email: localStorage.getItem('email'),
          number: localStorage.getItem('number'),
          location: localStorage.getItem('location'),
          address: localStorage.getItem('address'),
          address2: localStorage.getItem('address2'),
          city: localStorage.getItem('city'),
          state: localStorage.getItem('state'),
          zip: localStorage.getItem('zip'),
          spId: null,
          spEmail: null

        };
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('chatToken', action.payload.chatToken);
        localStorage.setItem('id', action.payload.signupcustomer.id);
        localStorage.setItem('type', action.payload.signupcustomer.type);
        localStorage.setItem('email', action.payload.signupcustomer.email);
        localStorage.setItem('fName', action.payload.signupcustomer.firstName);
        localStorage.setItem('lName', action.payload.signupcustomer.lastName);
        localStorage.setItem('location', action.payload.signupcustomer.location);
        localStorage.setItem('number', action.payload.signupcustomer.number);
        localStorage.setItem('address', action.payload.signupcustomer.address);
        localStorage.setItem('address2', action.payload.signupcustomer.address2);
        localStorage.setItem('city', action.payload.signupcustomer.city);
        localStorage.setItem('state', action.payload.signupcustomer.state);
        localStorage.setItem('zip', action.payload.signupcustomer.zip);
        localStorage.setItem('spId', action.payload.signupcustomer.zip);
        localStorage.setItem('spEmail', action.payload.signupcustomer.zip);
        console.log(action.payload);
        return {
          ...state,
          token: action.payload.token,
          chatToken: action.payload.chatToken,
          isAuthenticated: true,
          isLoading: false,
          id: action.payload.signupcustomer.id,
          type: action.payload.signupcustomer.type,
          fName: action.payload.signupcustomer.firstName,
          lName: action.payload.signupcustomer.lastName,
          email: action.payload.signupcustomer.email,
          number: action.payload.signupcustomer.number,
          location: action.payload.signupcustomer.location,
          address: action.payload.signupcustomer.address,
          address2: action.payload.signupcustomer.address2,
          city: action.payload.signupcustomer.city,
          state: action.payload.signupcustomer.state,
          zip: action.payload.signupcustomer.zip,
          spId: action.payload.signupcustomer.zip,
          spEmail: action.payload.signupcustomer.zip,
        };
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
          localStorage.removeItem('id');
          localStorage.removeItem('type');
          localStorage.removeItem('token');
          localStorage.removeItem('chatToken');
          localStorage.removeItem('email');
          localStorage.removeItem('fName');
          localStorage.removeItem('lName');
          localStorage.removeItem('location');
          localStorage.removeItem('number');
          localStorage.removeItem('address');
          localStorage.removeItem('address2');
          localStorage.removeItem('city');
          localStorage.removeItem('state');
          localStorage.removeItem('zip');
          localStorage.removeItem('spId');
          localStorage.removeItem('spEmail');
          return {
            id: null,
            type: null,
            token: null,
            chatToken: null,
            isAuthenticated: false,
            isLoading: false,
            fName: null,
            lName: null,
            email: null,
            number: null,
            location: null,
            address: null,
            address2: null,
            city: null,
            state: null,
            zip: null,
            spId: null,
            spEmail: null
          }
          // case SET_SP:
          //   localStorage.setItem('spId', bla);
          //   localStorage.setItem('spEmail', bla);
          //   return {
          //     spId: bla,
          //     spEmail: bla
          //   };
      case REGISTER_FAIL:
        localStorage.removeItem('id');
        localStorage.removeItem('type');
        localStorage.removeItem('token');
        localStorage.removeItem('chatToken');
        localStorage.removeItem('email');
        localStorage.removeItem('fName');
        localStorage.removeItem('lName');
        localStorage.removeItem('location');
        localStorage.removeItem('number');
        localStorage.removeItem('address');
        localStorage.removeItem('address2');
        localStorage.removeItem('city');
        localStorage.removeItem('state');
        localStorage.removeItem('zip');
        localStorage.removeItem('spId');
        localStorage.removeItem('spEmail');
        return {
          ...state,
          token: null,
          chatToken: null,
          user: null,
          isAuthenticated: false,
          isLoading: false
        };
      default:
        return state;
    }
  }
  