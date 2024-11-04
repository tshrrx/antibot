// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import LoginPage from './pages/LoginPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/loginpage" element={<LoginPage/>} />
            </Routes>
        </div>
    );
}

export default App;
