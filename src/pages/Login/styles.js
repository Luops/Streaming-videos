import styled from "styled-components";

//Imagem
import tdk from "../../img/background.jpg"

import { NavLink } from "react-router-dom";

import {
    Button
  } from 'react-bootstrap';

import {
    StyledDiv
} from "../stylesGeral"

export const StyledDivLogin = styled(StyledDiv) `
    height: 100vh;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    display: flex;
    flex-direction: row;
`

export const StyledLabel = styled.label `
    width: 45%;
    background-color: #dde;
`

export const StyledForm = styled.form `
    width:60%;
    height: 100%;
    padding-top: 8%;
    color: rgba(0,69,177,0.8);
`

export const StyledSpan = styled.span `
    font-weight: normal;
    color: black;
`

export const StyledInput = styled.input `
    background-color: #dde;
    &:focus {
        border-bottom: none;
        outline: none;
    }
`

export const StyledDivBackground = styled.div `
    background-image: url(${tdk});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 100%;
`
export const StyledDivFiltro = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: rgba(0,69,177,0.8);
    background: linear-gradient(91deg,rgba(0,69,177,0.8) 0%, rgba(40,125,255,0.8) 80%);
    background: -webkit-linear-gradient(91deg,rgba(0,69,177,0.8) 0%, rgba(40,125,255,0.8) 80%);
    background: -moz-linear-gradient(91deg,rgba(0,69,177,0.8) 0%, rgba(40,125,255,0.8) 80%);
`

export const StyledH1 = styled.h1 `
    font-weight: bold;
    color: white;
    font-size: 3em;
    margin-bottom: 3%;
`

export const StyledH3 = styled.h3 `
    font-weight: 300;
    font-size: 1.3em;
    width: 60%;
    color: rgba(250,250,250,0.55);
`

export const StyledH4 = styled.h4 `
    font-size: 3em;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 5%;
    font-family: 'inder';
`

export const StyledButton = styled.button `
    font-size: 1em;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 4%;
    width: 45%;
    border-radius: 20px;
    background-color: rgba(0,69,177,0.8);
    color: white;
    border: none;
    padding: 5px 0;
    transition: ease-in-out .4s;
    &:hover {
        background-color: rgba(0,69,177,0.95);;
    }
`

