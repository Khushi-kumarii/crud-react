import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 function Create() {
    const[inputData,setinputData]=useState({
        name:'',
        email:'',
        phone:'',
    })
    const navigate=useNavigate();
    const handlesubmit = (event) => {
      event.preventDefault(); // Corrected typo here
      axios.post('http://localhost:3030/users', inputData)
        .then(res => {
          alert("Data posted successfully");
          navigate('/');
        })
        .catch(error => console.error('Error posting data:', error));
    };
    
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
       <div className='w-50 border bg-secondary text-white p-5'>
         <form onSubmit={handlesubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' className='form-control' 
                onChange={e=> setinputData({...inputData, name:e.target.value})}>
                </input>
             </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' className='form-control'
                onChange={e=> setinputData({...inputData, email:e.target.value})}></input>
            </div><br/>
            <div>
                <label htmlFor='phone'>Phone</label>
                <input type='tel' name='phone' className='form-control'
                onChange={e=> setinputData({...inputData, phone:e.target.value})}></input>
            </div><br/>
            <button className='btn btn-success'>Submit</button>
         </form>
       </div>
    </div>
  )
}
export default Create
