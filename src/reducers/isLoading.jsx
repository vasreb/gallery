import {
    GET_PHOTOS_REQUEST, 
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_ERROR,
    GET_USERS_REQUEST, 
    GET_USERS_SUCCESS,
    GET_USERS_ERROR
} from './../constants/constants';

export default function isLoading(state=false, action) {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
        case GET_USERS_REQUEST:
            return true
        case GET_PHOTOS_SUCCESS:
        case GET_USERS_SUCCESS:
            return false
        case GET_PHOTOS_ERROR:
        case GET_USERS_ERROR: 
            return false
        default:
            return state;
    }
}