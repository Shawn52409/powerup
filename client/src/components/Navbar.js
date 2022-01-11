import React from "react";

import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="d-flex container-fluid bg-dark">
        <ul className="border navbar-custom nav justify-content-end">
          <li className="nav-item ">
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
    </div>
  );
};

export default Nav;


