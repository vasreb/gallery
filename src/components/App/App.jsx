import React from 'react';
import './App.css';
import Gallery from '../Gallery/Gallery.jsx';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import store from './../../store/store';
import Header from './../Header/Header.jsx';
import Users from './../Users/Users.jsx';

export default function App() {
  return (
    <Provider store={store}>
      <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Gallery}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/users' component={Users}/>
          </Switch>
        </main>
    </Provider>
  );
}
