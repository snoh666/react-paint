import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>You're on Home</h1>
      <Link to='/game/'><h1>Go Play!</h1></Link>
    </div>
  );
};

export default Home;