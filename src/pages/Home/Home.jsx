import React, {useState} from 'react'

//Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

//Styled components
import { 
  Videos,
  Destaque,
  FiltroVideos,
  TxtVideo,
  Botoes,
  Botao,
  BotaoAtivado
} from "./styles"

import { 
  StyledDiv,
} from "../stylesGeral"

//Bootstrap
import { } from 'react-bootstrap';

//Components
import DetalhesConteudo from '../../components/DetalhesConteudo/DetalhesConteudo';
import Slide from '../../components/SlideHome/Slide/Slide';

const Home = () => {
  const { documents: conteudo, loading } = useFetchDocuments("conteudo")
  const { documentsInspecaoDez: inspecao } = useFetchDocuments("conteudo")
  const { documentsRegulagemDez: regulagem } = useFetchDocuments("conteudo")
  const { documentsAjusteDez: ajuste } = useFetchDocuments("conteudo")
  const { documentsSetupDez: setup } = useFetchDocuments("conteudo")

  const [isInspecao, setIsInspecao] = useState(true)
  const [isRegulagem, setIsRegulagem] = useState(false)
  const [isAjuste, setIsAjuste] = useState(false)
  const [isSetup, setIsSetup] = useState(false)

  return (
    <StyledDiv>
      <Destaque>
        <Slide />
      </Destaque>
      <FiltroVideos>
        <TxtVideo>Vídeos</TxtVideo>
        <Botoes>

          {isInspecao && (
            <BotaoAtivado
            onClick={() => {
              setIsInspecao(!isInspecao);
            }}>Inspeção</BotaoAtivado>
          )}
          {!isInspecao && (
            <Botao
            onClick={() => {
              setIsInspecao(!isInspecao);
            }}>Inspeção</Botao>
          )}

          {isRegulagem && (
            <BotaoAtivado
            onClick={() => {
              setIsRegulagem(!isRegulagem);
            }}>Regulagem</BotaoAtivado>
            
          )}
          {!isRegulagem && (
            <Botao
            onClick={() => {
              setIsRegulagem(!isRegulagem);
            }}>Regulagem</Botao>
          )}

          {isAjuste && (
            <BotaoAtivado
            onClick={() => {
              setIsAjuste(!isAjuste);
            }}>Ajuste</BotaoAtivado>
            
          )}
          {!isAjuste && (
            <Botao
            onClick={() => {
              setIsAjuste(!isAjuste);
            }}>Ajuste</Botao>
          )}

          {isSetup && (
            <BotaoAtivado
            onClick={() => {
              setIsSetup(!isSetup);
            }}>Setup</BotaoAtivado>
            
          )}
          {!isSetup && (
            <Botao
            onClick={() => {
              setIsSetup(!isSetup);
            }}>Setup</Botao>
          )}

        </Botoes>

        {isInspecao && (
          <Videos className='justify-content-center gap-5 w-100 mt-5'>
            {inspecao && inspecao.map((inspecao) => (
              <DetalhesConteudo key={inspecao.id} conteudo={inspecao}/>
            ))}
          </Videos>
        )}

        {isRegulagem && (
          <Videos className='justify-content-center gap-5 w-100 mt-5'>
            {regulagem && regulagem.map((regulagem) => (
              <DetalhesConteudo key={regulagem.id} conteudo={regulagem}/>
            ))}
          </Videos>
        )}

        {isAjuste && (
          <Videos className='justify-content-center gap-5 w-100 mt-5'>
            {ajuste && ajuste.map((ajuste) => (
              <DetalhesConteudo key={ajuste.id} conteudo={ajuste}/>
            ))}
          </Videos>
        )}

        {isSetup && (
          <Videos className='justify-content-center gap-5 w-100 mt-5'>
            {setup && setup.map((setup) => (
              <DetalhesConteudo key={setup.id} conteudo={setup}/>
            ))}
          </Videos>
        )}

      </FiltroVideos>
    </StyledDiv>
    
  )
}

export default Home