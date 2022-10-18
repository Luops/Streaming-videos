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
    z-index: 2;
    transition: .2s ease-in-out;
    @media (max-width: 991px) {
    }
`

export const StyledUl = styled.ul`
    width: 150px;
    padding: 5px 0px;
    border-radius: 5px;
    border: 1px solid #ccc;
    gap: 8px;
    z-index: 1;
`

export const StyledNavDropdown = styled(NavDropdown) `
    font-weight: bold;
    color: white !important;
`

export const StyledNavLink = styled(NavLink) `
    text-decoration: none;
    color: black;
    font-weight: bold;
    padding: 1px 10px;
    &:hover {
        color: #001f21;
        background-color: #E9ECEF;
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
    padding: 0 15px;-color: black;
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
    &::placeholder {
        color: black;
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



