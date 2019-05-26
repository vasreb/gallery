import {
    GET_USERS_REQUEST, 
    GET_USERS_SUCCESS,
    GET_USERS_ERROR
} from './../constants/constants';

export default function users(state=[], action) {
    switch(action.type) {
        case GET_USERS_REQUEST:
            return []
        case GET_USERS_SUCCESS:
            return [].concat(action.payload)
        case GET_USERS_ERROR:
            return []
        default: 
            return state;
    }
}