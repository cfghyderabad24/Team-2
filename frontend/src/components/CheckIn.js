import React, { useState } from 'react';
import axios from 'axios';

const CheckInBook = () => {
  const [bookId, setBookId] = useState('');
  const [studentId, setStudentId] = useState('');
  const [message, setMessage] = useState('');

  const handleCheckIn = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/checkin/${bookId}/${studentId}`);
      if (response.status === 200) {
        setMessage('Book checked in successfully');
      } else {
        setMessage('Failed to check in the book');
      }
    } catch (error) {
      console.error('Error checking in book:', error);
      setMessage('An error occurred while checking in the book');
    }
  };

  return (
    <div className="check-in-container" style={styles.container}>
      <h2 style={styles.heading}>Check In Book</h2>
      <form onSubmit={(e) => { e.preventDefault(); }}>
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
          <label htmlFor="studentId" style={styles.label}>Student ID:</label>
          <input
            type="text"
            id="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="button" onClick={handleCheckIn} style={styles.button}>Check In</button>
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

export default CheckInBook;
