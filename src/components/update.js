import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    id:id,
    name: '',
    email: '',
    phone: '',
  });
  const navigate = useNavigate();

  // Fetch the user data by ID when the component mounts
  useEffect(() => {
    axios.get(`http://localhost:3030/users/${id}`)
      .then(res => {
        setInputData(res.data); // Use res.data to access the user object
      })
      .catch(err => console.error(err));
  }, [id]); // Make sure to add the dependency array with 'id'

  // Handle form submission for updating user data
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3030/users/${id}`, inputData)
      .then(res => {
        alert("Data updated successfully");
        navigate('/'); // Redirect to the homepage after update
      })
      .catch(error => console.error('Error updating data:', error));
  };

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='id'>Id</label>
            <input
              type='number'
              disabled name='id'
              className='form-control'
              value={inputData.id}
              
            />
          </div>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              className='form-control'
              value={inputData.name}
              onChange={e => setInputData({ ...inputData, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              className='form-control'
              value={inputData.email}
              onChange={e => setInputData({ ...inputData, email: e.target.value })}
            />
          </div><br />
          <div>
            <label htmlFor='phone'>Phone</label>
            <input
              type='tel'
              name='phone'
              className='form-control'
              value={inputData.phone}
              onChange={e => setInputData({ ...inputData, phone: e.target.value })}
            />
          </div><br />
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
