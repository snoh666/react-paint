import React from 'react';
import { Link } from 'react-router-dom';

const Game = () => {
  return (
    <div className="app-content">
      <h1>Game</h1>
      <Link to='/'>
        <button className="exit-btn">Go Home</button>
      </Link>
    </div>

  );
};

export default Game;