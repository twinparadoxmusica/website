import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Releases from './pages/releases';
import Outbreak from './pages/outbreak';
import Insiders from './pages/insiders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/releases" element={<Releases />} />
        <Route path="/releases/outbreak" element={<Outbreak />} />
        <Route path="/releases/insiders" element={<Insiders />} />
      </Routes>
    </Router>
  );
}

export default App;
