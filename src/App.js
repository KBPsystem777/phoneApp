import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <div className="App-buttons">
            <div>
              <button>Facebook</button>
            </div>
            <div>
              <button>Twitter</button>
            </div>
            <div>
              <button>Mobile Legends</button>
            </div>
            <div>
              <button>Speedtest</button>
            </div>
            <div>
              <button>Grab</button>
            </div>
            <div>
              <button>Uber</button>
            </div>
            <div>
              <button>GunboundM</button>
            </div>
            <div>
              <button>Quora</button>
            </div>
            <div>
              <button>Clash of Clans</button>
            </div>
            <div>
              <button>BPI</button>
            </div>
            <div>
              <button>iFlix</button>
            </div>
            <div>
              <button>Slack</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
