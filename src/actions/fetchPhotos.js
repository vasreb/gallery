import {
    GET_PHOTOS_REQUEST, 
    GET_PHOTOS_SUCCESS, 
    GET_PHOTOS_ERROR
} from './../constants/constants';

export default function fetchPhotos(id) {
    return async dispatch => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: +id
        })
        //sends id to change currentAlbumId
        try {
            let res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            res = await res.json();
            dispatch({
                    type: GET_PHOTOS_SUCCESS,
                    payload: res
            })
        }   
        catch (err) {
            dispatch({
                type: GET_PHOTOS_ERROR,
                payload: err
            })
        }
    }
}