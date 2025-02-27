import React from 'react';

const AgencyItem = ({ agency, onEdit, onDelete }) => {
    const { _id, date, agency: agencyName, fired, rehired, total_employees, source, summary } = agency;

    return (
        <div>
            <h3>{agencyName}</h3>
            <p>Date: {new Date(date).toLocaleDateString()}</p>
            <p>Fired: {fired}</p>
            <p>Rehired: {rehired}</p>
            <p>Total Employees: {total_employees}</p>
            <p>Summary: {summary}</p>
            <p>Sources:</p>
            <ul>
                {source.map((url, index) => (
                    <li key={index}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            {url}
                        </a>
                    </li>
                ))}
            </ul>
            <button onClick={() => onEdit(agency)}>Edit</button>
            <button onClick={() => onDelete(_id)}>Delete</button>
        </div>
    );
};

export default AgencyItem;