import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import CustomNavbar from "./components/Navbar"


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <div className="App container">
        <CustomNavbar isAuthenticated={this.state.isAuthenticated} userHasAuthenticated={this.userHasAuthenticated} />
        <Routes childProps={childProps} style={{marginTop: '24px'}}/>
      </div>
    );
  }
}

export default App;
