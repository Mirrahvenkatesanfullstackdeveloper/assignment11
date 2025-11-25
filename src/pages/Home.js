import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="page home">
      <h1>Welcome to the Multi-Page React App</h1>
      <p>
        This React application demonstrates routing using <strong>react-router-dom</strong>. 
        It includes multiple pages, parameterized routes, and smooth navigation.
      </p>

      <div className="home-actions">
        <Link className="btn" to="/about">About the App</Link>
        <Link className="btn outline" to="/users">View Users</Link>
      </div>
    </section>
  );
}
