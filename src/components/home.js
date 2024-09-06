import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3030/users')
      .then(response => {
        console.log('Fetched users:', response.data); // Add this line
        setUsers(response.data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);
  

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3030/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div className='container mt-5'>
      <h1 className='text-center'>Crud With Json Server</h1>
      
      <Link to="/create" className='btn btn-danger'>Create New User</Link>
      <table className='table'>
        <thead className='text-align-center'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {users.map(user => (
  <tr key={user.id}>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.phone}</td>
    <td>
      <Link className='text-decoration-none btn btn-sm btn-success' to={`/update/${user.id}`}>Update</Link>
      <button onClick={() => handleDelete(user.id)} className='btn btn-danger'>Delete</button>
      <Link className='text-decoration-none btn btn-sm btn-primary' to={`/read/${user.id}`}>Read</Link>
    </td>
  </tr>
))}

        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
