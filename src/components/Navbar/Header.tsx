import React, { Component } from 'react'

import { NavLink } from "react-router-dom";

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
  IconUser
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

const Header = () => {
  const {user} = useAuthValue();
  const {logout} = useAuthentication();

  return (
  <StyledNavBar collapseOnSelect expand="lg" className="w-100 bg-transparent position-fixed">
    <Container>
      <Navbar.Brand>
        <StyledNavLink to="/">Teste</StyledNavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center w-100 gap-4" >
        <StyledNavLink to="/" className="">
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
        <StyledForm className="d-flex bg-white">
          <StyledInput 
            type="text" 
            placeholder="Pesquisar"
            autoFocus={true}/>
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
                  <StyledNavLink to="/adicionar/conteudo">
                    ADICIONAR CONTEÚDO
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