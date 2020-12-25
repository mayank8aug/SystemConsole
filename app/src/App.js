import React from 'react';
import './App.scss';
import Images from './components/Docker/Images';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Images />
      </header>
    </div>
  );
}

export default App;
