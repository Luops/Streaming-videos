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



export const Mf02 = () => {
    const { documentsMf02: mf02 } = useFetchDocuments("conteudo")
    
  return (
    <Container>
      <TextoBob className='fs-5 text-muted w-100'>Montagem Final 02</TextoBob>
      <Videos>
        {mf02 && mf02.length === 0 &&(
          <h2>Não foram encontrados vídeos específicos desta estação!</h2>
        )}
        {mf02 && mf02.map((mf02) => (
          <DetalhesConteudo key={mf02.id} conteudo={mf02}/>
        ))}
      </Videos>
    </Container>
  )
}

export default Mf02