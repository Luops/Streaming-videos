import React, {useState} from 'react'


//Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments"

//Styled components
import { 
  Videos
} from "./styles"

import { 
  StyledDiv
} from "../stylesGeral"

//Bootstrap
import { } from 'react-bootstrap';

//Components
import DetalhesConteudo from '../../components/DetalhesConteudo/DetalhesConteudo';

const Home = () => {
  const { documents: conteudo, loading } = useFetchDocuments("conteudo")

  return (
    <StyledDiv>
      Home
      <Videos className='justify-content-center gap-5 w-100 p-1'>
      {conteudo && conteudo.map((conteudo) => (
        <DetalhesConteudo key={conteudo.id} conteudo={conteudo}/>
      ))}
      </Videos>
    </StyledDiv>
    
  )
}

export default Home