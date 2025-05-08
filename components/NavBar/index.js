'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles.css';

const NavBar = () => {
  const pathname = usePathname();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/releases', label: 'Releases' },
    { path: '/videos', label: 'Videos' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      {links.map(({ path, label }) => {
        const isActive = pathname === path;

        return (
          <Link
            href={path}
            key={label}
            className={`nav-link ${isActive ? 'active' : ''}`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
