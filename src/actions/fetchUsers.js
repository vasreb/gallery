import {
    GET_USERS_REQUEST, 
    GET_USERS_SUCCESS, 
    GET_USERS_ERROR
} from './../constants/constants';

export default function fetchUsers() {
    return async dispatch => {
        dispatch({
            type: GET_USERS_REQUEST,
        })
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/users`)
            res = await res.json();
            dispatch({
                type: GET_USERS_SUCCESS,
                payload: res
            })
        }   
        catch (err) {
            dispatch({
                type: GET_USERS_ERROR,
                payload: err
            })
        }
    }
}