// EditUser.js

import React, { useState, useEffect } from 'react';

const EditUser = ({ user }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || '');
      setLastName(user.lastName || '');
      setEmail(user.email || '');
    }
  }, [user]);

  const handleUpdate = () => {
    // Handle update logic
  };

  // Ensure user object is defined before rendering
  if (!user) {
    return <div>Loading...</div>; // Or handle loading state
  }

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;
