import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li><a href="/" style={styles.navItem}>Home</a></li>
        <li><a href="/report" style={styles.navItem}>Report Lost Item</a></li>
        <li><a href="/listings" style={styles.navItem}>Listings</a></li>
      </ul>
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
