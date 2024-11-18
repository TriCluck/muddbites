import React from 'react'
import NavBar from '../components/NavBar' // Import the NavBar component
import Footer from '../components/footer'
import './signup.css'

const signup = () => {
  return (
    <>
      {/* Include the NavBar */}
      <NavBar />
      {/* Main content */}
      <div className='signup-page'>
        <div className='content-wrapper'>
            <h4>Sign up</h4>
        </div>
      </div>

      {/* Include the footer */}
      <Footer />
    </>
  )
}

export default signup
