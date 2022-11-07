import React from 'react'

//hooks
import { useFetchDocuments } from '../../../hooks/useFetchDocuments';

//Components
import DetalhesConteudo from '../../../components/DetalhesConteudo/DetalhesConteudo';

//Styled components
import {
  Container,
  TextoBob,
  Videos
} from '../stylesProcessos'



export const Bobinagem = () => {
    const { documentsBobinagem: bobinagem } = useFetchDocuments("conteudo")
    
  return (
    <Container>
      <TextoBob className='fs-5 text-muted w-100'>Bobinagem</TextoBob>
      <Videos>
        {bobinagem && bobinagem.length === 0 &&(
          <h2>Não foram encontrados vídeos deste processo! </h2>
        )}
        {bobinagem && bobinagem.map((bobinagem) => (
          <DetalhesConteudo key={bobinagem.id} conteudo={bobinagem}/>
        ))}
      </Videos>
    </Container>
  )
}

export default Bobinagem