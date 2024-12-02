import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from "../components/footer";
import Papa from 'papaparse';
import snacksCSV from '../assets/snacks/snacks.csv'; // CSV file
import CardGrid from '../components/Grid'; // Ensure correct case
import './menu.css'; // Menu-specific styles

const MenuPage = () => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    Papa.parse(snacksCSV, {
      header: true,
      download: true,
      complete: (result) => {
        console.log("Parsed CSV Data:", result.data); // Debugging: Log all parsed rows
        const filteredSnacks = result.data.filter((item) => item.Name && item.Image);
        console.log("Filtered Snacks:", filteredSnacks); // Debugging: Log valid rows
        setSnacks(filteredSnacks);
      },
      error: (err) => {
        console.error("Error parsing CSV:", err); // Debugging
      },
    });
  }, []);
  

  
  return (
    <>
      <NavBar />
      <main className="menu-page">
        <h4 className="menu-header">Current Available Snacks</h4>
        <CardGrid snacks={snacks} />
      </main>
      <Footer />
    </>
  );
};

export default MenuPage;
