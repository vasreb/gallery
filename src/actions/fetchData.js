import {
    GET_REQUEST, 
    GET_SUCCESS, 
    GET_ERROR
} from './../constants/constants';

export default function fetchData(Url, typeOfRequest, toRequest='') {
    return async dispatch => {
        dispatch({
            type: GET_REQUEST,
            payload: toRequest
        })
        //sends id to change currentAlbumId
        try {
            let res = await fetch(Url)
            res = await res.json();
            dispatch({
                type: GET_SUCCESS,
                payload: res,
                typeOfRequest
            })
        }   
        catch (err) {
            dispatch({
                type: GET_ERROR,
                payload: err,
            })
        }
    }
}