import React from "react";
import { Nav, NavbarContainer, NavLinkRouter } from "./NavbarElements";

const Navbar = ({ routes }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          {routes
            .filter((v) => !v.isPrivate)
            .map((routes, i) =>
              routes.path !== "/login-admin" ? (
                <NavLinkRouter to={routes?.path} key={i}>
                  {routes.name}
                </NavLinkRouter>
              ) : null
            )}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
