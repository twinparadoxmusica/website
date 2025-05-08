import React from 'react';
import PropTypes from 'prop-types';
// app/layout.js
import './global.css'; // optional, create if needed

export const metadata = {
  title: 'Twin Paradox',
  description: 'Electronic music that bends reality.',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.func,
};

export default RootLayout;
