import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Images from './components/Docker/Images';
import Menu from './components/Sidebar.js/Menu';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="display-flex">
        <Menu />
        <Route path="/" exact component={Images} />
      </div>
    </div>
  );
}

export default App;
