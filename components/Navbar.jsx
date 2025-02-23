import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/signin'>Sign In</a></li>
                <li><a href='/agency-selection'>Select Agencies</a></li>
                <li><a href='/data-entry'>Enter Data</a></li>
                <li><a href='/data-display'>View Data</a></li>
            </ul>
        </nav>
    );
}

