import {
    GET_PHOTOS_REQUEST, 
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_ERROR
} from './../constants/constants';

export default function isLoading(state=false, action) {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return true
        case GET_PHOTOS_SUCCESS:
            return false
        case GET_PHOTOS_ERROR:
            return false
        default:
            return state;
    }
}