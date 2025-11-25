import React from 'react';
import { Link } from 'react-router-dom';
import users from '../data/users';

export default function UserList() {
  return (
    <section className="page users">
      <h1>Users</h1>
      <p>Below is a mock list of users. Click “View” to see more details.</p>

      <ul className="user-list">
        {users.map((u) => (
          <li key={u.id} className="user-item">
            <div>
              <strong>{u.name}</strong>
              <div className="muted">{u.email}</div>
            </div>
            <Link to={`/users/${u.id}`} className="btn small">View</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
