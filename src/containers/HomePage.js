import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h4>
        Home Page
      </h4>
      <Link to="/todos"> Go back to list page </Link>
    </div>
  );
};

export default HomePage;

