import React from "react"
import { useLocation } from "react-router-dom"
import { Nav, NavbarContainer, NavLinkRouter } from './NavbarElements'


const Navbar = ({ routes }) => {
  let location = useLocation();
  return (
    <>
      <Nav style={{ display: location.pathname === "/loginadmin" || location.pathname === "/manager" ? "none" : "block" }}>
        <NavbarContainer>
          {routes.map((routes, i) => routes.path !== "/loginadmin" ?
            < NavLinkRouter to={routes?.path} key={i}>
              {routes.name}
            </NavLinkRouter>
            : null)}
        </NavbarContainer>
      </Nav>

    </>

  )
}

export default Navbar