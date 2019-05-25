import {
    OPEN_MODAL_PHOTO,
    CLOSE_MODAL_PHOTO
} from './../constants/constants';

export default function photos(state={}, action) {
    switch (action.type) {
        case OPEN_MODAL_PHOTO:
            return Object.assign({}, state, action.payload)
        case CLOSE_MODAL_PHOTO:
            return Object.assign({}, state, action.payload)
        default:
            return state
    }
}