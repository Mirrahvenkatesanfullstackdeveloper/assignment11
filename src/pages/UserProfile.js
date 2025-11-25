import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import users from '../data/users';

export default function UserProfile() {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));
  const navigate = useNavigate();

  if (!user) {
    return (
      <section className="page user-detail">
        <h1>User Not Found</h1>
        <p>No user exists with ID <strong>{id}</strong>.</p>
        <button className="btn" onClick={() => navigate('/users')}>Back to Users</button>
      </section>
    );
  }

  return (
    <section className="page user-detail">
      <h1>{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio}</p>

      <div className="detail-actions">
        <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
        <button className="btn outline" onClick={() => navigate('/users')}>Users List</button>
      </div>
    </section>
  );
}
