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
    let isDrawing = false;
    let brushSize = 10;

    document.onscroll = e => {
      console.log(e);
    }

    document.onmousedown = (e) => {
      isDrawing = true;
      ctx.fillRect(e.clientX - canvasPos[0] - 5, e.clientY - canvasPos[1], brushSize, brushSize);
    }
    document.onmouseup = () => {
      isDrawing = false;
    }

    document.onkeydown = e => {
      if (e.code === 'ControlLeft') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    document.onmousemove = (e) => {
      if(isDrawing === true && e.clientX > canvasPos[0] && e.clientY > canvasPos[1] - 5){
        ctx.fillRect(e.clientX - canvasPos[0] - 5, e.clientY - canvasPos[1], brushSize, brushSize);
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
          <span>Move mouse on canvas to draw! Press lctrl to clear.</span>
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