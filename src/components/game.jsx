import React from 'react';
import { Link } from 'react-router-dom';

const Game = () => {
  return (
    <div>
      <h1>We are on index file</h1>
      <Link to='/'><h1>Go to home</h1></Link>
    </div>

  );
};

export default Game;