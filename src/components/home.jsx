import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="app-content">
      <h1>Home</h1>
      <Link to='/game/'>
        <button>Go Play!</button>
      </Link>
    </div>
  );
};

export default Home;