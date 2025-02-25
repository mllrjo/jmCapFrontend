import React, { useState, useEffect } from 'react';

export default function DataDisplay() {
    const [agencyData, setAgencyData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:5002/agencies');
                if (response.ok) {
                    const data = await response.json();
                    setAgencyData(data);
                } else {
                    console.error('Failed to fetch data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>View Agency Data</h1>
            {agencyData.length > 0 ? (
                <ul>
                    {agencyData.map((item) => (
                        <li key={item._id}>
                            <p><strong>Date Collected:</strong> {new Date(item.dateCollected).toLocaleDateString()}</p>
                            <p><strong>Agency:</strong> {item.agency}</p>
                            <p><strong>Fired:</strong> {item.fired}</p>
                            <p><strong>[Re]Hired:</strong> {item.rehired}</p>
                            <p><strong>Total Personnel:</strong> {item.totalPersonnel}</p>
                            <p><strong>Sources:</strong> {item.sources.join(', ')}</p>
                            <p><strong>Summary Notes:</strong> {item.summary}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
}

