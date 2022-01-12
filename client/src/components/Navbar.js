import React from "react";
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <div className="container-fluid bg-dark justify-content-center align-items-center py-2">
        <ul className="text-light navbar-custom nav justify-content-end">
          <li className="nav-item">
            <NavLink className="nav-link text-light" activeClassName="active" to="/login/">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" activeClassName="active" to="/signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" activeClassName="active" to="/mygames">
              My Games
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
        </ul>
      <h1 className="h1-custom px-4 me-5 text-center">Power Up</h1>
    </div>
  );
};

export default Nav;


