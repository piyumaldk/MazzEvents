import React from 'react';
import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MazzEvents
        </p>        
        <button>Log in</button>
      </header>
    </div>
  );
}

export default App;
