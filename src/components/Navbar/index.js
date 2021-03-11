import React from "react"
import { Link } from 'react-router-dom'
import Button from "../Button/index"
import { Nav, NavbarContainer, NavLinkRouter } from './NavbarElements'


const Navbar = ({ routes }) => {
  console.log(routes, "router")
  return (
    <>
      <Nav>
        <NavbarContainer>
          {routes.map(routes => <NavLinkRouter to={routes?.path}>{routes.name} </NavLinkRouter>)}

        </NavbarContainer>
      </Nav>

    </>

  )
}

export default Navbar