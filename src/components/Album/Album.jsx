import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import fetchPhotos from './../../actions/fetchPhotos';

export default class Album extends React.Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.currentAlbumId === this.props.albumId) {
            return true
        }
        if (this.props.currentAlbumId === this.props.albumId) {
            return true
        }
        return false
    }
    render() {
        const { albumId, dispatch, currentAlbumId } = this.props; 
        const albumChange = () => {
            dispatch(fetchPhotos(albumId));
        }
        console.log('rerender');
        return (
            <div 
            className={currentAlbumId === albumId ? 'album--selected album' : 'album'}
            onClick={currentAlbumId !== albumId ? albumChange : () => {}}
            >
                <h2 className="album__title">Album Id: {albumId}</h2>
            </div>
        )
    }
}


Album.propTypes = {
    albumId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    currentAlbumId: PropTypes.number.isRequired
}