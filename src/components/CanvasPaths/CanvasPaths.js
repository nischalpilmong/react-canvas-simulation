import React, {Component} from 'react';

import classes from './CanvasPaths.css';

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
    loading: true
  }
  componentDidMount() {
   // this.startCanvas();
  }
  draw() {
    this.startCanvas();

  }
  startCanvas() {
    var context = this.refs.canvasPaths.getContext('2d');
    /* variable declration area */
    const {x,y,x1,y1,x2,y2,x3,y3} = this.state.cordinates



    /* ends */

    // Draw line steps
    context.beginPath(); // reset the context state
    context.strokeStyle = "black"; // color of the line
    context.lineWidth = 28; // thickness of the line
    context.moveTo(x, y); // moveTo(x,y) -> starting point of the line
    context.lineTo(x1, y1); // line(x,y) -> end point of the line
    context.stroke(); // draws the line
    drawCircle(context,x,y);
    drawCircle(context,x1,y1);



    context.moveTo(x1, y1); // moveTo(x,y) -> starting point of the line
    context.lineTo(x2, y2); // line(x,y) -> end point of the line
    context.stroke(); // draws the line
    drawCircle(context,x1,y1);
    drawCircle(context,x2,y2);


    context.moveTo(x2, y2); // moveTo(x,y) -> starting point of the line
    context.lineTo(x3, y3); // line(x,y) -> end point of the line
    context.stroke(); // draws the line
    drawCircle(context,x2,y2);
    drawCircle(context,x3,y3);








  function drawCircle(context, X, Y) {

    var radian = Math.PI / 180;
    // context.arc(centerX, centerY, radius, startAngle, endAngle, antiClockwiseDirection);
    context.beginPath();
    context.strokeStyle = "black";

    context.fillStyle = "black";
    context.arc(X, Y, 15, 0 * radian, 360 * radian, false);
    context.stroke();
    context.fill();

  }








}
  render() {


    return (
        <div>
          <canvas className="multi-line-canvas" ref="canvasPaths" width="1400" height="600">

            THIS IS FALLBACK MESSAGE FOR OLD BROWSERS

            YOUR BROWSER IS NOT SUPPORTING CANVAS

          </canvas>
          <p className="demo"> hiiihi</p>
          <button  onClick={this.draw}>Draw Line</button>

        </div>
    )
  };
}

export default canvasPaths;