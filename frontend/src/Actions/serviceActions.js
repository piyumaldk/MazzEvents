import axios from 'axios';
import { returnErrors } from './errorActions';
import {ADDING_SUCCESS} from "./types";
    
//Add DJ
export const djAction = ({ name1, name2 }) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    //Request body
    const body = JSON.stringify({ name1, name2 });
    
    axios.post('/mazzevents/adddj', body, config)
        .then(res => dispatch({
            type: ADDING_SUCCESS
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        });
};

