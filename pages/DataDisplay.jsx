import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DataDisplay() {
    const [agencyData, setAgencyData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem('agencyData');
        if (storedData) {
            setAgencyData(JSON.parse(storedData));
        }
    }, []);

    return (
        <div>
            <h1>View Agency Data</h1>
            {agencyData ? (
                <div>
                    <p><strong>Date Collected:</strong> {agencyData.dateCollected}</p>
                    <p><strong>Agency:</strong> {agencyData.agency}</p>
                    <p><strong>Change in Personnel:</strong> {agencyData.personnelChange}</p>
                    <p><strong>Total Personnel:</strong> {agencyData.totalPersonnel}</p>
                    <p><strong>Sources:</strong> {agencyData.sources}</p>
                    <p><strong>Summary Notes:</strong> {agencyData.summary}</p>
                </div>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
}

