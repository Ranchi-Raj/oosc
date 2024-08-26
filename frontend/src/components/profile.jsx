import React, { useState } from 'react';
import './profile.css'
import { useSelector,useDispatch } from 'react-redux';
import {addUser} from '../features/state/stateSlice'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const states = useSelector((state) => state.counter.user);
    const navigate = useNavigate();
    const dispatch= useDispatch();
  const [formData, setFormData] = useState({
    name: states.name,
    address: '',
    dateOfBirth: states.dob,
    fatherName: '',
    motherName: '',
    aadharCard: '',
    panCard: '',
    phoneNo: '',
    email: '',
    password: states.password
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form data submitted:', formData);

    axios.patch('/api/user/updateProfile', {...formData, _id: states.id}).then((response) => {
      console.log(response.data);
    })
    
    navigate('/home')
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', backgroundColor:'#efefef', borderRadius: '8px' }}>
      <h1 id='profile'>PROFILE PAGE</h1>
      <form onSubmit={handleSubmit}>
        <div className='front' style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name:</label>
          <input
            className='text-center'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div className='front' style={{ marginBottom: '10px' }}>
          <label htmlFor="address">Address:</label>
          <input
           className='text-center'
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div className='front' style={{ marginBottom: '10px' }}>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
          className='text-center'
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div className='front' style={{ marginBottom: '10px' }}>
          <label htmlFor="fatherName">Father's Name:</label>
          <input
           className='text-center'
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div className='front' style={{ marginBottom: '10px' }}>
          <label htmlFor="motherName">Mother's Name:</label>
          <input
           className='text-center'
            type="text"
            id="motherName"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div className='front' style={{ marginBottom: '10px' }}>
          <label htmlFor="aadharCard">Aadhar Card:</label>
          <input
           className='text-center'
            type="text"
            id="aadharCard"
            name="aadharCard"
            value={formData.aadharCard}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div className='front' style={{ marginBottom: '10px' }}>
          <label htmlFor="panCard">PAN Card:</label>
          <input
           className='text-center'
            type="text"
            id="panCard"
            name="panCard"
            value={formData.panCard}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div className='front' style={{ marginBottom: '10px' }}>
          <label htmlFor="phoneNo">Phone No:</label>
          <input
           className='text-center'
            type="text"
            id="phoneNo"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div className='front' style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input
           className='text-center'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div className='front' style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input
           className='text-center'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div className='button'>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }} onClick={handleSubmit}>
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
