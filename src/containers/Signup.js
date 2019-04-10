import React, { Component } from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col } from 'reactstrap';
import "./Signup.css";
import Config from "../Config"

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      lastName: "",
      error: "",
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.name.length > 0 &&
      this.state.lastName.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });

    this.setState({ newUser: "test" });
    fetch(Config.API+'signup', {

      method: 'POST',
      headers: {'Content-Type':'application/json'},
      // headers: {} <-- You can include some headers if you want
      body: JSON.stringify({email: this.state.email,
                            password: this.state.password,
                            name: this.state.name,
                            lastName: this.state.lastName
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
        this.props.history.push("/login")
        ).catch(err => {
          console.log(err)
          this.setState({error: err})
          this.setState({isLoading:false})
        });
  }

  renderForm() {
    return (
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
        <Row>
          <Col>
            <FormGroup controlId="name" >
              <label>Name</label>
              <FormControl
                autoFocus
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </FormGroup>
            </Col>
            <Col>
            <FormGroup controlId="lastName" >
              <label>Last Name</label>
              <FormControl
                autoFocus
                type="text"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </FormGroup>
            </Col>
        </Row>
        <FormGroup controlId="password" >
          <label>Password</label>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" >
          <label>Confirm Password</label>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <LinkContainer to="/login" style={{cursor:'pointer', textAlign:'center', color:'lightblue',paddingBottom:'12px'}}>
          <h6 > Already have an account? Sign In </h6>
        </LinkContainer>
        <LoaderButton
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Sign up"
          loadingText="Signing up…"
        />
      </form>
    );
  }

  render() {
    return (
      <div className="Signup">
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderForm() }
          {this.state.error? <h6> {`${this.state.error}`} </h6>: null}
      </div>
    );
  }
}
