import React from "react"
import { Link } from 'react-router-dom'
import Button from "../Button/index"
import { Nav, NavbarContainer } from './NavbarElements'


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/" className="navbar-item">
            About me
          </Link>
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/" className="navbar-item">
            About me
          </Link>
        </NavbarContainer>
      </Nav>

    </>

  )
}

export default Navbar