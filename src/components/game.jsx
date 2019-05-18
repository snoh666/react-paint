import React from 'react';
import { Link } from 'react-router-dom';

class Game extends React.Component{

  componentDidMount() {
    const canvas = this.refs.canvas;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    this._startGame();
  }

  _startGame() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    console.log(canvas.getBoundingClientRect());
    const canvasPos = [canvas.getBoundingClientRect().x.toFixed(), 213];

    document.onmousemove = (e) => {
      if(e.screenX > canvasPos[0] && e.screenY > canvasPos[1] && e.ctrlKey !== true){
        ctx.fillRect(e.screenX - canvasPos[0] - 10, e.screenY - canvasPos[1] - 10, 20, 20);
      }
    };
  }

  componentWillUnmount() {
    document.onmousemove = () => {};
  }

  render() {
    return (
      <div className="app-content">
        <h1>Paint</h1>
        <Link to='/'>
          <button className="exit-btn">Go Home</button>
        </Link>
        <p>Move mouse on canvas to draw! Hold ctrl to move without drawing.</p>
        <canvas
          ref='canvas'
          style={{height: 481, width: window.innerWidth - 50, backgroundColor: 'white'}}
        />
      </div>
    );
  }
}

export default Game;