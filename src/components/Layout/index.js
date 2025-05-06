import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar'; // Adjust the path if needed
import { runAnimation } from '../../utils/animation.js';

const Layout = ({ children }) => {
  useEffect(() => {
    runAnimation();
  }, []);

  return (
    <>
      <canvas id="galaxyCanvas"></canvas>
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
};

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
