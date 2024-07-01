// src/components/AddUser.js

import React, { useState } from 'react';
import axios from 'axios';

function AddUser({ onAdd }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', { firstName, lastName, email });
      onAdd(response.data);
      setFirstName('');
      setLastName('');
      setEmail('');
      alert('User added successfully!');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>First Name:</label>
          <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '3px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Last Name:</label>
          <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '3px' }} />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: '8px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '3px' }} />
        </div>
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
