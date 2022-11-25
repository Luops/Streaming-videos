import React from 'react'
import { NavLink, Link } from "react-router-dom";

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
  const handleUpPage = (e:any) => {
    e.preventDefault();

    window.scroll(100,0);
  }

  let txtBobGeral = conteudo.estacao === "bobGeral" ? "Bobinagem" : conteudo.estacao 

  return (
    <Component>
      <button 
      className='bg-transparent border-0 p-0'
      onClick={handleUpPage}
      >
        <Link
        to={`/conteudo/${conteudo.id}`}
        >
          <Imagem src={conteudo.imagem} alt={conteudo.titulo} />
        </Link>
      </button>
      <h3 className="fs-5 fw-normal text-white w-100">{conteudo.titulo}</h3>
      <div className="w-100 d-flex justify-content-between align-center">
        <h3 className="fs-6 fw-bold gap-2 text-uppercase text-primary ">
        {(conteudo.estacao === "bobGeral" ? "Bobinagem" : "" )} 
        {(conteudo.estacao === "mfGeral" ? "Montagem" : "" )}
        {(conteudo.estacao !==  "bobGeral" ? conteudo.estacao : "" ) && (conteudo.estacao !==  "mfGeral" ? conteudo.estacao : "" )}, {conteudo.tipoVideo === "inspecao" ? "Inspeção " : conteudo.tipoVideo}</h3>
        <h3 className="fs-6 fw-normal d-flex align-items-center gap-2 text-primary"><FaHistory/>{conteudo.tempoVideo}</h3>
      </div>
    </Component>
  )
}

export default DetalhesConteudo