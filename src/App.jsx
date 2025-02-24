

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import AgencySelection from '../pages/AgencySelection';
import DataEntry from '../pages/DataEntry';
import DataDisplay from '../pages/DataDisplay';
import Navbar from '../components/Navbar.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/agency-selection' element={<AgencySelection />} />
                <Route path='/data-entry' element={<DataEntry />} />
                <Route path='/data-display' element={<DataDisplay />} />
            </Routes>
        </Router>
    );
}
export default App;