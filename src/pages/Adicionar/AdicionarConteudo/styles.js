import styled from "styled-components";

import { NavLink } from "react-router-dom";

//Bootstrap
import {
    Button
} from 'react-bootstrap';

import {
    StyledDiv
} from "../../stylesGeral.js"



export const StyledDivVideo = styled(StyledDiv)`
margin-bottom: 15px;
`

export const Div = styled.div `
    margin-top: 8%;
    background-color: white;
    width: 70%;
    -webkit-box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.5); 
    box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.5);
`

export const StyledUpload = styled.div`
    cursor: pointer;
    width: 300px;
    font-size: 1.4em;
    input[type="file"] {
        display: none;
    }
    label{
        cursor: pointer;
        display: block;
    }
`

export const StyledTextArea = styled.textarea`
    height: 200px;
`

