import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AgencySelection() {
    const [selectedAgencies, setSelectedAgencies] = useState([]);
    const agencies = ['Department of Defense', 'Department of Education', 'Department of Transportation', 'NASA'];
    const navigate = useNavigate();

    const handleToggle = (agency) => {
        setSelectedAgencies(prev => 
            prev.includes(agency) ? prev.filter(a => a !== agency) : [...prev, agency]
        );
    };

    const handleSubmit = () => {
        localStorage.setItem('trackedAgencies', JSON.stringify(selectedAgencies));
        navigate('/data-entry');
    };

    return (
        <div>
            <h1>Select Agencies to Follow</h1>
            <ul>
                {agencies.map(agency => (
                    <li key={agency}>
                        <label>
                            <input 
                                type='checkbox' 
                                checked={selectedAgencies.includes(agency)}
                                onChange={() => handleToggle(agency)}
                            />
                            {agency}
                        </label>
                    </li>
                ))}
            </ul>
            <button onClick={handleSubmit}>Save Selection</button>
        </div>
    );
}
