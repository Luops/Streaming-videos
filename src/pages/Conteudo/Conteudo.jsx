import React from 'react'

//Hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

//Styled components
import { 
  } from "./styles"
  
  import { 
    StyledDiv
  } from "../stylesGeral"
  
//Bootstrap
import { } from 'react-bootstrap';

const Conteudo = () => {
    const {id} = useParams();
    const { document: conteudo, loading} = useFetchDocument("conteudo", id)

  return (
    <StyledDiv>
        {loading && <p>Carregando conteudo!</p>}
        {conteudo && (
            <>
                <h1>{conteudo.titulo}</h1>
            </>
        )}
    </StyledDiv>
  )
}

export default Conteudo