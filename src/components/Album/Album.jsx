import React from 'react';
import './style.css';
import selectAlbum from './../../actions/selectAlbum';
import PropTypes from 'prop-types';

export default class Album extends React.PureComponent {
    render() {
        const { albumId, dispatch, currentAlbumId } = this.props; 
        const albumChange = () => {
            dispatch(selectAlbum(albumId));
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