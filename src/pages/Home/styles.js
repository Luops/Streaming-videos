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
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${Background});
    background-position: center;
    background-size: cover;
    margin-top: -56px;
    height: 100vh;
    width: 100%;
    
`

export const FiltroVideos = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 15px 20px;
    align-items: center;
    justify-content: center;
    background: rgb(16,15,70);
    background: -moz-linear-gradient(90deg, rgba(16,15,70,1) 0%, rgba(3,42,107,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(16,15,70,1) 0%, rgba(3,42,107,1) 100%);
    background: linear-gradient(90deg, rgba(16,15,70,1) 0%, rgba(3,42,107,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#100f46",endColorstr="#032a6b",GradientType=1);
`

export const TxtVideo = styled.h2`
    font-weight: bold;
    font-size: 3em;
    color: white;
    width: 100%;
    margin-left: 10%;
`

export const Botoes = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
`

export const Botao = styled.button`
    background: linear-gradient(91deg,rgba(0,69,177,0.8) 0%, rgba(40,125,255,0.6) 100%);
    border-radius: 20px;
    padding: 9px 25px;
    width: 150px;
    color: white;
    transition: .4s ease-in-out;
    border: 1px solid white;
    &:hover {
        background: linear-gradient(91deg,rgba(0,69,177,0.8) 0%, rgba(40,125,255,0.8) 100%);
        transform: scale(1.005);
    }
`

export const BotaoAtivado = styled.button`
    background-color: black;
    border-radius: 20px;
    padding: 9px 25px;
    width: 150px;
    color: white;
    transition: .4s ease-in-out;
    border: 1px solid white;
`

export const SemOpcoes = styled.div`
    height: 250px;
`

