import * as React from "react"
import { Navbar } from 'react-bootstrap'
// import { Container } from 'react-bootstrap'
import { Link } from "gatsby"

const NavDark = (
    <Navbar bg="" expand="lg" className="navbar-dark">
      <Navbar.Brand href="/" className="ms-3 brando">1140nft</Navbar.Brand>
      <div id="nav-launch" className="mt-3 ms-2"><h6>Launching Summer 2022</h6></div>
      <Navbar.Toggle className="me-3 custom-toggler"/>
      <Navbar.Collapse className="justify-content-end me-3">
        <Navbar.Text className="text-white ms-3 nav-right">
        <Link className="me-3" to="/about">About</Link>
        <Link className="me-3" to="/blog">Blog</Link>
        <Link className="me-3" to="/partnerships">Partnerships</Link>
        <Link className="me-3" to="/whitepaper">Whitepaper</Link>
        </Navbar.Text>
      </Navbar.Collapse>
  </Navbar>
)

export default NavDark
