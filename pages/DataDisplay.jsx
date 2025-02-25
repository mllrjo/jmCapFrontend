import React, { useState, useEffect } from 'react';

export default function DataDisplay() {
    const [agencyData, setAgencyData] = useState([]);
    const [editingAgency, setEditingAgency] = useState(null);
    const [formData, setFormData] = useState({
        dateCollected: '',
        agency: '',
        fired: '',
        rehired: '',
        totalPersonnel: '',
        sources: '',
        summary: ''
    });
   

    useEffect(() => {
        fetchAgencies();
    }, []);

    const fetchAgencies = async () => {
        try {
            const response = await fetch('http://localhost:5002/agencies');
            const data = await response.json();
            setAgencyData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5002/agencies/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setAgencyData(agencyData.filter((agency) => agency._id !== id));
            } else {
                console.error('Failed to delete agency:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting agency:', error);
        }
    };

    const handleEditClick = (agency) => {
        setEditingAgency(agency._id);
        setFormData({
            dateCollected: agency.dateCollected ? agency.dateCollected.split('T')[0]: '',
            agency: agency.agency || '',
            fired: agency.fired || '',
            rehired: agency.rehired || '',
            totalPersonnel: agency.totalPersonnel || '',
            sources: agency.sources ? agency.sources.join(', ') : '' ,
            summary: agency.summary || '',
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5002/agencies/${editingAgency}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    fired: parseInt(formData.fired, 10),
                    rehired: parseInt(formData.rehired, 10),
                    totalPersonnel: parseInt(formData.totalPersonnel, 10),
                    sources: formData.sources.split(',').map((source) => source.trim())
                })
            });
            if (response.ok) {
                fetchAgencies(); // Refresh the list
                setEditingAgency(null); // Exit edit mode
                setFormData({
                    dateCollected: '',
                    agency: '',
                    fired: '',
                    rehired: '',
                    totalPersonnel: '',
                    sources: '',
                    summary: ''
                });
            } else {
                console.error('Failed to update agency:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating agency:', error);
        }
    };

    return (
        <div>
            
            {editingAgency ? (
                <div>
                    <h1>Edit Agency Data</h1>
                    <form onSubmit={handleUpdate}>
                       <div style={{ flex: 1 }}>
                         <input type='date' name='dateCollected' value={formData.dateCollectedleInputChange} required />
                         <input type='text' name='agency' placeholder='Agency Name' value={formData.agency} onChange={handleInputChange} required />
                         <input type='text' name='fired' placeholder='fired' value={formData.personnelChange} onChange={handleInputChange} />
                         <input type='text' name='rehired' placeholder='[re]hired' value={formData.personnelChange} onChange={handleInputChange} />
                         <input type='number' name='totalPersonnel' placeholder='Total Personnel' value={formData.totalPersonnel} onChange={handleInputChange} />
                     </div>
                     <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <textarea name='sources' placeholder='Sources' value={formData.sources} onChange={handleInputChange} style={{ width: '100%', minHeight: '100px' }}></textarea>
                        <textarea name='summary' placeholder='Summary Notes' value={formData.summary} onChange={handleInputChange} style={{ width: '100%', minHeight: '100px' }}></textarea>    
                        <button type='submit' style={{ alignSelf: 'center', marginTop: '10px' }}>Submit</button>
                    </div>
                    <button type="submit">Update</button>
                    <button type="button" onClick={() => setEditingAgency(null)}>Cancel</button>
                </form>
                </div>
            ) : (
                <ul>
                    {agencyData.map((agency) => (
                        <li key={agency._id}>
                            <p><strong>Date Collected:</strong> {new Date(agency.dateCollected).toLocaleDateString()}</p>
                            <p><strong>Agency:</strong> {agency.agency}</p>
                            <p><strong>Fired:</strong> {agency.fired}</p>
                            <p><strong>[Re]Hired:</strong> {agency.rehired}</p>
                            <p><strong>Total Personnel:</strong> {agency.totalPersonnel}</p>
                            <p><strong>Sources:</strong> {agency.sources.join(', ')}</p>
                            <p><strong>Summary Notes:</strong> {agency.summary}</p>
                            <button onClick={() => handleEditClick(agency)}>Edit</button>
                            <button onClick={() => handleDelete(agency._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
