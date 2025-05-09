'use client';
import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar/index.js'; // Adjust the path if needed
import GalaxyCanvas from '../../utils/animation.js';

const Layout = ({ children }) => (
  <>
    <GalaxyCanvas />
    <NavBar />
    <main className="layout-container">{children}</main>
    <footer>
      <p>
        &copy; 2025 Twin Paradox
        <br />
        All rights reserved
      </p>
    </footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
