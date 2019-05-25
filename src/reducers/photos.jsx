import {
    GET_PHOTOS_REQUEST, 
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_ERROR
} from './../constants/constants';

export default function photos(state=[], action) {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return []
        case GET_PHOTOS_SUCCESS:
            return [].concat(action.payload)
        case GET_PHOTOS_ERROR:
            return []
        default:
            return state;
    }
}