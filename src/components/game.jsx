import React from 'react';
import { Link } from 'react-router-dom';

// const Setup = React.forwardRef((props, ref) => (
//   <div className="app-content">
//     <h1>Game</h1>
//     <Link to='/'>
//       <button className="exit-btn">Go Home</button>
//     </Link>
//     <canvas ref={ref}></canvas>
//   </div>
// ));
const Game = () => {
  let canvasRef = React.createRef();
  /*
    canvas size:
      width: 1000px
      height: 500px

  */
  const start = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const setup = {
      screenX: 1000,
      screenY: 500,
      playerX: 1000 / 2 - 10,
      playerY: 500 / 2 -10
    };
    console.log(setup);

    ctx.beginPath();
    ctx.strokeRect(setup.playerX, setup.playerY,20,20);
    ctx.stroke();
  };
  return (
    (
      <div className="app-content">
        <h1>Game</h1>
        <Link to='/'>
          <button className="exit-btn">Go Home</button>
        </Link>
        <p>Click on canvas to play!</p>
        <canvas
          ref={canvasRef}
          onClick={start}
        />
      </div>
    )
  );
};

export default Game;