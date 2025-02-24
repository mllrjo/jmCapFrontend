import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username.trim()) {
            const response = await fetch(`${API_BASE_URL}/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username })
            });
            if (response.ok) {
                localStorage.setItem('username', username);
                navigate('/agency-selection');
            }
        }
    };

    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Enter Username' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type='submit'>Sign In</button>
            </form>
        </div>
    );
}

