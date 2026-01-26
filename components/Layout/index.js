'use client';
import PropTypes from 'prop-types';
import NavBar from '../NavBar'; // Adjust the path if needed

const Layout = ({ children }) => (
  <>
    <div className="background-texture" />
    <NavBar />
    <main className="layout-container">{children}</main>
    <footer>
      <p>&copy; 2026 Twin Paradox - All Rights Reserved</p>
    </footer>
  </>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Layout;
