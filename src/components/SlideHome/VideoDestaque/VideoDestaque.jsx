import React, {useState} from 'react'
import { NavLink, Link } from "react-router-dom";


//Styled components
import {
  Imagem,
  Div,
  StyledLink,
  Button
} from "./styles"

//Bootstrap
import {  
} from 'react-bootstrap';
  

const VideoDestaque = ({destaque}) => {
  return (
    <Div >
      <Imagem src={destaque.imagem} alt={destaque.titulo} />
      <div className='d-flex flex-column w-50'>
        <h2 className=''>{destaque.titulo}</h2>
        <p className='w-100 text-justify mt-5'>{destaque.descricaoBreve}</p>
        <StyledLink to={`/destaque/${destaque.id}`}>
          <Button>
            Exibir Mais
          </Button>
        </StyledLink>
      </div>
    </Div>
  )
}

export default VideoDestaque