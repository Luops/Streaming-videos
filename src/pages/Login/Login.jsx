import React, {useState, useEffect} from 'react'

//hooks
import { useAuthentication } from '../../hooks/useAuthentication'

//Icones
import { FaRegUser, FaLock } from "react-icons/fa"

//Styled components
import {
  StyledDivLogin,
  StyledDivBackground,
  StyledLabel,
  StyledInput,
  StyledForm,
  StyledDivFiltro,
  StyledH1,
  StyledH3,
  StyledH4,
  StyledButton
} from "./styles"

import {
} from "../stylesGeral"

//Bootstrap
import { 
  Container,
  Button 
} from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
      
    const user = {
      email,
      password
    }

    const res = await login(user);
    console.log(res)

  }

  useEffect(() => {
    if(authError) {
      setError(authError)
    }
  },[authError])

  return (
    <StyledDivLogin>
      <StyledDivBackground>
        <StyledDivFiltro>
          <StyledH1>Bem-vindo!</StyledH1>
          <StyledH3>Faça o login no sistema para assistir os nossos videos.</StyledH3>
        </StyledDivFiltro>
      </StyledDivBackground>
      <StyledForm 
      onSubmit={handleSubmit}
      className="d-flex flex-column align-items-center">
        <StyledH4>Login</StyledH4>
        <p className="text-secondary opacity-75">Utilize seu E-mail e senha para entrar.</p>
        {/*Email */}
        <StyledLabel 
          htmlFor="formGroupExampleInput"
          className="form-label d-flex flex-row mb-3 justify-content-center align-items-center">
          <i className="mx-2 h5">
            <FaRegUser/>
          </i>
          <StyledInput 
          className="border-0 w-100 p-3"
          type="email" 
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required/>
        </StyledLabel>
        {/*Senha */}
        <StyledLabel 
          htmlFor="formGroupExampleInput"
          className="form-label d-flex flex-row justify-content-center align-items-center">
          <i className="mx-2 h5">
            <FaLock/>
          </i>
          <StyledInput
          className="border-0 w-100 p-3" 
          type="password" 
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          required/>
        </StyledLabel>
        {!loading &&<StyledButton>Entrar</StyledButton>}
        {loading &&<StyledButton>Entrando...</StyledButton>}
        {error && <p className="">{error}</p>}
      </StyledForm>
    </StyledDivLogin>
  )
}

export default Login