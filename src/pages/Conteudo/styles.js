import styled from "styled-components";

import { NavLink } from "react-router-dom";

import {
  StyledDiv
} from "../stylesGeral"

import { 
  } from 'react-bootstrap';


export const ConteudoContainer = styled(StyledDiv)`
  padding-top: 100px;
  width: 100%;
`
export const SectionDescricao = styled.section`
  padding: 0 15px;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
  }
`

export const SectionVideo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:  100%;
  margin-top: 50px;
  background: rgb(16,15,70);
  background: -moz-linear-gradient(90deg, rgba(16,15,70,1) 0%, rgba(3,42,107,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(16,15,70,1) 0%, rgba(3,42,107,1) 100%);
  background: linear-gradient(90deg, rgba(16,15,70,1) 0%, rgba(3,42,107,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#100f46",endColorstr="#032a6b",GradientType=1);
  width: 100%;
  @media (max-width: 991px) {
    
  }
`

export const Imagem = styled.img`
  width: 320px;
  height: 450px;
`

export const DivDescricao = styled.div`
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Paragrafo = styled.p`
  text-align: justify;
  line-height: 25px;
  line-break: normal;
  text-indent: 1em;
  @media (max-width: 991px) {
    width: 125%;
  }
`

export const H1 = styled.h1`
  font-size: 2.75em;
  @media (max-width: 991px) {
    font-size: 1.75em;
    width: 125%;
    text-align: center;
  }
`

export const SectionRecomendado = styled.section`
`