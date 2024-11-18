import React from 'react'
import NavBar from '../components/NavBar' // Import the NavBar component
import Footer from '../components/footer'
import './HomePage.css'

const HomePage = () => {
  return (
    <>
      {/* Include the NavBar */}
      <NavBar />
      {/* Main content */}
      <div className='home-page'>
        <div className='content-wrapper'>
        </div>
      </div>

      {/* Include the footer */}
      <Footer />
    </>
  )
}

export default HomePage
