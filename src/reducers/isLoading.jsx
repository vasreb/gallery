import {
    GET_REQUEST, 
    GET_SUCCESS,
    GET_ERROR,
} from './../constants/constants';

export default function isLoading(state=false, action) {
    switch (action.type) {
        case GET_REQUEST:
            return true
        case GET_SUCCESS:
            return false
        case GET_ERROR:
            return false
        default:
            return state;
    }
}