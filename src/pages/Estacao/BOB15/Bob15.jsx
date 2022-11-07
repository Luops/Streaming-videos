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
} from '../stylesEstacoes'



export const Bob15 = () => {
    const { documentsBob15: bob15 } = useFetchDocuments("conteudo")
    
  return (
    <Container>
      <TextoBob className='fs-5 text-muted w-100'>Bobinagem 15</TextoBob>
      <Videos>
        {bob15 && bob15.length === 0 &&(
          <h2>Não foram encontrados vídeos desta estação! </h2>
        )}
        {bob15 && bob15.map((bob15) => (
          <DetalhesConteudo key={bob15.id} conteudo={bob15}/>
        ))}
      </Videos>
    </Container>
  )
}

export default Bob15