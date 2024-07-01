// src/App.js

import React from 'react';
import './App.css'; // Assuming you have a CSS file for styling
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import DeleteUser from './components/DeleteUser';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN CRUD Application</h1>
      </header>
      <div className="container">
        <div className="row">
          <div className="col">
            <AddUser />
          </div>
          <div className="col">
            <EditUser />
          </div>
          <div className="col">
            <DeleteUser />
          </div>
        </div>
      </div>
      <hr />
      <Users />
    </div>
  );
}

export default App;
