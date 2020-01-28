import React from 'react';
import './App.scss';

import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <br />
        <Home />
      </header>
    </div>
  );
}

export default App;
