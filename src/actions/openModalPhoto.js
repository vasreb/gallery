import {
    OPEN_MODAL_PHOTO
} from './../constants/constants';

export default function openModalPhoto(photo) {
    return {
        type: OPEN_MODAL_PHOTO,
        payload: Object.assign(photo, {isOpen: true})
    }
}