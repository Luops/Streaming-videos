import styled from "styled-components";

import { NavLink } from "react-router-dom";

import tdkIcon from "../../img/logo-pequeno.png"

import { 
    Container, 
    Nav, 
    Navbar, 
    NavDropdown,
    Form  
  } from 'react-bootstrap';


export const StyledNavBar = styled(Navbar) `
    @media (max-width: 991px) {
        background-color: white !important;
    }
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
    @media (max-width: 991px) {
        margin-top: 15px;
    }
`

export const StyledForm = styled(Form) `
    border: 1px solid #ccc;
    border-radius: 3px;
    width: fit-content;
    padding: 0 15px;
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

export const StyledDivUser = styled(NavDropdown) `
    @media (max-width: 991px) {
        margin-left: 2px;
    }
`

export const IconUser = styled.div `
    width: 30px;
    height: 30px;
    background-image: url(${tdkIcon});
    background-size: cover;
    margin-top: 5px;
`

