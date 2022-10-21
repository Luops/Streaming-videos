import React, {useState} from 'react'


//Styled components
import {
  Imagem,
  Div
} from "./styles"

//Bootstrap
import {  
} from 'react-bootstrap';
  

const VideoDestaque = ({destaque}) => {
  return (
    <Div >
      <Imagem src={destaque.imagem} alt={destaque.titulo} />
      <div className='d-flex flex-column w-50'>
        <h2>{destaque.titulo}</h2>
        <p className='w-100'>{destaque.descricaoBreve}</p>
      </div>
    </Div>
  )
}

export default VideoDestaque