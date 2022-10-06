import React from 'react'

//Styled components
import { 

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
    <div className="w-100 text-center align-items-center justify-content-center bg-secondary bg-gradient">
      <p className="text-uppercase fs-3 fw-bold">Footer</p>
    </div>
  )
}

export default Footer