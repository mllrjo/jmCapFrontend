import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AgencySelection() {
    const [agencies, setAgencies] = useState([]);
    const [selectedAgencies, setSelectedAgencies] = useState(() => {
        // Retrieve selected agencies from localStorage on initial load
        const saved = localStorage.getItem('trackedAgencies');
        return saved ? JSON.parse(saved) : [];
    });
    const navigate = useNavigate();

    // Fetch agencies from the backend API when the component mounts
    useEffect(() => {
        fetch('http://localhost:5002/agencies')
            .then(response => response.json())
            .then(data => setAgencies(data))
            .catch(error => console.error('Error fetching agencies:', error));
    }, []);
    // Handle toggling of agency selection
    const handleToggle = (agencyId) => {
        setSelectedAgencies(prevSelected => {
            if (prevSelected.includes(agencyId)) {
                // Remove agency from selection
                return prevSelected.filter(id => id !== agencyId);
            } else {
                // Add agency to selection
                return [...prevSelected, agencyId];
            }
        });
    };

    // Handle form submission
    const handleSubmit = () => {
        // Save selected agencies to localStorage
        localStorage.setItem('trackedAgencies', JSON.stringify(selectedAgencies));
        // Navigate to the data entry page
        navigate('/data-entry');
    };

    return (
        <div>
            <h1>Select Agencies to Follow</h1>
            <ul>
                {agencies.map(agency => (
                    <li key={agency._id}>
                        <label>
                            <input
                                type='checkbox'
                                checked={selectedAgencies.includes(agency._id)}
                                onChange={() => handleToggle(agency._id)}
                            />
                            {agency.name}
                        </label>
                    </li>
                ))}
            </ul>
            <button onClick={handleSubmit}>Save Selection</button>
        </div>
    );
}