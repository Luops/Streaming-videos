import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { 
    Container, 
    Nav, 
    Navbar, 
    NavDropdown,
    Form  
  } from 'react-bootstrap';


export const StyledNavBar = styled(Navbar) `
    background-color: transparent;
    position: relative;
    z-index: 1;
`

export const StyledNavDropdown = styled(NavDropdown) `
    font-weight: bold;
    color: #001f21 !important;
`

export const StyledNavLink = styled(NavLink) `
    text-decoration: none;
    color: black;
    font-weight: bold;
    &:hover {
        color: #001f21;
    }
`

export const StyledBtnLink = styled(NavLink) `
    text-decoration: none;
    font-weight: bold;
    border-radius: 20px;
    padding: 5px 22px ;
    transition: .4s ease-in-out;
    &:hover {
        color: #001f21;
        background-color: white;
    }
`

export const StyledForm = styled(Form) `
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 150px;
`

export const StyledInput = styled.input `
    color: black;
    border: none;
    width: 120px;
    border-radius: 0;
    &:focus {
        border: none;
        outline: none;
    }

`

export const StyledButton = styled.button `
    border: none;
    background-color: transparent;
    border-radius: 0;

    i {
        display: flex;
    }
`
