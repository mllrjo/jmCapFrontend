import React from 'react';

const AgencyItem = ({ agency, onEdit, onDelete }) => (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
        <div style={{ flex: 1 }}>
            <p><strong>Date:</strong> {new Date(agency.date).toLocaleDateString()}</p>
            <p><strong>Agency:</strong> {agency.agency}</p>
            <p><strong>Fired:</strong> {agency.fired}</p>
            <p><strong>[Re]Hired:</strong> {agency.rehired}</p>
            <p><strong>total_employees:</strong> {agency.total_employees}</p>
        </div>
        <div style={{ flex: 1 }}>
            <p><strong>source:</strong> {agency.source.join(', ')}</p>
            <p><strong>Summary Notes:</strong> {agency.summary}</p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => onEdit(agency)}>Edit</button>
            <button onClick={() => onDelete(agency._id)}>Delete</button>
        </div>
    </div>
);

export default AgencyItem;