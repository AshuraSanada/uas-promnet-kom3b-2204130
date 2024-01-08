// HomeComponent.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomeComponent.css'; // Import the CSS file for styling

const HomeComponent = () => {
  return (
    <div className="home-container">
      <div className="center-content">
        <h2>Welcome to the Transaction Management App</h2>
        <Link to="/users">
          <button className="btn btn-primary">Go to Transaction List</button>
        </Link>
      </div>
    </div>
  );
}

export default HomeComponent;
