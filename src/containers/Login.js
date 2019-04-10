import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { LinkContainer } from "react-router-bootstrap";
import "./Login.css";
import Config from "../Config"

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState(state => ({
      isLoading: !state.isLoading
    }));
    fetch(Config.API+'login', {

      method: 'POST',
      headers: {'Content-Type':'application/json'},
      // headers: {} <-- You can include some headers if you want
      body: JSON.stringify({email: this.state.email,
                            password: this.state.password
                          })
    })
      .then(response => {
        console.log(response.status)
        if(response.ok) {
           return response.json();
        }
       throw new Error('Server response: '+ response.status);
      })
      .then(data =>
         {
          this.props.userHasAuthenticated(true)
          this.props.history.push("/report")
         }
        ).catch(err => {
          console.log(err)
          this.setState({isLoading:false})
        });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" >
            <label>Email</label>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" >
            <label>Password</label>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <LinkContainer to="/signup" style={{cursor:'pointer', textAlign:'center', color:'lightblue',paddingBottom:'12px'}}>
            <h6 > Don't have a user? Sign up </h6>
          </LinkContainer>
          <LoaderButton
            block = "true"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…"
          />
        </form>
      </div>
    );
  }
}
