import React, { useState } from 'react';
import axios from 'axios';

const Checkout = () => {
  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleCheckout = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/checkout/${bookId}/${userId}`);
      if (response.status === 200) {
        setMessage('Book checked out successfully');
      } else {
        setMessage('Failed to check out the book');
      }
    } catch (error) {
      console.error('Error checking out book:', error);
      setMessage('An error occurred while checking out the book');
    }
  };

  return (
    <div className="checkout-container" style={styles.container}>
      <h2 style={styles.heading}>Check Out Book</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleCheckout(); }}>
        <div className="form-group" style={styles.formGroup}>
          <label htmlFor="bookId" style={styles.label}>Book ID:</label>
          <input
            type="text"
            id="bookId"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div className="form-group" style={styles.formGroup}>
          <label htmlFor="userId" style={styles.label}>User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Check Out</button>
      </form>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  message: {
    textAlign: 'center',
    marginTop: '20px',
    color: 'blue',
    fontStyle: 'italic',
  },
};

export default Checkout;
