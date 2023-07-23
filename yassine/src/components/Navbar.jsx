import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
            <h3>
              DUNK <br /> IN <br /> OTTAWA
            </h3>
          </div>
          <div className="links">
            <ul>
              <li>
                <NavLink to="/" className="link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/coaches" className="link">
                  COACHES
                </NavLink>
              </li>
              <li>
                <NavLink to="/program" className="link">
                  SERVICES <i className="fa fa-caret-down"></i>
                  <div className="dropdown">
                    <li>
                      <NavLink to="/program" className="menu">
                        OUR PROGRAMS
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/book" className="menu">
                        BOOK FIELD
                      </NavLink>
                    </li>
                  </div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="link">
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
