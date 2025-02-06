import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './shared/styles/App.scss';

// Component imports
import Login from './features/auth/Login';
import Dashboard from './features/dashboard/Dashboard';

const App: React.FC = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Check if user is authenticated
  const checkAuth = useCallback(() => {
    const user = localStorage.getItem('user');
    const authFlag = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(!!(user && authFlag));
    setIsLoading(false);
  }, []);

  // Check authentication on component mount
  useEffect(() => {
    checkAuth();
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, [checkAuth]);

  // Render loading indicator
  if (isLoading) {
    return (
      <div 
        className="loading" 
        role="status"
        aria-label="Loading application"
      >
        Loading...
      </div>
    );
  }

  // Render the app
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Login Route */}
          <Route 
            path="/login" 
            element={
              isAuthenticated ? 
                <Navigate to="/dashboard" replace /> : 
                <Login />
            } 
          />

          {/* Dashboard Routes (Protected) */}
          <Route 
            path="/dashboard/*" 
            element={
              isAuthenticated ? 
                <Dashboard /> : 
                <Navigate 
                  to="/login" 
                  replace 
                  state={{ from: '/dashboard' }} 
                />
            } 
          />

          {/* Default Route - Redirects to Dashboard or Login */}
          <Route 
            path="/" 
            element={
              <Navigate 
                to={isAuthenticated ? "/dashboard" : "/login"} 
                replace 
              />
            } 
          />

          {/* Catch-all Route - Redirects to Dashboard or Login */}
          <Route 
            path="*" 
            element={
              <Navigate 
                to={isAuthenticated ? "/dashboard" : "/login"} 
                replace 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
