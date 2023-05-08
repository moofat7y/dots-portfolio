import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Asset1.png";
const Header = () => {
  return (
    <nav
      style={{ zIndex: "100" }}
      className="navbar position-absolute w-100 navbar-expand-md py-md-4"
    >
      <div className="container-fluid px-md-5">
        <a className="navbar-brand" href="#">
          <img className="logo" src={Logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-start w-50"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <NavLink to="" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/portfolio" className="nav-link">
                Portfolio
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
