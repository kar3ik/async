import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { createUser } from '../features/userDetailsSlice';
import { useNavigate } from 'react-router-dom';

const MyForm = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can perform further actions such as sending data to a server
    dispatch(createUser(formData))
    console.log("successfull")
    navigate('/read')

  };

  const formStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const labelStyle = {
    display: 'block',
    margin: '10px 0',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    margin: '5px 0',
  };

  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <label style={labelStyle}>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
      </label>
      <label style={labelStyle}>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} />
      </label>
      <label style={labelStyle}>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} style={inputStyle} />
      </label>
      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
  );
};

export default MyForm;
