import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { LinkContainer } from "react-router-bootstrap";

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      isAuthenticated: false
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  handleLogout = async  event => {
    this.props.userHasAuthenticated(false);
  }
  

  render() {
    return (
      <div>
        <Navbar color="faded" dark style={{backgroundColor: '#ffffff'}} >
        <LinkContainer to="/" style={{cursor:'pointer'}}>
          <img src="http://www.bdgsa.net/images/LOGO_BDG-01.png" alt="BDG" />
          </LinkContainer>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" style={{backgroundColor: '#BD1823'}} />
          <Collapse isOpen={!this.state.collapsed} navbar>
          {this.props.isAuthenticated
            ? <Nav navbar>
                <NavItem onClick={this.toggleNavbar}>
                  <LinkContainer to="/report"  style={{cursor:'pointer'}}>
                    <h6> Reporte RPA </h6>
                  </LinkContainer>
                </NavItem>
                <NavItem onClick={this.handleLogout}>
                  <LinkContainer to="/login" style={{cursor:'pointer'}}>
                    <h6 > Log out </h6>
                  </LinkContainer>
                </NavItem>
              </Nav>

            :
            <Nav navbar>
              <NavItem onClick={this.toggleNavbar}>
              <LinkContainer to="/login" style={{cursor:'pointer'}}>
                <h6 > Sign In </h6>
                </LinkContainer>
              </NavItem>
              <NavItem onClick={this.toggleNavbar}>
              <LinkContainer to="/signup" style={{cursor:'pointer'}}>
                <h6 > Sign Up </h6>
                </LinkContainer>
              </NavItem>
            </Nav>
          }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
