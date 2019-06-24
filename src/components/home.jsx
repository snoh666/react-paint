import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="app-content">
      <div className="home-header">
        <h1>Canvas Vanilla JavaScript Paint</h1>
        <div className="description">
          <span>
            Paint in Vanilla JavaScript. Created for fun in free time by <a href="https://github.com/snoh666/">snoh666</a>.
            <ul>
              <h2>Controls:</h2>
              <li>+ numpad - Increase size of brush</li>
              <li>- numpad - Decrease size of brush</li>
              <li>LeftCtrl - Clear canvas</li>
            </ul>
          </span>
        </div>
      </div>
      <Link to='/paint/'>
        <button>Go Draw!</button>
      </Link>
    </div>
  );
};

export default Home;