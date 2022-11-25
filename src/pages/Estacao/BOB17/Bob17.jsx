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



export const Bob17 = () => {
    const { documentsBob17: bob17 } = useFetchDocuments("conteudo")
    
  return (
    <Container>
      <TextoBob className='fs-5 text-muted w-100'>Bobinagem 17</TextoBob>
      <Videos>
        {bob17 && bob17.length === 0 &&(
          <h2>Não foram encontrados vídeos específicos desta estação! </h2>
        )}
        {bob17 && bob17.map((bob17) => (
          <DetalhesConteudo key={bob17.id} conteudo={bob17}/>
        ))}
      </Videos>
    </Container>
  )
}

export default Bob17