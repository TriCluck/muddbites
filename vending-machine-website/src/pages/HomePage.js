import React from 'react';
import NavBar from '../components/NavBar'; // Import the NavBar component
import Footer from "../components/footer";


const HomePage = () => {
  return (
    <>
      {/* Include the NavBar */}
      <NavBar/>

      {/* Main content */}
      <div className="homepage-content">
        <h1> </h1>
      </div>

      {/* Include the footer */}
      <Footer />
    </>
  );
};

export default HomePage;
