import React from "react";

import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/login/">
            Login
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/signup">
            Signup
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/mygames">
            My Games
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;


