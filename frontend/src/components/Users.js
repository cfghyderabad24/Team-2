import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get('http://localhost:8080/viewAllTransactions');
      setTransactions(response.data); // Assuming response.data is an array of transactions
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  return (
    <div className="transactions-container">
      <h2>Transactions</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Book ID</th>
            <th>Checkout Date</th>
            <th>Check-in Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.student.id}</td>
              <td>{transaction.book.id}</td>
              <td>{new Date(transaction.checkOutDate).toLocaleString()}</td>
              <td>{transaction.checkInDate ? new Date(transaction.checkInDate).toLocaleString() : 'Not checked in'}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  th: {
    backgroundColor: '#f2f2f2',
    padding: '8px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  },
  td: {
    padding: '8px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  },
};

export default Users;
