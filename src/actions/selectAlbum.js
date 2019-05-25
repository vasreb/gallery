import fetchPhotos from './fetchPhotos';

export default function selectAlbum(index) {
    return fetchPhotos(`photos?albumId=${index}`);
}