// src/App.js
import React from 'react';
import './App.css';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Countdown Timer</h1>
        <Timer />
      </header>
    </div>
  );
}

export default App;

