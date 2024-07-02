import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard/index';

export default function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
    )
}