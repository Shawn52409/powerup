import React from "react";
import { NavLink } from "react-router-dom";
import questionBlock from './favicon-block.png'


const Nav = () => {
  return (
    <div className=" powerup-font container-fluid bg-danger justify-content-center align-items-center py-2">
        <ul className="text-light navbar-custom nav justify-content-end py-2">
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
      <div className="d-flex justify-content-center py-3">
        <img className='text-center img-smaller' src={questionBlock}></img>
        <h1 className="mx-4 h1-custom px-4 me-5 text-center">Power Up</h1>
        <img className='text-center img-smaller' src={questionBlock}></img>
      </div>
    </div>
  );
};

export default Nav;


