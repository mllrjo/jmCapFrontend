import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import AgencySelection from './pages/AgencySelection';
import DataEntry from './pages/DataEntry';
import DataDisplay from './pages/DataDisplay';
import Navbar from './components/Navbar';

import './App.css';

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/agency-selection' element={<AgencySelection />} />
                <Route path='/data-entry' element={<DataEntry />} />
                <Route path='/data-display' element={<DataDisplay />} />
            </Routes>
        </Router>
    );
}