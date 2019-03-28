import React, { Component } from 'react';
import './App.css';
import Table from './Table'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Table />
      </div>
    );
  }
}

export default App;
