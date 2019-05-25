import {
    CLOSE_MODAL_PHOTO
} from './../constants/constants';

export default function closeModalPhoto() {
    return {
        type: CLOSE_MODAL_PHOTO,
        payload: {isOpen: false}
    }
}