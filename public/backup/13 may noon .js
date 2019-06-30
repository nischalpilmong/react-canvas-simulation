import React, {Component} from 'react';

import classes from './UserMovementSimulation.css';

class canvasPaths extends Component {
  state = {
    cordinates: {
      x: 1290,
      y: 180,
      x1: 1090,
      y1: 560,
      x2: 100,
      y2: 560,
      x3: 30,
      y3: 180
    },
    loading: true,
    cordinatess: [
      { x1: 0, y1:0, a1:0, b1:0 }
    ],
    x: 0, y: 0, a:0, b:0
  }



  draw() {

    var context = this.refs.canvasPathss.getContext('2d');

    context.beginPath(); // reset the context state
    context.strokeStyle = "black"; // color of the line
    context.lineWidth = 28; // thickness of the line
    context.moveTo(this.state.x, this.state.y); // moveTo(x,y) -> starting point of the line
    context.lineTo(this.state.a, this.state.b); // line(x,y) -> end point of the line
    context.stroke(); // draws the line
    this.drawCircle(context,this.state.x,this.state.y);

    this.drawCircle(context,this.state.a,this.state.b);

  }
  _onMouseMove(e) {
    if(this.state.x === 0 && this.state.y === 0) {


      this.setState({
        ...this.state,
        x: e.nativeEvent.offsetX + 450, y: e.nativeEvent.offsetY
      });

    }
    else if (this.state.a === 0 && this.state.b === 0) {

      this.setState({
        ...this.state,
        a: e.nativeEvent.offsetX, b: e.nativeEvent.offsetY
      });

    }


  }


  drawCircle(context, X, Y) {

    var radian = Math.PI / 180;
    // context.arc(centerX, centerY, radius, startAngle, endAngle, antiClockwiseDirection);
    context.beginPath();
    context.strokeStyle = "black";

    context.fillStyle = "black";
    context.arc(X, Y, 15, 0 * radian, 360 * radian, false);
    context.stroke();
    context.fill();

  }


  undraw() {
    console.log('state is ', this.state)

  }






  render() {
    const { x, y, a, b } = this.state;

    return (
        <div>
          <canvas className="multi-line-canvas" ref="canvasPathss" width="1400" height="600"  onClick={this._onMouseMove.bind(this)}>

            THIS IS FALLBACK MESSAGE FOR OLD BROWSERS

            YOUR BROWSER IS NOT SUPPORTING CANVAS

          </canvas>
          <p className="demo"> hiiihi</p>
          <button  onClick={this.draw.bind(this)}>Draw Line</button>
          <button  onClick={this.undraw.bind(this)}>Refresh</button>
          <h1>{ x } { y }</h1><br/>
          <h1>{ a } { b }</h1><br/>

        </div>
    )
  };
}

export default canvasPaths;