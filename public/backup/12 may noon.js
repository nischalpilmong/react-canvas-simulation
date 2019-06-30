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
    x: 0, y: 0
  }
  componentDidMount() {
    this.startCanvas();
  }
  startCanvas() {
    var context = this.refs.canvasPaths.getContext('2d');
    /* variable declration area */


    /* ends */

    // Draw line steps
    // context.addEventListener("mousedown", getPosition, false);




  }



  /*   getPosition() {
       var x = new Number();
     var y = new Number();
     var canvas = document.getElementById("canvas");

     if (event.x != undefined && event.y != undefined)
     {
       x = event.x;
       y = event.y;
     }
     else // Firefox method to get the position
     {
       x = event.clientX + document.body.scrollLeft +
           document.documentElement.scrollLeft;
       y = event.clientY + document.body.scrollTop +
           document.documentElement.scrollTop;
     }

     x -= canvas.offsetLeft;
     y -= canvas.offsetTop;

     alert("x: " + x + "  y: " + y);
   } */
  /*  getPosition(event) {
     console.log('this is:', event);
     var x = new Number();
     var y = new Number();

     var context = this.refs.canvasPaths.getContext('2d');

     if (event.x != undefined && event.y != undefined)
     {
       x = event.x;
       y = event.y;
     }
     else // Firefox method to get the position
     {
       x = event.clientX + document.body.scrollLeft +
           document.documentElement.scrollLeft;
       y = event.clientY + document.body.scrollTop +
           document.documentElement.scrollTop;
     }
     x -= context.offsetLeft;
     y -= context.offsetTop;
     alert("x: " + x + "  y: " + y);
   } */


  _onMouseMove(e) {

    this.setState({
      ...this.state,
      x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY
    });

  }






  render() {
    const { x, y } = this.state;

    return (
        <div>
          <canvas className="multi-line-canvas" ref="canvasPaths" width="1400" height="600"  onClick={this._onMouseMove.bind(this)}>

            THIS IS FALLBACK MESSAGE FOR OLD BROWSERS

            YOUR BROWSER IS NOT SUPPORTING CANVAS

          </canvas>
          <p className="demo"> hiiihi</p>
          <h1>{ x } { y }</h1><br/>

        </div>
    )
  };
}

export default canvasPaths;