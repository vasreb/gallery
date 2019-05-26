import {
    GET_PHOTOS_ERROR,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_REQUEST
} from '../constants/constants';

export default function isError(state=false, action) {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return {
                isError: false
            }
        case GET_PHOTOS_ERROR:
            return {
                isError: true,
                error: action.payload
            }
        case GET_PHOTOS_SUCCESS:
            return {
                isError: false
            }
        default:
            return state
    }
}