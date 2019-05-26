import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import fetchData from './../../actions/fetchData';
import { Link } from 'react-router-dom';


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
            dispatch(fetchData(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
            'photos',
            albumId));
        }
        return (
            <Link onClick={currentAlbumId !== albumId ? albumChange : () => {}} to={`/gallery/${albumId}`} className="album__title">
                <div 
                className={currentAlbumId === albumId ? 'album--selected album' : 'album'}
                >
                    <h2 className="album__title">Album Id: {albumId}</h2>
                </div>
            </Link>
        )
    }
}


Album.propTypes = {
    albumId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    currentAlbumId: PropTypes.number.isRequired
}