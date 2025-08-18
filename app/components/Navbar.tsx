import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        <p className="text-2xl font-bold text-gradient">Re-Resume</p>
      </Link>
      <Link className="primary-button w-fit" to="/upload">
        Upload Resume
      </Link>
    </nav>
  );
};
export default Navbar;
