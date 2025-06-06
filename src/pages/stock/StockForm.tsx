import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StockForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        item: '',
        hsnCode: '',
        rate: '',
        quantity: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Stock Added:', formData);
        navigate('/stocks')
        // Add POST call here
    };

    return (
        <div className="card">
            <h2>Add New Stock</h2>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" name="item" placeholder="Item Name" onChange={handleChange} required />
                <input type="text" name="hsnCode" placeholder="HSN Code" onChange={handleChange} required />
                <input type="number" name="rate" placeholder="Rate" onChange={handleChange} required />
                <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} required />
                <button type="submit" className="button">Add Stock</button>
            </form>
        </div>
    );
}

export default StockForm;
