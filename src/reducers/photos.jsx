import {
    GET_REQUEST, 
    GET_SUCCESS,
    GET_ERROR
} from './../constants/constants';

export default function photos(state=[], action) {
    switch (action.type) {
        case GET_REQUEST:
            return []
        case GET_SUCCESS:
            if (action.typeOfRequest === 'photos') {
                return [].concat(action.payload)
            }
            return []
        case GET_ERROR:
            return []
        default:
            return state;
    }
}