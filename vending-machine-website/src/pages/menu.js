import React from 'react';
import NavBar from '../components/NavBar'; // Import the NavBar component
import Button from "../components/Button"; // This has all of the buttons you need
import '../index.css' // Import the global styles, it has all the fonts pre-loaded
import Footer from "../components/footer";
import './menu.css'; // You will write your menu CSS here

/* 
    This is the Menu page. It should contain the following:
    - A NavBar
    - A main content area
        - Grid layout with all of the required snacks and it's descriptions. 
    - A Footer

    I have already written the functions for the NavBar and Footer components. All that is left is the main content area. 

    I've also very conveniently added a style reference page, so you can see where all the styles are in one place 
    http://localhost:3000/buttonref

    There are a few things you need to consider 

    STEP 1: 
        Adding a new style to the header h4 in the css file (you should NOT be editing anything in the componetns folder)
        this new header h4 addition will center the header and additionally have some padding between the nav bar, and the following
        main content. 

        Once you finish step 1 you can move on to the next step. 

    STEP 2 

        Part 1: 
        You will create a file called snacks.csv. This file will contain all of the snacks that are currently available in the vending machine.
        Save the CSV file inside vending-machine-website/src/assets/csv. 
        (Note you will need to create this file)
        Create it with the columns of, "Name", "Description", "Image". For image you will need to upload a folder of all the product images into
        vending-machine-website/src/assets/prod-images and you will need to paste the path to the image in each row of the CSV file. 
    
        Now you have the CSV file with all the data of the snacks. 

    Step 3: 
        Next is designing a grid. Note that you will need to use this menu.js file and import the CSV file you just created. 
        Right now we can't just use the CSV file, so we need to parse the CSV file into a JSON file.

        Part 1: Turn CVS file into a json file 
            We will first parse through the file

            Here is a tutorial on how to fetch data from a CSV file in react native: https://www.youtube.com/watch?v=NAXIXN73uqY

            You will have a JSON output, which we will then be able to use for the next step
        
        Part 2: 

        Next up to create a grid 
        https://mui.com/material-ui/react-grid/#complex-grid this link gives you some code on how they create a grid 
        (note that the above is redacted, so look at the next link for the more updated grid documentation)

        If you want to create a grid from scratch this will take you through the tutorial: https://mui.com/material-ui/react-grid2/

*/ 
const MenuPage = () => {
  return (
    <>
      {/* Include the NavBar */}
      <NavBar/>

      <main className="menu-page">
        <h4>Current Avaliable Snacks</h4>
        {/* Add menu-related content here */}
      </main>

      {/* Include the Footer */}
      <Footer />
    </>
  );
};

export default MenuPage;
