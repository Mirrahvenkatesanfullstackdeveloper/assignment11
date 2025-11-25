import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="page about">
      <h1>About This App</h1>
      <p>
        This React project was created to demonstrate:
      </p>
      <ul>
        <li>Routing with react-router-dom</li>
        <li>Parameterized routes (like <code>/users/:id</code>)</li>
        <li>Multiple pages with navigation</li>
        <li>Highlighting the active route</li>
      </ul>

      <Link to="/" className="btn">Back to Home</Link>
    </section>
  );
}
