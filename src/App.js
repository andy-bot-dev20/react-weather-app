import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App(){
  return( <div className="App">
    <h1>Weather App</h1>
    <footer>
    This project is created by Andrea and is {""}
      <a href="https://github.com/andy-bot-dev20/react-weather-app"
        target="_blank">
        open-sourced on GitHub</a>
    </footer>
  </div>
  );
}
