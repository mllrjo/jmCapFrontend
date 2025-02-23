import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DataEntry() {
    const [formData, setFormData] = useState({
        dateCollected: '',
        agency: '',
        personnelChange: '',
        totalPersonnel: '',
        sources: '',
        summary: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Data:', formData);
        navigate('/data-display');
    };

    return (
        <div>
            <h1>Enter Agency Data</h1>
            <form onSubmit={handleSubmit}>
                <input type='date' name='dateCollected' value={formData.dateCollected} onChange={handleChange} required />
                <input type='text' name='agency' placeholder='Agency Name' value={formData.agency} onChange={handleChange} required />
                <input type='text' name='personnelChange' placeholder='Change in Personnel' value={formData.personnelChange} onChange={handleChange} />
                <input type='number' name='totalPersonnel' placeholder='Total Personnel' value={formData.totalPersonnel} onChange={handleChange} />
                <input type='text' name='sources' placeholder='Sources (comma separated)' value={formData.sources} onChange={handleChange} />
                <textarea name='summary' placeholder='Summary Notes' value={formData.summary} onChange={handleChange}></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}