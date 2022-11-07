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



export const MontagemFinal = () => {
    const { documentsMontagem: montagem } = useFetchDocuments("conteudo")
    
  return (
    <Container>
      <TextoBob className='fs-5 text-muted w-100'>Montagem Final</TextoBob>
      <Videos>
        {montagem && montagem.length === 0 &&(
          <h2>Não foram encontrados vídeos deste processo! </h2>
        )}
        {montagem && montagem.map((montagem) => (
          <DetalhesConteudo key={montagem.id} conteudo={montagem}/>
        ))}
      </Videos>
    </Container>
  )
}

export default MontagemFinal