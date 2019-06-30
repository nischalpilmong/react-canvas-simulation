import React, {Component} from 'react';

import classes from './UserMovementSimulation.css';
import Popup from "reactjs-popup";
import Button from '@material-ui/core/Button';

import { MdSwapHoriz } from "react-icons/md";
import { IoIosBody } from "react-icons/io";

class canvasPaths extends Component {
  state = {
    loading: true,
    ballX: 0,
    ballY: 0,
    cordinatess: [],
    cordinatesWalk: [],

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
    this.state.cordinatesWalk.push(cordinates);
  }


  draw() {
    var context = this.refs.canvasPathss.getContext('2d');
    context.beginPath(); // reset the context state
    context.strokeStyle = "black"; // color of the line
    context.lineWidth = 28; // thickness of the line
    context.moveTo(this.state.cordinates.x, this.state.cordinates.y); // moveTo(x,y) -> starting point of the line
    context.lineTo(this.state.cordinates.a, this.state.cordinates.b); // line(x,y) -> end point of the line
    context.stroke(); // draws the line
    this.save(this.state.cordinates);
    this.drawCircle(context,this.state.cordinates.x,this.state.cordinates.y);
    this.drawCircle(context,this.state.cordinates.a,this.state.cordinates.b);
  }

  startDrawCircle(e) {
    var context = this.refs.canvasPathss.getContext('2d');
    context.beginPath();
    var  x = e.nativeEvent.offsetX;
    var   y = e.nativeEvent.offsetY;
    var radian = Math.PI / 180;
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.arc(x, y, 15, 0 * radian, 360 * radian, false);
    context.stroke();
    context.fill();
  }

  _onMouseMove(e) {
    this.startDrawCircle(e);
    if(this.state.cordinates.x === null && this.state.cordinates.y === null) {
      this.setState({
        cordinates: {
          ...this.state.cordinates,
          x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY
        }
      });
    }
    else if (this.state.cordinates.a === null && this.state.cordinates.b === null) {

      this.setState({
        cordinates: {
          ...this.state.cordinates,
          a: e.nativeEvent.offsetX, b: e.nativeEvent.offsetY
        }
      });

    }
    else if (this.state.cordinates.x !== null && this.state.cordinates.y !== null && this.state.cordinates.a !== null && this.state.cordinates.b !== null) {

      this.setState({
        cordinates: {
          ...this.state.cordinates,
          x: this.state.cordinates.a, y: this.state.cordinates.b,
          a: e.nativeEvent.offsetX, b: e.nativeEvent.offsetY
        }
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
    console.log('cordinates finally saved in array are  ', this.state.cordinatess)
  }

  walk() {
    this.intervalID = setInterval(() =>  this.calcMove('sandeep', this.drawEverything.bind(this)), 1000);
  }


  drawEverything(cordinatesWalkpopItem, movementValueX, movementValueY) {

    console.log('cordinates to be calulated are  2 ', cordinatesWalkpopItem)
    var context = this.refs.canvasPathss.getContext('2d');
    context.fillStyle = 'red';
    context.fillRect(cordinatesWalkpopItem.x - movementValueX,cordinatesWalkpopItem.y - movementValueY,15,15);


    //  context.clearRect(cordinatesWalkpopItem.x - movementValueX,cordinatesWalkpopItem.y - movementValueY,15,15);




    var demo1 = cordinatesWalkpopItem.x - movementValueX;
    var demo2 = cordinatesWalkpopItem.y - movementValueY;
    console.log('the cordinates of red point is ', demo1, demo2)
    console.log('cordinates glich is', cordinatesWalkpopItem.a, cordinatesWalkpopItem.b )
    console.log('........demo rough ......')
    console.log('cordinates x is',cordinatesWalkpopItem.x );
    console.log('ballX is', movementValueX);
    console.log('cordinates y is',cordinatesWalkpopItem.y );
    console.log('ballY is', movementValueY);
  }
  calcMove(name, callback) {
    if(this.state.cordinatesWalk.length !== 0) {
      var cordinatesWalkpopItem = this.state.cordinatesWalk.shift();
      console.log('cordinates total are ', this.state.cordinatess)
      console.log('cordinates to be animated remaining are  ', this.state.cordinatesWalk)
      console.log('cordinates to be calulated are  1 ', cordinatesWalkpopItem)
      console.log(name)

      var movementValueX = cordinatesWalkpopItem.x - cordinatesWalkpopItem.a;
      var movementValueY = cordinatesWalkpopItem.y - cordinatesWalkpopItem.b;
      console.log('movmentValueX is ', movementValueX)
      console.log('movmentValueY is ', movementValueY)

      this.setState((state) => {
        return {
          ...state,
          ballX: movementValueX,
          ballY: movementValueY
        }
      });
      callback(cordinatesWalkpopItem, movementValueX, movementValueY);
    }
    else {
      alert('everthing is done all path is completed');
      clearInterval(this.intervalID);

    }

  }
  render() {
    const { x, y, a, b } = this.state;
    return (
        <div>
          <p className='Heading'><strong> GEOLOCATION GEOLYPHIC ART  </strong> </p>


          <ul className='UL'>

            <li><Button variant="contained" color="primary" className={classes.button} onClick={this.draw.bind(this)}>Draw Line

              <MdSwapHoriz/>


            </Button></li>
            <li><Button variant="contained" color="primary" className={classes.button} onClick={this.undraw.bind(this)}>Refresh

            </Button></li>
            <li><Button variant="contained" color="primary" className={classes.button}  onClick={this.walk.bind(this)}>start walking
              <IoIosBody/>
            </Button></li>

          </ul>
          <canvas className="multi-line-canvas" ref="canvasPathss" width="1400" height="600"  onClick={this._onMouseMove.bind(this)}>

            THIS IS FALLBACK MESSAGE FOR OLD BROWSERS

            YOUR BROWSER IS NOT SUPPORTING CANVAS
          </canvas>
          <h1>{ x } { y }</h1><br/>
          <h1>{ a } { b }</h1><br/>
        </div>
    )
  };
}

export default canvasPaths;