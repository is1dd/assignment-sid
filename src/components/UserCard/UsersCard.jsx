import React from 'react';
import "./UsersCard.css";
import Avatar from "@mui/material/Avatar";
import stringAvatar from '../SAvatar/SAvatar';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';


function UsersCard({ usersList }) {
  return (
    <main className="users-card">
      <h2 className="card-header">
        <span>Select an account</span>
      </h2>
      <section className="users-list">
        <ul>
          {usersList.map((user) => (
            <li className="user-item" key={user.id}>
              <Link className="link" to="/user/profile" state={{ userData: user, usersList: usersList }}>
                <Avatar src={`${user.profilepicture}`} sx={{ width: 28, height: 28, mr: 1 }} />
                <Typography className="user-name">{user.name}</Typography>
              </Link>

            </li>
          ))}
        </ul>
      </section>
      <footer className="card-footer"></footer>
    </main>
  )
}

export default UsersCard