import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
const API_BASE_URL = "http://localhost:5002"
console.log(API_BASE_URL);

export default function DataEntry() {
    const [formData, setFormData] = useState({
        date: '',
        agency: '',
        fired: '',
        rehired: '',
        total_employees: '',
        source:[''],
        summary: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            date: e.target.date.value,
            agency: e.target.agency.value,
            fired: parseInt(e.target.fired.value, 10),
            rehired: parseInt(e.target.rehired.value, 10),
            total_employees: parseInt(e.target.total_employees.value, 10),
            source: e.target.source.value.split(',').map(source => source.trim()),
            summary: e.target.summary.value
        };
    
    
        const response = await fetch('http://localhost:5002/agencies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
    
        if (response.ok) {
            console.log('Data submitted successfully');
        } else {
            console.error('Failed to submit data', response.statusText);
        }
    };
    

    return (
        <div>
            <h1>Enter Agency Data</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ flex: 1 }}>
                    <input type='date' name='date' value={formData.date} onChange={handleChange} required />
                    <input type='text' name='agency' placeholder='Agency Name' value={formData.agency} onChange={handleChange} required />
                    <input type='text' name='fired' placeholder='fired' value={formData.personnelChange} onChange={handleChange} />
                    <input type='text' name='rehired' placeholder='[re]hired' value={formData.personnelChange} onChange={handleChange} />
                    <input type='number' name='total_employees' placeholder='total employees' value={formData.total_employees} onChange={handleChange} />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <textarea name='source' placeholder='source' value={formData.source} onChange={handleChange} style={{ width: '100%', minHeight: '100px' }}></textarea>
                    <textarea name='summary' placeholder='Summary Notes' value={formData.summary} onChange={handleChange} style={{ width: '100%', minHeight: '100px' }}></textarea>    
                    <button type='submit' style={{ alignSelf: 'center', marginTop: '10px' }}>Submit</button>
                </div>
            </form>
        </div>
        
    );
}