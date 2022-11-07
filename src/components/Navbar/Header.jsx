import React, { Component, useState, useEffect } from 'react'

import { useNavigate, NavLink, useLocation } from "react-router-dom";

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
  StyledUl
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
  const [showDropDownProcesso, setShowDropDownProcesso] = useState(false)
  const [showDropDownEstacao, setShowDropDownEstacao] = useState(false)

  const paginaAtual = useLocation();

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
  
  <div>
    {paginaAtual.pathname === "/" && (
      <StyledNavBar collapseOnSelect expand="lg" className={navBar ? "w-100 bg-primary position-fixed" : "w-100 bg-transparent position-fixed"}>
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <NavLink to="/" onClick={() => {showDropDownEstacao(true); showDropDownProcesso(true);}}>
              <img src={navBar ? LogoPreto : Logo} alt="" width="40" />
            </NavLink>
            <h1 className="text-white text-bold font-weight-bold text-uppercase mt-1">tdk</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center w-100 gap-4" >
            <NavLink to="/" className="text-white text-decoration-none font-weight-bold" onClick={() => {
              showDropDownEstacao(true);
              showDropDownProcesso(true);
              }}>
              <h6>Home</h6>
            </NavLink>
            <Nav>
              {/* Processo */}
              <div className='dropdown'>
                <button className='btn text-white border-0 dropdown-toggle font-weight-bold d-flex align-items-center' 
                data-bs-toggle="dropdown" 
                onClick={() => {
                setShowDropDownProcesso(!showDropDownProcesso);
                setShowDropDownEstacao(false);}}
                >
                  <h6>Processo</h6>
                </button>
                <StyledUl className={showDropDownProcesso ? "d-flex position-absolute bg-white text-black flex-column" : "d-none"}>
                  <StyledNavLink to="/processo/bobinagem" onClick={() => {
                    showDropDownEstacao(true);
                    showDropDownProcesso(true);
                    }}>
                      Bobinagem
                  </StyledNavLink>
                  <StyledNavLink to="/processo/montagemfinal" onClick={() => {
                    showDropDownEstacao(true);
                    showDropDownProcesso(true);
                    }}>
                      Montagem Final
                  </StyledNavLink>
                </StyledUl>
              </div>
              {/* Estações */}
              <div className='dropdown'>
                <button className='btn text-white border-0 dropdown-toggle font-weight-bold d-flex align-items-center' 
                data-bs-toggle="dropdown" 
                onClick={() => {
                setShowDropDownEstacao(!showDropDownEstacao);
                setShowDropDownProcesso(false);}}
                >
                  <h6>Estações</h6>
                </button>
                <StyledUl className={showDropDownEstacao ? "d-flex position-absolute bg-white text-black flex-column" : "d-none"}>
                  <StyledNavLink to="/estacao/bob09" onClick={() => {
                    showDropDownEstacao(true);
                    showDropDownProcesso(true);
                    }}>
                      BOB09
                  </StyledNavLink>
                  <StyledNavLink to="/estacao/bob15" onClick={() => {
                    showDropDownEstacao(true);
                    showDropDownProcesso(true);
                    }}>
                      BOB15
                  </StyledNavLink>
                  <StyledNavLink to="/estacao/bob17" onClick={() => {
                    showDropDownEstacao(true);
                    showDropDownProcesso(true);
                    }}>
                      BOB17
                  </StyledNavLink>
                  <StyledNavLink to="/estacao/mf02" onClick={() => {
                    showDropDownEstacao(true);
                    showDropDownProcesso(true);
                    }}>
                      MF02
                  </StyledNavLink>
                  <StyledNavLink to="/estacao/mf03" onClick={() => {
                    showDropDownEstacao(true);
                    showDropDownProcesso(true);
                    }}>
                      MF03
                  </StyledNavLink>
                  <StyledNavLink to="/estacao/mf05" onClick={() => {
                    showDropDownEstacao(true);
                    showDropDownProcesso(true);
                    }}>
                      MF05
                  </StyledNavLink>
                </StyledUl>
              </div>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="responsive-navbar-nav" className="gap-4">
            <StyledForm onSubmit={handleSubmit} className="d-flex bg-white border border-dark">
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
    )}
    {paginaAtual.pathname !== "/" && (
      <StyledNavBar collapseOnSelect expand="lg" className={"w-100 bg-primary position-fixed"}>
        <Container>
          <Navbar.Brand className="d-flex align-items-center">
            <NavLink to="/" onClick={() => {showDropDownEstacao(true); showDropDownProcesso(true);}}>
              <img src={navBar ? LogoPreto : Logo} alt="" width="40" />
            </NavLink>
            <h1 className="text-white text-bold font-weight-bold text-uppercase mt-1">tdk</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center w-100 gap-4" >
            <NavLink to="/" className="text-white text-decoration-none font-weight-bold" onClick={() => {
              showDropDownEstacao(true);
              showDropDownProcesso(true);
              }}>
              <h6>Home</h6>
            </NavLink>
            <Nav>
              {/* Processo */}
              <div className='dropdown'>
                <button className='btn text-white border-0 dropdown-toggle font-weight-bold d-flex align-items-center' 
                data-bs-toggle="dropdown" 
                onClick={() => {
                setShowDropDownProcesso(!showDropDownProcesso);
                setShowDropDownEstacao(false);}}
                >
                  <h6>Processo</h6>
                </button>
                <StyledUl className={showDropDownProcesso ? "d-flex position-absolute bg-white text-black flex-column" : "d-none"}>
                  <StyledNavLink to="/processo/bobinagem" onClick={() => {
                    showDropDownEstacao(true);
                    showDropDownProcesso(true);
                    }}>
                      Bobinagem
                  </StyledNavLink>
                  <StyledNavLink to="/processo/montagemfinal" onClick={() => {
                    showDropDownEstacao(true);
                    showDropDownProcesso(true);
                    }}>
                      Montagem Final
                  </StyledNavLink>
                </StyledUl>
              </div>
              {/* Estações */}
              <div className='dropdown'>
                <button className='btn text-white border-0 dropdown-toggle font-weight-bold d-flex align-items-center' 
                data-bs-toggle="dropdown" 
                onClick={() => {
                setShowDropDownEstacao(!showDropDownEstacao);
                setShowDropDownProcesso(false);}}
                >
                  <h6>Estações</h6>
                </button>
                <StyledUl className={showDropDownEstacao ? "d-flex position-absolute bg-white text-black flex-column" : "d-none"}>
                  <StyledNavLink to="/estacao/bob09" onClick={() => {
                    showDropDownEstacao(true);
                    showDropDownProcesso(true);
                    }}>
                      BOB09
                  </StyledNavLink>
                  <StyledNavLink to="/estacao/bob15" onClick={() => {
                    showDropDownEstacao(true);
                    showDropDownProcesso(true);
                    }}>
                      BOB15
                  </StyledNavLink>
                  <StyledNavLink to="/estacao/bob17" onClick={() => {
                    showDropDownEstacao(true);
                    showDropDownProcesso(true);
                    }}>
                      BOB17
                  </StyledNavLink>
                  <StyledNavLink to="/estacao/mf02" onClick={() => {
                    showDropDownEstacao(true);
                    showDropDownProcesso(true);
                    }}>
                      MF02
                  </StyledNavLink>
                  <StyledNavLink to="/estacao/mf03" onClick={() => {
                    showDropDownEstacao(true);
                    showDropDownProcesso(true);
                    }}>
                      MF03
                  </StyledNavLink>
                  <StyledNavLink to="/estacao/mf05" onClick={() => {
                    showDropDownEstacao(true);
                    showDropDownProcesso(true);
                    }}>
                      MF05
                  </StyledNavLink>
                </StyledUl>
              </div>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="responsive-navbar-nav" className="gap-4">
            <StyledForm onSubmit={handleSubmit} className="d-flex bg-white border border-dark">
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
    )}
  </div>
  )
}

export default Header