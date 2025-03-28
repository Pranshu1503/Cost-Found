import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
  <Link to="/">Home</Link>
  <Link to="/report">Report Lost Item</Link>
  <Link to="/listings">Listings</Link>
</nav>

  );
};

const styles = {
  navbar: {
    backgroundColor: '#1E1E1E',  // Dark background
    padding: '15px',
    textAlign: 'center',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '0',
  },
  navItem: {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
  navItemHover: {
    color: '#FFCC00',
  },
};

export default Navbar;
