import React from 'react';
import Card from './Card'; // Import the Card component
import './Grid.css'; // CardGrid-specific styles

const Grid = ({ snacks }) => {
  console.log(snacks); // Debugging: Ensure snacks are being passed correctly
  return (
    <div className="card-grid">
      {snacks.map((snack, index) => (
        <Card
          key={index}
          name={snack.Name}
          description={snack.Description}
          image={snack.Image}
        />
      ))}
    </div>
  );
};

export default Grid;
