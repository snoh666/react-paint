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
    const canvasPos = [canvas.getBoundingClientRect().x, canvas.getBoundingClientRect().y];

    window.onmousemove = (e) => {
      if(e.shiftKey === true) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else if(e.clientX > canvasPos[0] && e.clientY > canvasPos[1] && e.ctrlKey !== true){
        ctx.fillRect(e.clientX - canvasPos[0] - 10, e.clientY - canvasPos[1], 20, 20);
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
        <div className="description">
          <span>Move mouse on canvas to draw! Hold ctrl to move without drawing. Shift to clear.</span>
        </div>
        <canvas
          ref='canvas'
          style={{height: 481, width: window.innerWidth - 50, backgroundColor: 'white'}}
        />
      </div>
    );
  }
}

export default Game;