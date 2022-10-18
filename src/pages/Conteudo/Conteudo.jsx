import React from 'react'

//Hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

//Styled components
import { 
  ConteudoContainer
} from "./styles"
  
import { 
} from "../stylesGeral"
  
//Bootstrap
import { } from 'react-bootstrap';

const Conteudo = () => {
    const {id} = useParams();
    const { document: conteudo, loading} = useFetchDocument("conteudo", id)

  return (
    <ConteudoContainer>
        {loading && <p>Carregando conteudo!</p>}
        {conteudo && (
            <>
                <h1>{conteudo.titulo}</h1>
            </>
        )}
    </ConteudoContainer>
  )
}

export default Conteudo