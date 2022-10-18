import styled from "styled-components";

import { NavLink } from "react-router-dom";

//Bootstrap
import { 
    Container, 
    Nav, 
    Navbar, 
    NavDropdown,
    Form  
  } from 'react-bootstrap';

//Imagens
import Background from "../../img/background2.png"


export const StyledDiv = styled.div `
    z-index: 0;
    position: relative;
`

export const Videos = styled.div `
    display: flex;
    flex-wrap: wrap;
`

export const Destaque = styled.section `
    background-image: url(${Background});
    background-position: center;
    background-size: cover;
    margin-top: -56px;
    height: 100vh;
    width: 100%;
    
`