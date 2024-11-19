import React from 'react';
import './Card.css'; // Card-specific styles

const Card = ({ name, description, image }) => {
  let imageSrc;

  try {
    // Dynamically load images from src/assets
    imageSrc = require(`../assets/snacks/snack_images/${image.split('/').pop()}`);
  } catch (err) {
    console.error("Error loading image:", image, err);
    imageSrc = "/placeholder-image.jpg"; // Replace with a placeholder image path
  }

  return (
    <div className="card">
      <img src={imageSrc} alt={name} className="card-image" />
      <div className="card-content">
        <h5 className="card-title">{name}</h5>
        <p className="card-description">{description || 'No description available'}</p>
      </div>
    </div>
  );
};

export default Card;
