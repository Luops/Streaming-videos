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



export const Bob09 = () => {
    const { documentsBob09: bob09 } = useFetchDocuments("conteudo")

    console.log(bob09)
    
  return (
    <Container>
      <TextoBob className='fs-5 text-muted w-100'>Bobinagem 09</TextoBob>
      <Videos>
        {bob09 && bob09.length === 0 &&(
          <h2>Não foram encontrados vídeos específicos desta estação!</h2>
        )}
        {bob09 && bob09.map((bob09) => (
          <DetalhesConteudo key={bob09.id} conteudo={bob09}/>
        ))}
      </Videos>
    </Container>
  )
}

export default Bob09