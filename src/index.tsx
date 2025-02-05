/**
 * Application Entry Point
 * 
 * This file serves as the main entry point for the React application.
 * It handles:
 * - React DOM rendering
 * - StrictMode configuration
 * - Performance monitoring setup
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/styles/index.scss';
import App from './App';
import reportWebVitals from './shared/utils/reportWebVitals';

// Create root element for React application
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement);

// Render the application within StrictMode for additional development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize performance monitoring
// To measure performance, pass a function to log results
// (e.g., reportWebVitals(console.log)) or send to an analytics endpoint
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
