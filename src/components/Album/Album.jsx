import React from 'react';
import './style.css';
import selectAlbum from './../../actions/selectAlbum';

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