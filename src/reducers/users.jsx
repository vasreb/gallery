import {
    GET_REQUEST, 
    GET_SUCCESS,
    GET_ERROR
} from './../constants/constants';

export default function users(state=[], action) {
    switch(action.type) {
        case GET_REQUEST:
            return []
        case GET_SUCCESS:
            if (action.typeOfRequest === 'users') {
                return [].concat(action.payload)
            }
            return []
        case GET_ERROR:
            return []
        default: 
            return state;
    }
}