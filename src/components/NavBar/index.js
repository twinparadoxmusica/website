import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.css';

const NavBar = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/releases', label: 'Releases' },
    { path: '/videos', label: 'Videos' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      {links.map(({ path, label }) => {
        const isActive = location.pathname === path;

        const isHash = path.startsWith('#');
        const isCurrent = isHash && location.hash === path;

        if (isActive || isCurrent) {
          return (
            <span className="nav-link active" key={label}>
              {label}
            </span>
          );
        }

        return isHash ? (
          <a href={path} className="nav-link" key={label}>
            {label}
          </a>
        ) : (
          <Link to={path} className="nav-link" key={label}>
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
