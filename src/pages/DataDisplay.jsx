import React, { useState, useEffect } from 'react';
import AgencyForm from '../pages/AgencyForm';
import AgencyItem from '../pages/AgencyItem';

const DataDisplay = () => {
    const [agencyData, setAgencyData] = useState([]);
    const [editingAgency, setEditingAgency] = useState(null);
    const [formData, setFormData] = useState({
        date: '',
        agency: '',
        fired: '',
        rehired: '',
        total_employees: '',
        source: '',
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
            date: agency.date ? agency.date.split('T')[0] : '',
            agency: agency.agency || '',
            fired: agency.fired || '',
            rehired: agency.rehired || '',
            total_employees: agency.total_employees || '',
            source: agency.source ? agency.source.join(', ') : '',
            summary: agency.summary || ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = editingAgency ? 'PUT' : 'POST';
        const url = editingAgency
            ? `http://localhost:5002/agencies/${editingAgency}`
            : 'http://localhost:5002/agencies';

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    fired: parseInt(formData.fired, 10),
                    rehired: parseInt(formData.rehired, 10),
                    total_employees: parseInt(formData.total_employees, 10),
                    source: formData.source.split(',').map((source) => source.trim())
                })
            });
            if (response.ok) {
                fetchAgencies(); // Refresh the list
                setEditingAgency(null); // Exit edit mode
                setFormData({
                    date: '',
                    agency: '',
                    fired: '',
                    rehired: '',
                    total_employees: '',
                    source: '',
                    summary: ''
                });
            } else {
                console.error('Failed to submit agency:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting agency:', error);
        }
    };

    const handleCancel = () => {
        setEditingAgency(null);
        setFormData({
            date: '',
            agency: '',
            fired: '',
            rehired: '',
            total_employees: '',
            source: '',
            summary: ''
        });
    };

    return (
        <div>
            {editingAgency ? (
                <AgencyForm
                    formData={formData}
                    handleChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    isEditing={true}
                    handleCancel={handleCancel}
                />
            ) : (
                <>
                   
                    <h2>Agency Data</h2>
                    {agencyData.length > 0 ? (
                        agencyData.map((agency) => (
                            <AgencyItem
                                key={agency._id}
                                agency={agency}
                                onEdit={handleEditClick}
                                onDelete={handleDelete}
                            />
                        ))
                    ) : (
                        <p>No data available.</p>
                    )}
                </>
            )}
        </div>
    );
};

export default DataDisplay;