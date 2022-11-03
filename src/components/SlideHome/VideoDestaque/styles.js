import styled from "styled-components";

import { NavLink, Link } from "react-router-dom";


import { 
  } from 'react-bootstrap';


export const Div = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center
`

export const Imagem = styled.img`
    height: 335px;
    width: 576px;
    margin: 10px 0;
    border-radius: 5px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.82); 
    box-shadow: 0px 0px 8px 2px rgba(0,0,0,0.82);
`

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  margin-bottom: 10px;
  text-decoration: none;
`

export const Button = styled.button`
    width: fit-content;
    background: linear-gradient(91deg,rgba(0,69,177,0.8) 0%, rgba(40,125,255,0.6) 100%);
    color: white;
    text-decoration: none;
    list-style: none;
    padding: 9px 25px;
    border-radius: 20px;
    transition: .4s ease-in-out;
    text-transform: uppercase;
    font-family: 'Inder';
    border: 1px solid white;
    &:hover {
      background: linear-gradient(91deg,rgba(0,69,177,0.8) 0%, rgba(40,125,255,0.8) 100%);
      transform: scale(1.005);
    }
`