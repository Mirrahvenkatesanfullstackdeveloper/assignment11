import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';  // File exists as Navigation.js
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';  // File exists as Users.js
import UserDetails from './pages/UserDetails';  // File exists as UserDetails.js

export default function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Multi-Page React App</p>
      </footer>
    </div>
  );
}