import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DataEntry() {
    const [formData, setFormData] = useState({
        dateCollected: '',
        agency: '',
        fired: '',
        rehired: '',
        totalPersonnel: '',
        sources: '',
        summary: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${API_BASE_URL}/agencies`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            navigate('/data-display');
        }
        console.log('Submitted Data:', formData);
    };

    return (
        <div>
            <h1>Enter Agency Data</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ flex: 1 }}>
                    <input type='date' name='dateCollected' value={formData.dateCollected} onChange={handleChange} required />
                    <input type='text' name='agency' placeholder='Agency Name' value={formData.agency} onChange={handleChange} required />
                    <input type='text' name='fired' placeholder='fired' value={formData.personnelChange} onChange={handleChange} />
                    <input type='text' name='rehired' placeholder='[re]hired' value={formData.personnelChange} onChange={handleChange} />
                    <input type='number' name='totalPersonnel' placeholder='Total Personnel' value={formData.totalPersonnel} onChange={handleChange} />
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <textarea name='sources' placeholder='Sources' value={formData.sources} onChange={handleChange} style={{ width: '100%', minHeight: '100px' }}></textarea>
                    <textarea name='summary' placeholder='Summary Notes' value={formData.summary} onChange={handleChange} style={{ width: '100%', minHeight: '100px' }}></textarea>    
                    <button type='submit' style={{ alignSelf: 'center', marginTop: '10px' }}>Submit</button>
                </div>
            </form>
        </div>
        
    );
}