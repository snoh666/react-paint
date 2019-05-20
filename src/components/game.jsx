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
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';

    document.onmousedown = (e) => {
      isDrawing = true;
      ctx.fillRect(e.clientX - brushSize / 2 + window.pageXOffset, e.clientY + window.pageYOffset, brushSize, brushSize);
    }
    document.onmouseup = () => {
      isDrawing = false;
    }

    document.onkeydown = e => {
      if (e.code === 'ControlLeft') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else if(e.code === 'NumpadAdd') {
        brushSize += 5;
      } else if(e.code === 'NumpadSubtract') {
        if(brushSize > 5) {
          brushSize -= 5;
        }
      }
    }

    document.onmousemove = (e) => {
      if(isDrawing === true && e.clientX > canvasPos[0] && e.clientY > canvasPos[1] - 5){
        ctx.fillRect(e.clientX - brushSize / 2 +  window.pageXOffset, e.clientY + window.pageYOffset, brushSize, brushSize);
        // ctx.beginPath();
        // ctx.arc(e.clientX - canvasPos[0], e.clientY - canvasPos[1], brushSize / 2, 0, Math.PI * 2);
        // ctx.fill();
      }
    };

    this.refs.downloadBtn.addEventListener('click', function() {

      let png = canvas.toDataURL('image/png', 1.0);
      this.href = png;

    });
  }

  componentWillUnmount() {
    document.onmousemove = () => {};
  }

  render() {
    return (
      <div className="app-content">
        <a ref='downloadBtn' href="#" className="download" download="canvas.png">Save</a>
        <Link to='/'>
          <button className="exit-btn" target="_blank" download='canvas.png'>Go Home</button>
        </Link>
        <canvas
          ref='canvas'
          style={{height: window.innerHeight, width: window.innerWidth, backgroundColor: 'white'}}
        />
      </div>
    );
  }
}

export default Game;