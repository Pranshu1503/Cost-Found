import React, { useState } from 'react';
import "./Welcome.css";

const ReportItem = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Item Reported:', { itemName, description });
    setItemName('');
    setDescription('');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Report a Lost Item</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.textarea}
        ></textarea>
        <button type="submit" style={styles.button}>Report</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#2C2C2C',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    color: 'white',
  },
  heading: {
    textAlign: 'center',
    fontSize: '22px',
    marginBottom: '15px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    height: '80px',
    resize: 'none',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#FFCC00',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background 0.3s ease',
  },
};

export default ReportItem;
