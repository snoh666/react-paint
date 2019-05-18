import React from 'react';
import { Link } from 'react-router-dom';

class Game extends React.Component{

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    ctx.strokeColor = 'black';
    ctx.strokeRect(20, 20, 10, 10);
    console.log('stroked');

    this.startGame(canvas, ctx);

    // document.addEventListener('keydown', e => console.log(e));
  }

  startGame(canvas, ctx) {
    console.log('Hello from startGame');

    ctx.strokeRect(canvas.width / 2 - 10, canvas.height / 2 - 10, 20, 20);
  }



  render() {
    return (
      <div className="app-content">
        <h1>Game</h1>
        <Link to='/'>
          <button className="exit-btn">Go Home</button>
        </Link>
        <p>Click on canvas to play!</p>
        <canvas
          ref='canvas'
          style={{height: window.innerHeight / 3 * 2, width: window.innerWidth - 50}}
        />
      </div>
    );
  }
}

export default Game;