import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to Lost & Found</h1>
      <p>Report and find lost items easily.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    fontSize: '18px',
    color: 'white',
  },
};

export default Home;
