import styled from "styled-components";

import { NavLink } from "react-router-dom";

//Bootstrap
import {
    Button
} from 'react-bootstrap';

//Styles de outro component 
import {
    SectionVideo
} from '../../pages/Conteudo/styles.js'

export const Video = styled.video`
    position: relative;
    z-index: 0;
    cursor: pointer;
    width: 640px;
    height: 480px;
    @media (min-width: 1600px) {
        width: 704px;
        height: 528px;
    }
    @media (min-width: 1900px) {
        width: 774px;
        height: 580px;
    }
`

export const VideoFull = styled.video`
    position: relative;
    z-index: 0;
    cursor: pointer;
    width: 864px;
    height: 648px;
    @media (min-width: 1600px) {
        width: 1036px;
        height: 777px;
    }
    @media (min-width: 1900px) {
        width: 1243px;
        height: 939px;
    }
`

export const BarraPlayer = styled.div`
    width: 640px;
    display: flex;
    flex-direction: column;
    position: relative;
    opacity: 0;
    align-items: center;
    justify-content: center;
    padding: 15px 15px;
    bottom: 129px;
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
    @media (min-width: 1600px) {
        width: 704px;
        bottom: 136px;
    }
    @media (min-width: 1900px) {
        width: 774px;
        bottom: 143px;
    }
`

export const BarraPlayerFull = styled.div`
    width: 864px;
    height: 70px;
    display: flex;
    flex-direction: column;
    position: relative;
    opacity: 0;
    align-items: center;
    justify-content: center;
    align-self: center;
    padding: 0px 15px;
    bottom: 150px;
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
    @media (min-width: 1600px) {
        width: 1036px;
        bottom: 171px;
    }
    @media (min-width: 1900px) {
        width: 1243px;
        bottom: 195px;
    }
`

export const Barra = styled.input`
    width: 100%;
    height: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    align-self: center;
`

export const BarraAudio = styled.input`
    height: 4px;
    background-color: white;
`

export const Expandir = styled.i`
    font-size: 2em;
    color: white;
`

export const Botoes = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    gap: 5px;
    padding-bottom: -50px;
`
