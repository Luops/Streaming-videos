import styled from "styled-components";

import { NavLink } from "react-router-dom";

import tdkIcon from "../../img/logo-pequeno.png"

import { 
  } from 'react-bootstrap';


export const Component = styled.div `
    max-width: 320px;
    max-height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const Imagem = styled.img `
    width: 320px;
    height: 450px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.5); 
    box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.5);
    cursor: pointer;
    transition: .8s ease-in-out;
    &:hover {
        transform: scale(1.01)
    }
`

export const Identificacao = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`