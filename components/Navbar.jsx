import React from 'react';
import { Link } from 'react-router-dom';
import '../src/Navbar.css'; // Ensure you have this CSS file for styling

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-top">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <ul className="navbar-bottom">
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/agency-selection">Select Agencies</Link></li>
                <li><Link to="/data-entry">Enter Data</Link></li>
                <li><Link to="/data-display">View Data</Link></li>
            </ul>
        </nav>
    );
}