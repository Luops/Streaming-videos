import React from 'react'
import { Link } from "react-router-dom";

//Hooks
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'

//Componentes
import DetalhesConteudo from '../../components/DetalhesConteudo/DetalhesConteudo'

//Styled components
import {
  } from "./styles"

import {
    StyledDiv
} from "../stylesGeral"

const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    const {documents: conteudo} = useFetchDocuments("conteudo", search);

  return (
    <StyledDiv>
        <h2>Search</h2>
        <div>
            {conteudo && conteudo.length === 0 && (
                <>
                    <p>Não foram encontrados conteúdos a partir da sua busca..</p>
                    <Link to="/">
                        Voltar
                    </Link>
                </>
            )}
            {conteudo && conteudo.map((conteudo) => (
                <DetalhesConteudo key={conteudo.id} conteudo={conteudo}/>
            ))}
        </div>
    </StyledDiv>
  )
}

export default Search