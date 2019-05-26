import {
    GET_REQUEST
} from './../constants/constants';

export default function isLoading(state=1, action) {
    switch (action.type) {
        case GET_REQUEST:
            if (action.payload) {
                return +action.payload;
            }
            return state;
        default:
            return state;
    }
}