import React, { Component } from 'react'

import { NavLink } from "react-router-dom";

//Styled components
import { 
  StyledNavLink,
  StyledNavBar
} from "./styles"

//Bootstrap
import { 
  Container, 
  Nav, 
  Navbar, 
  NavDropdown  
} from 'react-bootstrap';

const Header = () => {
  return (
    <StyledNavBar collapseOnSelect expand="lg">
    <Container>
      <Navbar.Brand>
        <StyledNavLink to="/">Teste</StyledNavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <NavDropdown title="Processo" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <StyledNavLink to="/processo/bobinagem">
                Bobinagem
              </StyledNavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <StyledNavLink to="/processo/montagemfinal">
                Montagem Final
              </StyledNavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Estações" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <StyledNavLink to="/estacao/bpm01">
                BPM01
              </StyledNavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <StyledNavLink to="/estacao/bpm02">
                BPM02
              </StyledNavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <StyledNavLink to="/estacao/bpm03">
                BPM03
              </StyledNavLink>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <StyledNavLink to="/login">
            Login
          </StyledNavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </StyledNavBar>
  )
}

export default Header