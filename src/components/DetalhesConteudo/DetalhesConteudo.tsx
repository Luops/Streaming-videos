import React from 'react'
import { NavLink } from "react-router-dom";

//hooks

//Context

//Styled components
import { 
  Component,
  Imagem
} from "./styles"

//Bootstrap
import { 
} from 'react-bootstrap';

//Icons
import { FaHistory } from "react-icons/fa"


const DetalhesConteudo = ({conteudo}:any) => {
  return (
    <Component>
      <Imagem src={conteudo.imagem} alt={conteudo.titulo} />
      <h3 className="fs-5 fw-normal ">{conteudo.titulo}</h3>
      <div className="w-100 d-flex justify-content-between align-center">
        <h3 className="fs-6 fw-bold gap-2 text-uppercase text-primary">{conteudo.estacao}</h3>
        <h3 className="fs-6 fw-normal d-flex align-items-center gap-2 text-primary"><FaHistory/>{conteudo.tempoVideo}</h3>
      </div>
    </Component>
  )
}

export default DetalhesConteudo