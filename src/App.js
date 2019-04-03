import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import Routes from "./Routes";
import CustomNavbar from "./components/Navbar"


class App extends Component {
  render() {
    return (
      <div className="App container">
        <CustomNavbar />
        <Routes style={{marginTop: '24px'}}/>
      </div>
    );
  }
}

export default App;
