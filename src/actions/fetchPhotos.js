import {
    GET_PHOTOS_REQUEST, 
    GET_PHOTOS_SUCCESS, 
    GET_PHOTOS_ERROR
} from './../constants/constants';

export default function fetchPhotos(get_request) {
    return dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
        })
        fetch(`https://jsonplaceholder.typicode.com/${get_request}`)
        .then(res => res.json())
        .then(res => dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: res
            }))
        .catch(err => dispatch({
            type: GET_PHOTOS_ERROR,
            payload: err
        }))
    }
}