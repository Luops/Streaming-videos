import React, { Component, useState } from 'react'

import { useNavigate, NavLink } from "react-router-dom";

//hooks
import { useAuthentication } from '../../hooks/useAuthentication';

//Context
import { useAuthValue } from '../../context/AuthContext';

//Styled components
import { 
  StyledNavLink,
  StyledNavBar,
  StyledNavDropdown,
  StyledBtnLink,
  StyledInput,
  StyledButton,
  StyledForm,
  StyledDivUser,
  IconUser,
} from "./styles"

//Bootstrap
import { 
  Container, 
  Nav, 
  Navbar, 
  NavDropdown,
  Form,
  Button
} from 'react-bootstrap';

//Icons
import { FaSearch } from 'react-icons/fa'

//Imagens
import BackgroundImage from '../../img/background.jpg'
import Logo from '../../img/Logo-navbar.png'
import LogoPreto from '../../img/Logo-navbar-preto.png'

const Header = () => {
  const [query, setQuery] = useState("");
  const {user} = useAuthValue();
  const {logout} = useAuthentication();
  const [navBar, setNavBar] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if(query) {
      return navigate(`/search?q=${query}`)
    }
  }

  const changeBackground = () => {
    if(window.scrollY >= 60) {
      setNavBar(true) 
    } else {
      setNavBar(false)
    }
  }
  window.addEventListener('scroll', changeBackground)

  return (
  <StyledNavBar collapseOnSelect expand="lg" className={navBar ? "w-100 bg-primary position-fixed" : "w-100 bg-transparent position-fixed"}>
    <Container>
      <Navbar.Brand>
        <StyledNavLink to="/">
          <img src={navBar ? LogoPreto : Logo} alt="" width="50" />
        </StyledNavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center w-100 gap-4" >
        <StyledNavLink to="/">
          Home
        </StyledNavLink>
        <Nav>
          <StyledNavDropdown title="Processo" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <StyledNavLink to="/processo/bobinagem">
                Bobinagem
              </StyledNavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <StyledNavLink to="/processo/montagemfinal">
                Montagem Final
              </StyledNavLink>
            </NavDropdown.Item>
          </StyledNavDropdown>
          <StyledNavDropdown title="Estações" id="collasible-nav-dropdown">
            <NavDropdown.Item>
              <StyledNavLink to="/estacao/bob09">
                BOB09
              </StyledNavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <StyledNavLink to="/estacao/bob15">
                BOB15
              </StyledNavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <StyledNavLink to="/estacao/bob17">
                BOB17
              </StyledNavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <StyledNavLink to="/estacao/mf02">
                MF02
              </StyledNavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <StyledNavLink to="/estacao/mf03">
                MF03
              </StyledNavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <StyledNavLink to="/estacao/mf05">
                MF05
              </StyledNavLink>
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </StyledNavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="responsive-navbar-nav" className="gap-4">
        <StyledForm onSubmit={handleSubmit} className={navBar ? "d-flex bg-transparent border border-dark" : "d-flex bg-transparent"}>
          <StyledInput 
            type="text" 
            placeholder="Pesquisar"
            onChange={(e) => setQuery(e.target.value)}
            autoFocus={true}
            className={navBar ? "bg-transparent text-black" : "bg-transparent"}/>
          <StyledButton>
            <i>
              <FaSearch/>
            </i>
          </StyledButton>
        </StyledForm>
        <Nav>
          {!user && (
            <StyledBtnLink to="/login" className="btn btn-secondary btn-md active" role="button" aria-pressed="true">
              Login
            </StyledBtnLink>
          )}
          
          <div className="d-flex direction-row">
            {user && (
              <IconUser/>
            )}
            
            {user && (
              <StyledDivUser title="" id="collasible-nav-dropdown" drop="start">
                <NavDropdown.Item>
                  <StyledNavLink to="/adicionar/adicionarConteudo">
                    ADICIONAR CONTEÚDO
                  </StyledNavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <StyledNavLink to="/adicionar/adicionarDestaque">
                    ADICIONAR DESTAQUE
                  </StyledNavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <StyledBtnLink to="/login" 
                    className="btn btn-secondary btn-md active" 
                    role="button" 
                    aria-pressed="true"
                    onClick={logout}
                  >
                    Logout
                  </StyledBtnLink>
                </NavDropdown.Item>
              </StyledDivUser>
            )}
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </StyledNavBar>
  )
}

export default Header