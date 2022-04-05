import * as React from "react"
import { Navbar } from 'react-bootstrap'
// import { Container } from 'react-bootstrap'
import { Link } from "gatsby"

const NavDark = (
    <Navbar bg="" expand="lg" className="navbar-dark">
      <Navbar.Brand href="/" className=" brando">1140nft</Navbar.Brand>
      
      <div id="nav-launch" className="mt-3 ms-2"><h6>Launching Summer 2022</h6></div>
      <Navbar.Toggle className="me-3 custom-toggler"/>
      <Navbar.Collapse className="justify-content-end me-3">
        <Navbar.Text className="text-white ms-3 nav-right">
        <Link className="me-3 navlink ookii" to="/about">About</Link>
        <Link className="me-3 navlinkn ookii" to="/faq">FAQ</Link>
        <Link className="me-3 navlink ookii" to="/blog">Blog</Link>
        <Link className="me-3 navlink ookii" to="/partners">Partners</Link>
        <Link className="me-3 navlink ookii" to="/whitepaper">Whitepaper</Link>
        <div className="ms-3">
        <ul>
            <li className="chiisai"><Link className="me-3 navlink chiisai" to="/about">About</Link></li>
            <li className="chiisai"><Link className="me-3 navlinkn chiisai" to="/faq">FAQ</Link></li>
            <li className="chiisai"><Link className="me-3 navlink chiisai" to="/blog">Blog</Link></li>
            <li className="chiisai"><Link className="me-3 navlink chiisai" to="/partners">Partners</Link></li>
            <li className="chiisai"><Link className="me-3 navlink chiisai" to="/whitepaper">Whitepaper</Link></li>
            
          </ul>

        </div>
       
        </Navbar.Text>
      </Navbar.Collapse>
  </Navbar>
)

export default NavDark
