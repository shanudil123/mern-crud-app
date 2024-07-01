
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteUser from './DeleteUser';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.firstName} {user.lastName} - {user.email}
            <DeleteUser userId={user._id} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
