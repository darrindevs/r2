import * as React from "react"
import { Navbar } from 'react-bootstrap'
// import { Container } from 'react-bootstrap'

const NavDark = (
    <Navbar bg="" expand="lg" className="navbar-dark">
      <Navbar.Brand href="#home" className="ms-3">1140nft</Navbar.Brand>
      <Navbar.Toggle className="me-3 custom-toggler"/>
      <Navbar.Collapse className="justify-content-end me-3">
        <Navbar.Text className="text-white ms-3 nav-right">
          some links
        </Navbar.Text>
      </Navbar.Collapse>
  </Navbar>
)

export default NavDark
