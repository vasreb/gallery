import React from 'react';
import './App.css';
import Gallery from '../Gallery/Gallery.jsx';
import { Switch, Route } from 'react-router-dom';
import Header from './../Header/Header.jsx';
import Users from './../Users/Users.jsx';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Gallery}/>
            <Route exact path='/gallery' component={Gallery}/>
            <Route path='/gallery/:album' component={Gallery}/>
            <Route path='/users' component={Users}/>
          </Switch>
        </main>
    </BrowserRouter>
  );
}
