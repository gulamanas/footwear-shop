import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customerName: '',
    address: '',
    phoneNumber: '',
    gstin: '',
    invoiceNo: '',
    date: '',
    saleType: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Customer Added:', formData);
    navigate('/customers')
    // Add POST call here.
  }
  return (
    <div className="card">
      <h2>Add New Customer</h2>
      <form onSubmit={handleSubmit} className='form'>
        <input type="text" name='customerName' placeholder='Customer Name' onChange={handleChange} required />
        <input type="text" name='address' placeholder='Address' onChange={handleChange} required />
        <input type="text" name='phoneNumber' placeholder='Phone Number' onChange={handleChange} required />
        <input type="text" name='gstin' placeholder='Customer Name' onChange={handleChange} required />
        <input type="text" name='invoiceNo' placeholder='Invoice No.' onChange={handleChange} required />
        <input type="text" name='date' placeholder='Date' onChange={handleChange} required />
        <input type="text" name='saleType' placeholder='Sale Type' onChange={handleChange} required />
        <button type="submit" className='button'>Add Customer</button>
      </form>
    </div>
  )
}

export default CustomerForm