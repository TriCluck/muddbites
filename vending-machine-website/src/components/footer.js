import React from 'react'
import Button from '../components/Button' // Import the Button component
import '../components/Button.css' // Import the Button styles
import '../index.css' // Import the global styles
import './footer.css' // Import any specific footer styles

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-headings'>
        <h4>Have feedback? Want to recommend new snacks?</h4>
        <h4>Or want our machine at your location?</h4>
      </div>
      <div className='footer-buttons'>
        {/* Contact Us button styled using H4 */}
        <h5 className='contact-us'>Contact us →</h5>
        {/* Email button using the pre-existing variant */}
        <Button text='Email' variant='email-button' />
      </div>
    </footer>
  )
}

export default Footer
