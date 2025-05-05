import React from 'react';
import { Link } from 'react-router-dom';

function Releases() {
  return (
    <div>
      <h1>Releases</h1>
      <ul>
        <li>
          <Link to="/releases/outbreak">Outbreak</Link>
        </li>
        <li>
          <Link to="/releases/insiders">Insiders</Link>
        </li>
      </ul>
    </div>
  );
}

export default Releases;
