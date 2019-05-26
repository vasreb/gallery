import React from 'react';
import AlbumList from '../AlbumList/AlbumList';
import PhotoListContainer from '../../containers/PhotoListContainer';
import ModalPhotoContainer from '../../containers/ModalPhotoContainer';
import './style.css';

const albums = [];
    for (let i = 1; i <= 100; i++) {
        albums.push({albumId: i});
  }

export default function Gallery() {
  return (
      <div className="gallery">
        <AlbumList albums={albums}/>
        <PhotoListContainer />
        <ModalPhotoContainer />
      </div>
  );
}



