import React from 'react'

//Hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

//Componente
import Player from '../../components/Player/Player';

//Styled components
import { 
  ConteudoContainer,
  Imagem,
  Paragrafo,
  SectionDescricao,
  SectionVideo,
  DivDescricao,
  H1
} from "./styles"
  
import { 
} from "../stylesGeral"
  
//Bootstrap
import { } from 'react-bootstrap';

//Icones
import { FaHistory } from "react-icons/fa"

import "../../components/Player/Player"


const Conteudo = () => {
    const {id} = useParams();
    const { document: conteudo, loading} = useFetchDocument("conteudo", id)

  return (
    <ConteudoContainer>
        {loading && <p>Carregando conteudo!</p>}
        {conteudo && (
            <>
                <SectionDescricao className='d-flex gap-5 w-100 justify-content-center align-items-center'> 
                  <Imagem src={conteudo.imagem} alt={conteudo.titulo} />
                  <DivDescricao className='w-50 d-flex flex-column justify-content-center '>
                    <H1 className='mb-1'>{conteudo.titulo}</H1>
                    <div className='d-flex gap-5 '>
                      <p className='text-uppercase text-primary d-flex fw-bold'>{conteudo.tipoVideo === "inspecao" && (<p>Inspeção</p>) || conteudo.tipoVideo}, {conteudo.estacao}</p>
                      <p className='text-uppercase text-primary fw-bold gap-2 d-flex align-items-center'><FaHistory/>{conteudo.tempoVideo}</p>
                    </div>
                    <Paragrafo className="mt-5 text-justify">
                      {conteudo.descricao}
                    </Paragrafo>
                  </DivDescricao>
                </SectionDescricao>
                <SectionVideo className="">
                  <Player key={conteudo.id} conteudo={conteudo}/>
                </SectionVideo>
            </>
        )}
    </ConteudoContainer>
  )
}

export default Conteudo