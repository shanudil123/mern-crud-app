import React from 'react';
import axios from 'axios';

function DeleteUser({ userId, onDelete }) {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`/api/users/${userId}`);
        onDelete(userId);
        alert('User deleted successfully!');
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <button onClick={handleDelete} style={{ 
      padding: '8px 12px',
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'background-color 0.3s ease',
    }}>
      Delete
    </button>
  );
}

export default DeleteUser;
