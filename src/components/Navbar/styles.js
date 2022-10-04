import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { 
    Container, 
    Nav, 
    Navbar, 
    NavDropdown  
  } from 'react-bootstrap';


export const StyledNavBar = styled(Navbar) `
    background-color: transparent;
`


export const StyledNavLink = styled(NavLink) `
    text-decoration: none;
    color: black;
    &:hover {
        color: gray;
    }
`
