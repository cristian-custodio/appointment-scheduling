import React, { useContext, useState } from "react";
import UserContext from "../../context/userContext";

import "./Navbar.css";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBContainer,
} from "mdbreact";

const Navbar = () => {
  const userContext = useContext(UserContext);

  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <MDBNavbar
        color="primary-color"
        dark
        expand="md"
        fixed="top"
        scrolling
        transparent
      >
        <MDBContainer>
          <MDBNavbarBrand>
            <MDBNavbarBrand>
              <strong className="white-text">
                Schedule your appointment today!
              </strong>
            </MDBNavbarBrand>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={() => setOpen(!isOpen)} />
          <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
            {userContext.currentUser() && (
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu
                      color="indigo"
                      className="dropdown-indigo mr-5"
                    >
                      {/* If user is sales user (ISO Agent)*/}

                      <React.Fragment>
                        <MDBDropdownItem href="/Dashboard">
                          <div style={{ fontWeight: "300" }}>Dashboard</div>
                        </MDBDropdownItem>

                        <MDBDropdownItem href={"/logout"}>
                          <div style={{ fontWeight: "300" }}>Log Out</div>
                        </MDBDropdownItem>
                      </React.Fragment>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">
                    Hi, {userContext.currentUser().email}!
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            )}
            {/* If user is not logged in */}
            {!userContext.currentUser() && (
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink to="/login">
                    <MDBIcon icon="sign-in-alt" /> Sign In
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/register">
                    <MDBIcon icon="user" /> Register
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            )}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Navbar;
