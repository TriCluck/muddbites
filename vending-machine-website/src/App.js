import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonReference from './reference-pages/ButtonRef'; // Your private page
import HomePage from './pages/HomePage'; // Your main public page
import MenuPage from './pages/menu'; // Your default Menu page


function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />


        {/* Private route */}
        <Route path="/buttonref" element={<ButtonReference />} />
      </Routes>
    </Router>
  );
}

export default App;
