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



export const Mf03 = () => {
    const { documentsMf03: mf03 } = useFetchDocuments("conteudo")
    
  return (
    <Container>
      <TextoBob className='fs-5 text-muted w-100'>Montagem Final 03</TextoBob>
      <Videos>
        {mf03 && mf03.length === 0 &&(
          <h2>Não foram encontrados vídeos específicos desta estação!</h2>
        )}
        {mf03 && mf03.map((mf03) => (
          <DetalhesConteudo key={mf03.id} conteudo={mf03}/>
        ))}
      </Videos>
    </Container>
  )
}

export default Mf03