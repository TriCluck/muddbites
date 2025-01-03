import React, { useState } from 'react'
import Button from '../components/Button'
import logo from '../assets/logo/logo.png' // Import the logo correctly
import './NavBar.css'

import { useNavigate, Link } from 'react-router-dom'
import routes from '../routes'

const NavBar = () => {
  const menu_route = routes.menu // if we need to change the path for menu change this line
  const signup_route = routes.signup // if we need to change the path for signup change this line
  const home_route = routes.home // if we need to change the path for home change this line

  const navigate = useNavigate()

  const [showPopup, setShowPopup] = useState(false)

  const handleSignupClick = () => {
    navigate(signup_route) // Navigate to the Sign-up page
  }
  const handleMenuClick = () => {
    navigate(menu_route) // Navigate to the Menu page
  }
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('convidenthelp@gmail.com')
    setShowPopup(true)

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false)
    }, 1500)
  }

  return (
    <nav className='nav-bar'>
      {/* Logo */}
      <div className='nav-logo'>
        <Link to={home_route}>
          <img src={logo} alt='Mudd Bites Logo' />
        </Link>
      </div>

      {/* Navigation Groups */}
      <div className='nav-groups'>
        {/* Group 1: Menu, Contact, Suggestions */}
        <div className='nav-links'>
          <Button text='menu' variant='menu-button' onClick={handleMenuClick} />
          <div className='contact-group'>
            <Button
              text='contact'
              variant='menu-button'
              onClick={handleCopyEmail}
            />
            {showPopup && (
              <div className='popup'>
                <p>Email copied to clipboard!</p>
              </div>
            )}
          </div>
          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSfATW24tvACDxYcXLBZCCkVjcq7U5ZIQd87M3_9Q2YTMClY7w/viewform?usp=sf_link'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button
              text='suggestions'
              variant='menu-button'
              onClick={handleSignupClick}
            />
          </a>
        </div>

        {/* Group 2: Sign-up */}
        <div className='signup-link'>
          <Button text='sign up' variant='menu-button' onClick={handleSignupClick} />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
