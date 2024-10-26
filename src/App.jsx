// src/App.jsx
import React from 'react';
import './App.css';
import ParticleBackground from './ParticleBackground';

function App() {
    return (
        <div className="App">
            <ParticleBackground />
            <div className="content">
                <h1>Particle Background</h1>
                <p>TEXT</p>
            </div>
        </div>
    );
}

export default App;
