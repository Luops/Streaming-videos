import React from 'react'

//Styled components
import {
  StyledDivLogin,
  StyledSpan,
  StyledLabel
} from "./styles"

import {
} from "../stylesGeral"

//Bootstrap
import { 
  Container, 
} from 'react-bootstrap';

const Login = () => {
  return (
    <StyledDivLogin className="mb-5 w1-100">
      <form className="d-flex flex-column mt-5 w-50 justify-content-center align-items-center">
        {/*Email */}
        <StyledLabel 
          htmlFor="formGroupExampleInput"
          className="form-label d-flex flex-column mb-3">
            <StyledSpan>Email</StyledSpan>
          <input 
          type="email" 
          name="email"
          required/>
        </StyledLabel>
        {/*Senha */}
        <StyledLabel 
          htmlFor="formGroupExampleInput"
          className="form-label d-flex flex-column">
            <StyledSpan>Senha</StyledSpan>
          <input 
          type="password" 
          name="password"
          required/>
        </StyledLabel>
      </form>
    </StyledDivLogin>
  )
}

export default Login