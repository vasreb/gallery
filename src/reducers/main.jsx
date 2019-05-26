import { combineReducers } from 'redux'
import photos from './photos';
import isLoading from './isLoading';
import currentAlbumId from './currentAlbumId';
import currentPhoto from './currentPhoto';
import isError from './isError';
import users from './users';

export default combineReducers({
        photos,
        isLoading,
        currentAlbumId,
        currentPhoto,
        isError,
        
        users
})
