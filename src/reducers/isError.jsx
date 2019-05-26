import {
    GET_ERROR,
    GET_SUCCESS,
    GET_REQUEST,

} from '../constants/constants';

export default function isError(state=false, action) {
    switch (action.type) {
        case GET_REQUEST:
            return {
                isError: false
            }
        case GET_ERROR:
            return {
                isError: true,
                error: action.payload
            }
        case GET_SUCCESS:
            return {
                isError: false
            }
        default:
            return state
    }
}