import {
    GET_PHOTOS_REQUEST
} from './../constants/constants';

export default function isLoading(state=1, action) {
    switch (action.type) {
        case GET_PHOTOS_REQUEST:
            return action.payload;
        default:
            return state;
    }
}