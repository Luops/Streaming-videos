import React from 'react'

//Styled components
import { 
  Div
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


const Footer = () => {
  return (
    <Div className="w-100 text-center align-items-center justify-content-center bg-secondary bg-gradient">
      <p className="text-uppercase fs-3 fw-bold">Footer</p>
    </Div>
  )
}

export default Footer