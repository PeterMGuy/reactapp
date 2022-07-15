import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from 'react';

export default function Navbar() {
  return (
    <nav className="nav">
      
      <ul>
        <CustomLink to="/" className="site-title">HomePage</CustomLink>
        <CustomLink to="/pricing">PricingPage</CustomLink>
        <CustomLink to="/about">AboutPage</CustomLink>
      </ul>
    </nav>
  )
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
};