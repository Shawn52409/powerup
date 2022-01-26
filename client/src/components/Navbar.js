import React from "react";
import { NavLink } from "react-router-dom";
import questionBlock from "./favicon-block.png";
import auth from "../utils/auth";

const Nav = () => {
  return (
    <div className="navBar powerup-font container-fluid justify-content-center align-items-center py-2">
      <ul className="text-light navbar-custom nav justify-content-center py-2">
        <li className="nav-item">
          <NavLink
            className="nav-link text-light"
            activeClassName="active"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link text-light"
            activeClassName="active"
            to="/mygames"
          >
            My Games
          </NavLink>
        </li>
        {auth.loggedIn() ? (
          <li className="nav-item">
            <NavLink
              className="nav-link text-light"
              activeClassName="active"
              to="/login/"
              onClick={auth.logout}
            >
              Logout
            </NavLink>
          </li>
        ) : (
          <li className="nav-item">
            <NavLink
              className="nav-link text-light"
              activeClassName="active"
              to="/login/"
            >
              Login
            </NavLink>
          </li>
        )}
        {auth.loggedIn() ? (
          <div></div>
        ) : (
          <li className="nav-item">
            <NavLink
              className="nav-link text-light"
              activeClassName="active"
              to="/signup"
            >
              Signup
            </NavLink>
          </li>
        )}
      </ul>
      <div className="d-flex justify-content-center py-3">
        <img
          className="text-center img-fluid img-smaller img-spin"
          src={questionBlock}
          alt="Question Block"
        ></img>
        <h1 className="mx-4 fs-5 h1-custom px-4 me-5 text-center">Power Up</h1>
        <img
          className="text-center img-fluid img-smaller img-spin"
          src={questionBlock}
          alt="Question Block"
        ></img>
      </div>
    </div>
  );
};

export default Nav;
