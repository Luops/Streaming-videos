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



export const Mf05 = () => {
    const { documentsMf05: mf05 } = useFetchDocuments("conteudo")
    
  return (
    <Container>
      <TextoBob className='fs-5 text-muted w-100'>Montagem Final 05</TextoBob>
      <Videos>
        {mf05 && mf05.length === 0 &&(
          <h2>Não foram encontrados vídeos desta estação! </h2>
        )}
        {mf05 && mf05.map((mf05) => (
          <DetalhesConteudo key={mf05.id} conteudo={mf05}/>
        ))}
      </Videos>
    </Container>
  )
}

export default Mf05