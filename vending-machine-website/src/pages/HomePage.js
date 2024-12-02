import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'; // Import the NavBar component
import Footer from '../components/footer';
import './HomePage.css';
import video from '../assets/video/video.mp4'; // Import the video file
import Button from '../components/Button';
import image from '../assets/team_photo.png'; // Import the image file
import map_image from '../assets/muddbites.jpeg'; // Import the image file


import snackofferingsCSV from '../assets/snacks/snackofferings.csv'; // CSV file 
import Papa from 'papaparse';
import CardGrid from '../components/Grid'; // Ensure correct case



const HomePage = () => {

  // State to store the parsed snack data 
  const [snacks, setSnacks] = useState([]); 
  
  // Use effect to parse CSV when the component mounts 
  useEffect(() => {
    Papa.parse(snackofferingsCSV, {
      header: true, 
      download: true, 
      complete: (result) => {
        console.log("Parsed CSV Data", result.data); // Log parsed data for debugging 
        const filteredSnacks = result.data.filter((item) => item.Name && item.Image); 
        console.log("Filtered Snacks:", filteredSnacks); // Log valid snacks for debugging
        setSnacks(filteredSnacks); // Set the parsed snacks into state
      }, 
      error: (err) => console.error("Error parsing CSV:", err), // Error handling
    }); 
  }, []); 

  return (
    <>
      {/* Include the NavBar */}
      <NavBar />

      {/* Main content */}
      <div className='home-page'>
        {/* Background image container that will just encompass everything */}
        <div className='background-container'>
          {/* Video + title  */}
          <div className='hero-section'>
            {/* Video container */}
            <div className='video-background'>
              <video autoPlay loop muted>
                <source src={video} type='video/mp4' />
                Your browser does not support the video tag.
              </video>

              {/* Content within the video div */}
              <div className='content-wrapper'>
                <h1>muddBites</h1>
                <h3>Bringing you a little something that feels like home</h3>
              </div>
            </div>
          </div>

          {/* Team photo + mission statement*/}
          <div className='flex-row-container'>
            {/* Left Side: Centered Image */}
            <div className='left-side'>
              <img src={image} alt='team photo' className='centered-image' />
            </div>

            {/* Right Side: Column Layout */}
            <div className='right-side'>
              {/* Who Are We Section */}
              <div className='about-us-section'>
                <h2>Who are we?</h2>
                <p>
                  A few nights at Mudd every year during midterm and final
                  season made us realize that we want something more than just
                  small bites to eat.
                </p>
                <p>We’re just a startup trying to change that.</p>
              </div>

              {/* Interest Section for Discounts */}
              <div className='interest-section'>
                <h5>Interested in discounts and updates?</h5>
                <Button text='create an account!' variant='button2' />
              </div>
            </div>
          </div>

          {/* Mini snack offerings*/}

          <div className='next-section'>
            {/* Subheading (H2) */}
            <h2 className='alt'>our snack offerings</h2>
            {/* Yellow Box with Snack Cards */}
          <div class="card-grid-wrapper">
            <div className='yellow-box'>
              {/* CardGrid to display snacks inside the yellow box */}
              <CardGrid snacks={snacks} />
            </div>
            {/* Full Catalog Button */}
            <Button text='Full menu' variant='button1' />
          </div>

          {/* Current Locations */}
          <div className = 'location-section'></div>
            {/* Small Heading (H4) */}
            <h4>current locations</h4>

            <div className="location-box-container">
            <div className="location-box">
            {/* Main Content */}
              <h4 className="alt">Currently, we're only at <br />
              Seeley G. Mudd Library <br />
              <br />
              Northwestern University</h4>
              </div>
              <div className="overlay">
              <img src={map_image} className="overlay-photo" />
            </div>
          </div>

        </div>
      </div>
    </div>

      


      {/* Include the footer */}
      <Footer />
    </>
  )
}

export default HomePage
