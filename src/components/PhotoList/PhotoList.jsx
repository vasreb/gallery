import React from 'react';
import {Component} from 'react';
import './style.css';
import Photo from './../Photo/Photo';
import fetchPhotos from './../../actions/fetchPhotos';
import PropTypes from 'prop-types';

export default class PhotoList extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPhotos('photos?albumId=1'));
    }

    render() {
        const { isLoading, photos } = this.props;

        const photoLis = photos.map(photo => 
        <li key={photo.id} className="photo-list__item">
            <Photo 
            id={photo.id} 
            title={photo.title}
            url={photo.url}
            thumbnailUrl={photo.thumbnailUrl}
            albumId={photo.albumId}
            />
        </li>)

        return (
            <div className="photo-list">
                <h2 className="photo-list__title">
                {isLoading ? 'Photos are loading...' : photos[0] 
                ? `Album №${photos[0].albumId}` : ''}
                </h2>
                <ul className="photo-list__list">
                    {photoLis}
                </ul>
            </div>
        )
    }
}

PhotoList.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.shape({
        albumId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired
    }))
}