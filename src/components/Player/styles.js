import styled from "styled-components";

import { NavLink } from "react-router-dom";

//Bootstrap
import {
    Button
} from 'react-bootstrap';

export const Video = styled.video`
    position: relative;
    z-index: 0;
    cursor: pointer;
    width: 850px;
`

export const VideoFull = styled.video`
    position: relative;
    z-index: 0;
    cursor: pointer;
    width: 100%;
`

export const BarraPlayer = styled.div`
    width: 850px;
    display: flex;
    flex-direction: column;
    position: relative;
    opacity: 0;
    align-items: center;
    justify-content: center;
    padding: 15px 15px;
    margin-top: -68px;
    background-color: rgba( 0, 0, 0, 0.65 );
    z-index: 1;
    gap: 10px;
    transition: .4s ease-in-out;
    cursor: pointer;
    &:hover{
        opacity: 1;
    }
    ${Video}:hover + & {
        opacity: 1;
    }
    ${VideoFull}:hover + & {
        opacity: 1;
    }
`

export const Barra = styled.input`
    width: 100%;
    height: 5px;
`

export const Expandir = styled.i`
    font-size: 2em;
    color: white;
`