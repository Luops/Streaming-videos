import React from 'react'

//Hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

//Componentes
import Player from '../../components/Player/Player';
import Recomendados from '../../components/Recomendados/Recomendados';

//Styled components
import { 
  ConteudoContainer,
  Imagem,
  Paragrafo,
  SectionDescricao,
  SectionVideo,
  DivDescricao
} from "./styles"
  
import { 
} from "../stylesGeral"
  
//Bootstrap
import { } from 'react-bootstrap';


//Icones
import { FaHistory } from "react-icons/fa"


const Destaque = () => {
    const {id} = useParams();
    const { document: destaque, loading} = useFetchDocument("destaque", id)

  return (
    <ConteudoContainer>
        {loading && <p>Carregando conteudo destaque!</p>}
        {destaque && (
            <>
                <SectionDescricao className='d-flex gap-5 w-100 justify-content-center align-items-center'> 
                  <Imagem src={destaque.imagem} alt={destaque.titulo} />
                  <DivDescricao className='w-50 d-flex flex-column justify-content-center '>
                    <h1 className='mb-1'>{destaque.titulo}</h1>
                    <div className='d-flex gap-5 '>
                      <p className='text-uppercase text-primary d-flex fw-bold'>{destaque.tipoVideo === "inspecao" && (<p>Inspeção</p>) || destaque.tipoVideo}, {destaque.estacao}</p>
                      <p className='text-uppercase text-primary fw-bold gap-2 d-flex align-items-center'><FaHistory/>{destaque.tempoVideo}</p>
                    </div>
                    <Paragrafo className="mt-5 text-justify">
                      {destaque.descricao}
                    </Paragrafo>
                  </DivDescricao>
                </SectionDescricao>
                <SectionVideo className="">
                  <Player key={destaque.id} conteudo={destaque}/>
                </SectionVideo>
                <Recomendados key={destaque.id} conteudo={destaque}/>
            </>
        )}
    </ConteudoContainer>
  )
}

export default Destaque