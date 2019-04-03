import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { LinkContainer } from "react-router-bootstrap";

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" dark style={{backgroundColor: '#ffffff'}} >
        <LinkContainer to="/">
          <img src="http://www.bdgsa.net/images/LOGO_BDG-01.png" alt="BDG" />
          </LinkContainer>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" style={{backgroundColor: '#BD1823'}} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
              <LinkContainer to="/login">
                <h6 >Login </h6>
                </LinkContainer>
              </NavItem>
              <NavItem>
                <LinkContainer to="/report">
                  <h6 > Bitacora</h6>
                </LinkContainer>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
