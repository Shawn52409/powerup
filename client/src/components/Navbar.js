import React from "react";

import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container-fluid bg-dark justify-content-center align-items-center py-2">
      <h1 className="px-4 me-5 text-center">Power Up</h1>
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


