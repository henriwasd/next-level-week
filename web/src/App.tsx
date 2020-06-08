import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span role="img" aria-label="sheep">✌ ✌ ✌</span>
        <a
          className="App-link"
          href="https://twitter.com/henriwasd"
          target="_blank"
          rel="noopener noreferrer"
        >
          @henriwasd
        </a>
      </header>
    </div>
  );
}

export default App;
