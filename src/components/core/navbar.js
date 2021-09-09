import React from "react";
import { Link } from "react-router-dom";
import "../../components_css/core_css/navbar.css";
const NavBar = () => {
  return (
    <div id="navbar-layout">
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
        </ul>
      </nav>
    </div>
  );
};
export default NavBar;
