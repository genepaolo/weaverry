import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Route, Routes, Navigate} from "react-router-dom"
import { BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/sitemap.xml" element={<Navigate to="/sitemap.xml" />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
