import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

 function Read() {
    const {id}=useParams()
    const navigate=useNavigate()
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3030/users/'+id)
          .then(res => {
            setUsers(res.data); // Use res.data to access the user object
          })
          .catch(err => console.error(err));
      }, [id]);
  return (
    
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
       
    <div className="w-50 border bg-secondary text-white p-5">
    <h2 className='bg-primary text-white' class="text-center bg-primary">User Information</h2>
        <label className="label">Name:</label>
        <p className="info">{users.name}</p>

        <label className="label">Email:</label>
        <p className="info">{users.email}</p>

        <label className="label">Phone:</label>
        <p className="info">{users.phone}</p>

        <Link className='text-decoration-none btn btn-sm btn-primary' to="/">Back</Link>
    </div>
</div>
  )
}
export default Read
