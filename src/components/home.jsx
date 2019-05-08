import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="app-content">
      <div className="home-header">
        <h1>Canvas Vanilla Js Snake game</h1>
        <div className="description">
          <span>It's a basic no textured snake game. Created for fun.</span>
        </div>
      </div>
      <Link to='/game/'>
        <button>Go Play!</button>
      </Link>
    </div>
  );
};

export default Home;