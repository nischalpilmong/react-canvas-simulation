import React, {Component} from 'react';

import classes from './UserMovementSimulation.css';

class canvasPaths extends Component {
  state = {
    /* cordinates: {
      x: 1290,
      y: 180,
      x1: 1090,
      y1: 560,
      x2: 100,
      y2: 560,
      x3: 30,
      y3: 180
    }, */
    loading: true,
    ballX: 50,
    cordinatess: [],
    // x: 0, y: 0, a:0, b:0
    cordinates: {
      x: null,
      y: null,
      a: null,
      b: null
    }

  }






  save(cordinates) {


    console.log('cordinates saved are  are', cordinates)

    this.state.cordinatess.push(cordinates);


  }


  draw() {

    var context = this.refs.canvasPathss.getContext('2d');

    context.beginPath(); // reset the context state
    context.strokeStyle = "black"; // color of the line
    context.lineWidth = 28; // thickness of the line
    context.moveTo(this.state.cordinates.x, this.state.cordinates.y); // moveTo(x,y) -> starting point of the line
    context.lineTo(this.state.cordinates.a, this.state.cordinates.b); // line(x,y) -> end point of the line
    context.stroke(); // draws the line

    // this.save(this.state.cordinates.x, this.state.cordinates.y, this.state.cordinates.a, this.state.cordinates.b);
    console.log('cordinates i need to animate are ', this.state.cordinates.x, this.state.cordinates.y, this.state.cordinates.a, this.state.cordinates.b)
    this.save(this.state.cordinates);
    this.drawCircle(context,this.state.cordinates.x,this.state.cordinates.y);

    this.drawCircle(context,this.state.cordinates.a,this.state.cordinates.b);

  }
  _onMouseMove(e) {
    if(this.state.cordinates.x === null && this.state.cordinates.y === null) {


      this.setState({
        cordinates: {
          ...this.state.cordinates,
          x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY
        }
        // x: e.nativeEvent.offsetX + 450, y: e.nativeEvent.offsetY
      });



    }
    else if (this.state.cordinates.a === null && this.state.cordinates.b === null) {

      this.setState({
        cordinates: {
          ...this.state.cordinates,
          a: e.nativeEvent.offsetX, b: e.nativeEvent.offsetY
        }
        // a: e.nativeEvent.offsetX, b: e.nativeEvent.offsetY
      });

    }
    else if (this.state.cordinates.x !== null && this.state.cordinates.y !== null && this.state.cordinates.a !== null && this.state.cordinates.b !== null) {

      this.setState({
        cordinates: {
          ...this.state.cordinates,
          x: this.state.cordinates.a, y: this.state.cordinates.b,
          a: e.nativeEvent.offsetX, b: e.nativeEvent.offsetY
        }
        /*   x: this.state.a, y: this.state.b,
          a: e.nativeEvent.offsetX + 450, b: e.nativeEvent.offsetY */
      });

    }


    /*  var context = this.refs.canvasPathss.getContext('2d');
 this.drawCircle(context, this.state.cordinates.x, this.state.cordinates.y) */

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
    console.log('cordinates finally saved in array are  ', this.state.cordinatess)
    // console.log('cordinatesssss is', this.state.cordinatess)

  }

  walk() {
    // var ballX = this.state.ballX;
    setInterval(() => this.drawEverything(), 1000);
    // setInterval(this.drawEverything(ballX), 1000);


  }



  drawEverything() {

    // ballX = ballX + 5;
    var ballX = this.state.ballX

    this.change(ballX);
    console.log('cordinates after animations are   ', this.state.cordinatess)

    console.log(this.state.ballX);
    var context = this.refs.canvasPathss.getContext('2d');


    context.fillStyle = 'red';
    /*  context.fillRect(ballX,100,10,10);
     context.clearRect(ballX - 50, 100,10,10); */
    context.fillRect(this.state.cordinates.x,this.state.cordinates.y,10,10);
    context.clearRect(ballX - 50, 100,10,10);
  }

  change(ballX) {

    /*    this.setState({
          ...this.state,
        ballX: ballX + 50

        // x: e.nativeEvent.offsetX + 450, y: e.nativeEvent.offsetY
      }); */
    this.setState((state) => {
      return {
        ...state,
        ballX: ballX + 50
      }
    });


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
          <button  onClick={this.walk.bind(this)}>start walking </button>
          <h1>{ x } { y }</h1><br/>
          <h1>{ a } { b }</h1><br/>

        </div>
    )
  };
}

export default canvasPaths;