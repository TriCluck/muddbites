import React, { useState } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'
import TextBox from '../components/textBox'
import Button from '../components/Button'
import '../index.css'
import './signup.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);

  // Simplified validation with debugging
  const validateForm = () => {
    // Log the email and phone state to check their values
    console.log("Validating form...");
    console.log("Email:", email);
    console.log("Phone:", phone);

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const phoneRegex = /^[0-9]{10}$/; // Assuming 10-digit phone number

    // Check if both fields are filled
    if (!email || !phone) {
      console.log("Both fields are not filled");
      return '<h5>Please fill in both fields.</h5>';
    }

    // Check email validity
    if (!emailRegex.test(email)) {
      console.log("Email is invalid");
      return '<h5>Please enter a valid email.</h5>';
    }

    // Check phone validity
    if (!phoneRegex.test(phone)) {
      console.log("Phone is invalid");
      return '<h5>Please enter a valid phone number (10 digits).</h5>';
    }

    console.log("Validation successful!");
    return ''; // All valid
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');  // Debug log

    // Validate form data
    const validationError = validateForm(); // Run form validation
    if (validationError) {
      setMessage(validationError); // Display validation error message
      return;
    }

    try {
      // Send data to the back-end
      const response = await axios.post('http://localhost:5001/api/data', { email, phone });
      console.log(response.data); // Debug log

      if (response.data.message === 'User already exists') {
        setMessage('<h5>User with this email or phone number already exists.</h5>');
      } 
      else {
        setMessage('<h5>Thank you for signing up!</h5>');
        setIsFormSubmitted(true); // Hide the form after success
      }
    } catch (error) {
      console.error('Error saving data:', error);
      setMessage('<h5>There was an error submitting the form.</h5>');
    }
  };

  return (
    <>
      <NavBar />
      <div className='signup-page'>
        <div className='signup-content'>
          <h4>
            Leave us your information, and we will reach out when we have
            promotions or new updates of snacks and new locations!
          </h4>

          {!isFormSubmitted ? (
            <form onSubmit={handleSubmit} className="signup-form">
              <div className='input-fields'>
                <TextBox
                  placeholder='Enter email'
                  maxLength={50}
                  value={email}
                  onChange={handleEmailChange}
                />
                <TextBox
                  placeholder='Phone #'
                  maxLength={15}
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>

              {/* Render message */}
              {message && <div className="message" dangerouslySetInnerHTML={{ __html: message }} />}

              <div className='signup-button-container'>
                <Button text='Create account' variant='sign-up-button' onClick={handleSubmit} />
              </div>
            </form>
          ) : (
            <h5>Thank you for signing up!</h5>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;