import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/">
        <h2>Pokemon</h2>
      </Link>
      <Link to="/team">
        <h2>Team</h2>
      </Link>
    </div>
  );
};

export default Navbar;
