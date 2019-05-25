import React from 'react';
import './App.css';
import AlbumList from './../AlbumList/AlbumList';
import PhotoListContainer from './../../containers/PhotoListContainer';
import { Provider } from 'react-redux';
import store from './../../store/store';
import ModalPhotoContainer from './../../containers/ModalPhotoContainer';

const albums = [];
    for (let i = 1; i <= 100; i++) {
        albums.push({albumId: i});
  }

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AlbumList albums={albums}/>
        <PhotoListContainer />
        <ModalPhotoContainer />
      </div>
    </Provider>
  );
}

export default App;


