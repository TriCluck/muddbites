import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonReference from './reference-pages/ButtonRef'; // Your private page
import HomePage from './pages/HomePage'; // Your main public page
import MenuPage from './pages/menu'; // Your default Menu page
import SignupPage from './pages/signup'; // Your default Sign-up page

import routes from './routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path={routes.menu} element={<MenuPage />} />
        <Route path={routes.signup} element={<SignupPage />} />
        <Route path={routes.buttonRef} element={<ButtonReference />} />
      </Routes>
    </Router>
  );
}

export default App;
