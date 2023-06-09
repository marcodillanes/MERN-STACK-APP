import logo from './logo.svg';
import './App.css';

import options from "./server/controllers/arttony";

const axios = require('axios')

const express = require('express');
const router = require("../routes/movie-routes");
const app = express

app.use("/movie", router)


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

          {axios.options}

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

export default App;
