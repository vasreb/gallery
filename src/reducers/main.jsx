import photos from './photos';
import isLoading from './isLoading';
import currentAlbumId from './currentAlbumId';
import currentPhoto from './currentPhoto';
import isError from './isError';

export default function appReducer(state={}, action) {
	return {
        photos: photos(state.photos, action),
        isLoading: isLoading(state.isLoading, action),
        currentAlbumId: currentAlbumId(state.currentAlbumId, action),
        currentPhoto: currentPhoto(state.currentPhoto, action),
        isError: isError(state.isError, action)
	}
}