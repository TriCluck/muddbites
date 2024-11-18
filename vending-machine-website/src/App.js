import React from 'react';
import Button from './components/Button';
import './App.css';

const App = () => {
  return (
    <div className="button-container">
      {/* Button 1 */}
      <Button text="Full menu" variant="button1" />

      {/* Button 2 */}
      <Button text="Create an account!" variant="button2" />

      {/* Button 3 - Menu button */}
      <Button text="Menu" variant="menu-button" />

      {/* Button 4 - Email button */}
      <Button text="Email us!" variant="email-button" />
    </div>
  );
};

export default App;
