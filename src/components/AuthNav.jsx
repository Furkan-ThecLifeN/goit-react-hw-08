import React from 'react'
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className="AuthBtn">Register</NavLink>
      <NavLink to="/login" className="AuthBtn">Login</NavLink>
    </div>
  );
};

export default AuthNav;
