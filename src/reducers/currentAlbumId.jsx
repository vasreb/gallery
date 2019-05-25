import {
    GET_PHOTOS_SUCCESS,
} from './../constants/constants';

export default function isLoading(state=1, action) {
    switch (action.type) {
        case GET_PHOTOS_SUCCESS:
            return action.payload[0].albumId
        default:
            return state;
    }
}