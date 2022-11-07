import styled from "styled-components";

import { NavLink } from "react-router-dom";

import {
  StyledDiv
} from "../stylesGeral"

import { 
  } from 'react-bootstrap';

export const Container = styled(StyledDiv)`
    padding: 0 1em;
    padding-top: 125px;
    padding-bottom: 50px;
    height: 100% !important;
    width: 100%;
    color: white;
    background: rgb(16,15,70);
    background: -moz-linear-gradient(90deg, rgba(16,15,70,1) 0%, rgba(3,42,107,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(16,15,70,1) 0%, rgba(3,42,107,1) 100%);
    background: linear-gradient(90deg, rgba(16,15,70,1) 0%, rgba(3,42,107,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#100f46",endColorstr="#032a6b",GradientType=1);
`

export const TextoBob = styled.p`
    padding-bottom: 25px;
    border-bottom: 1px solid #425265;
`

export const Videos = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 5%;
    gap: 15px;
`
