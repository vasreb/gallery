import React from 'react';
import './style.css';
import AlbumContainer from './../../containers/AlbumContainer';

export default function AlbumList(props) {
    
    const AlbumsLis = props.albums.map(album => 
    <li className="album-list__item" key={album.albumId}>
        <AlbumContainer albumId={album.albumId} />
    </li>
    )
    return (
        <ul className="album-list">
            {AlbumsLis}
        </ul>
    )
}