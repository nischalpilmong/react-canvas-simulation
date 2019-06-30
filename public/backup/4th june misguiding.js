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
    cordinates: {
      x: null,
      y: null,
      a: null,
      b: null
    },
    missedUserLocation: {
      userX: null,
      userY: null
    },
    middlePathLocation: {
      s: null,
      y: null
    },
    loadingStartWalkingButton: 0,
    counter: 0,
    counter1: 0
  }

  componentDidMount() {
    console.log('lado')
    var context = this.refs.canvasPathss.getContext('2d');
    const img = this.refs.image
    img.onload = () => {
      context.drawImage(img, 0, 0)
      context.font = "40px Courier"
    }
  }
  save(cordinates) {
    console.log('cordinates saved are  are', cordinates)
    this.state.cordinatess.push(cordinates);
    this.state.cordinatesWalk.push(cordinates);
  }
  startWalk() {
    this.setState({
      ...this.state,
      loadingStartWalkingButton: 1
    });
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
    this.drawCircle(context, this.state.cordinates.x, this.state.cordinates.y);
    this.drawCircle(context, this.state.cordinates.a, this.state.cordinates.b);

    if (this.state.missedUserLocation.s === null && this.state.missedUserLocation.g === null) {

      this.setState({
        cordinates: {
          ...this.state.cordinates,
          s: this.state.cordinates.x,
          g: this.state.cordinates.y
        }
      });
    }



  }
  startDrawCircle(e) {
    var context = this.refs.canvasPathss.getContext('2d');
    context.beginPath();
    var x = e.nativeEvent.offsetX;
    var y = e.nativeEvent.offsetY;
    var radian = Math.PI / 180;
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.arc(x, y, 15, 0 * radian, 360 * radian, false);
    context.stroke();
    context.fill();
    console.log('x, y is ', e.nativeEvent.offsetX, e.nativeEvent.offsetY)
  }

  misGuide() { // hamro line path ko middle ma aauna kaam lagcha yesle
    var s = (this.state.cordinates.x + this.state.cordinates.a) / 2;
    var g = (this.state.cordinates.y + this.state.cordinates.b) / 2;

    var userX = ((this.state.cordinates.x + this.state.cordinates.a) / 2) - 30;
    var userY = ((this.state.cordinates.y + this.state.cordinates.b) / 2) - 200;
    this.setState({
      missedUserLocation: {
        ...this.state.missedUserLocation,
        userX: userX,
        userY: userY
      }
    });
    this.setState({
      middlePathLocation: {
        ...this.state.middlePathLocation,
        s: s,
        g: g
      }
    });
    this.startDrawCircleMisGuide(userX, userY);
    this.drawText(userX, userY);
    console.log('s, g is ', userX, userY)

  }
  startDrawCircleMisGuide(s, g) { // misguiding algoritm
    var context = this.refs.canvasPathss.getContext('2d');
    context.beginPath();

    var radian = Math.PI / 180;
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.arc(s, g, 15, 0 * radian, 360 * radian, false);
    context.stroke();
    context.fill();
  }
  drawText(userX, userY) { // misguiding ko ho
    var context = this.refs.canvasPathss.getContext('2d');
    context.beginPath();
    context.font = "45px Verdana";
    context.fillStyle = "purple";
    var fText = 'user';
    context.fillText(fText, userX + 50 , userY +50 );
  }
  misGuideAlgoritm() { // misguiding algoritm ho yo
    this.drawLineAlgoritm();
  }
  drawLineAlgoritm() { // misguiding algoritm ho yo
    var context = this.refs.canvasPathss.getContext('2d');
    context.beginPath(); // reset the context state
    context.strokeStyle = "black"; // color of the line
    context.lineWidth = 28; // thickness of the line
    context.moveTo(this.state.missedUserLocation.userX, this.state.missedUserLocation.userY); // moveTo(x,y) -> starting point of the line
    context.lineTo(this.state.middlePathLocation.s, this.state.middlePathLocation.g); // line(x,y) -> end point of the line
    context.stroke(); // draws the line
    context.moveTo(this.state.missedUserLocation.userX, this.state.missedUserLocation.userY); // moveTo(x,y) -> starting point of the line
    context.lineTo(this.state.cordinates.a, this.state.cordinates.b); // line(x,y) -> end point of the line
    context.stroke();
    this.startDrawCircleMisGuide(this.state.middlePathLocation.s, this.state.middlePathLocation.g);
  }

  startDrawText(e) {
    var context = this.refs.canvasPathss.getContext('2d');
    context.beginPath();
    var x = e.nativeEvent.offsetX;
    var y = e.nativeEvent.offsetY;
    context.font = "45px Verdana";
    context.fillStyle = "purple";
    var fText = this.state.counter;
    context.fillText(fText, x + 50 , y +50 );


  }
  _onMouseMove(e) {
    var counter = this.state.counter + 1;
    this.setState({
      ...this.state,
      counter: counter
    });
    console.log('counter is ', counter)
    this.startDrawText(e);
    this.startDrawCircle(e);

    if (this.state.cordinates.x === null && this.state.cordinates.y === null) {
      this.setState({
        cordinates: {
          ...this.state.cordinates,
          x: e.nativeEvent.offsetX,
          y: e.nativeEvent.offsetY
        }
      });
    } else if (this.state.cordinates.a === null && this.state.cordinates.b === null) {

      this.setState({
        cordinates: {
          ...this.state.cordinates,
          a: e.nativeEvent.offsetX,
          b: e.nativeEvent.offsetY
        }
      });
    } else if (this.state.cordinates.x !== null && this.state.cordinates.y !== null && this.state.cordinates.a !== null && this.state.cordinates.b !== null) {
      this.setState({
        cordinates: {
          ...this.state.cordinates,
          x: this.state.cordinates.a,
          y: this.state.cordinates.b,
          a: e.nativeEvent.offsetX,
          b: e.nativeEvent.offsetY
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
    window.location.reload();
  }
  animateWalk(context, cordinatesWalkpopItem, movementValueX, movementValueY) {
    context.fillStyle = 'red';
    var demo1 = cordinatesWalkpopItem.x - cordinatesWalkpopItem.a;
    var demo2 = cordinatesWalkpopItem.y - cordinatesWalkpopItem.b;
    var divideDemo1 = demo1 / demo2; // 13.57
    var divideDemo2 = demo2 / demo2; // 1
    var subDemo1 = divideDemo1 * demo2;
    var subDemo2 = divideDemo2 * demo2;
    this.finalAnimate(cordinatesWalkpopItem, divideDemo1, divideDemo2, demo1, demo2, subDemo1, subDemo2);
  }
  finalAnimate(cordinatesWalkpopItem, divideDemo1, divideDemo2, demo1, demo2, subDemo1, subDemo2) {
    if (demo2 > 0) {
      for (var i = 0; i < demo2; i++) {
        this.timeoutID = setTimeout(() => this.intervalWalk(cordinatesWalkpopItem, divideDemo1, divideDemo2, demo1, demo2), 1000);
      }
    }
    if (demo2 < 0) {
      for (var i = 0; i > demo2; i--) {
        this.timeoutID = setTimeout(() => this.interval2Walk(cordinatesWalkpopItem, divideDemo1, divideDemo2, demo1, demo2), 1000);

      }
    }
  }
  intervalWalk(cordinatesWalkpopItem, divideDemo1, divideDemo2, demo1, demo2) {
    var context = this.refs.canvasPathss.getContext('2d');
    context.fillRect(cordinatesWalkpopItem.x = cordinatesWalkpopItem.x - divideDemo1, cordinatesWalkpopItem.y = cordinatesWalkpopItem.y - divideDemo2, 15, 15);

  }
  interval2Walk(cordinatesWalkpopItem, divideDemo1, divideDemo2, demo1, demo2) {
    var context = this.refs.canvasPathss.getContext('2d');
    context.fillRect(cordinatesWalkpopItem.x = cordinatesWalkpopItem.x + divideDemo1, cordinatesWalkpopItem.y = cordinatesWalkpopItem.y + divideDemo2, 15, 15);


  }
  walk() {
    if(this.state.counter1 === 0) {
      alert('You are About to Start Walking')
    }
    else if (this.state.counter1 === 1) {
      alert('You are already on Vertex 1, now move to Vertex 2 ')
    }
    else if (this.state.counter1 === 2) {
      alert('You are already on Vertex 2, now move to Vertex 3')
    }
    else if (this.state.counter1 === 3) {
      alert('You are on Vertex 3, now move to Vertex 3')
    }
    else if (this.state.counter1 === 4) {
      alert('You are on Vertex 4, now move to Vertex 5')
    }
    else if (this.state.counter1 === 5) {
      alert('You are on Vertex 5, now move to Vertex 6')
    }
    else {
      alert('You are on Vertex ')
    }



    if (this.state.loadingStartWalkingButton !== 0) {
      var counter1 = this.state.counter1 + 1;
      this.setState({
        ...this.state,
        counter1: counter1
      });
      console.log('counter is ', counter1)
      /*   if(this.state.counter1 === 0) {
          alert('You are About to Start Walking')
        }
        else if (this.state.counter1 === 1) {
          alert('You are on Vertex 1')
        }
        else if (this.state.counter1 === 2) {
          alert('You are on Vertex 2')
        }
        else if (this.state.counter1 === 3) {
          alert('You are on Vertex 3')
        }
        else {
          alert('You are on Vertex ')
        } */
      this.calcMove('sandeep', this.drawEverything.bind(this));



    } else {
      alert('please click button STARTING USER POSITION')
    }
  }
  drawEverything(cordinatesWalkpopItem, movementValueX, movementValueY) {
    var context = this.refs.canvasPathss.getContext('2d');
    this.animateWalk(context, cordinatesWalkpopItem, movementValueX, movementValueY);
    var demo1 = cordinatesWalkpopItem.x - movementValueX;
    var demo2 = cordinatesWalkpopItem.y - movementValueY;

  }
  calcMove(name, callback) {

    if (this.state.cordinatesWalk.length !== 0) {



      var cordinatesWalkpopItem = this.state.cordinatesWalk.shift();

      var movementValueX = cordinatesWalkpopItem.x - cordinatesWalkpopItem.a;
      var movementValueY = cordinatesWalkpopItem.y - cordinatesWalkpopItem.b;


      this.setState((state) => {
        return {
          ...state,
          ballX: movementValueX,
          ballY: movementValueY
        }
      });
      callback(cordinatesWalkpopItem, movementValueX, movementValueY);
    } else {
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
            <li><Button variant="contained" color="primary" className={classes.button}  onClick={this.startWalk.bind(this)}>starting User position
              <IoIosBody/>
            </Button></li>

            <li><Button variant="contained" color="primary" className={classes.button}  onClick={this.walk.bind(this)}>start walking
              <IoIosBody/>
            </Button></li>
            <li><Button variant="contained" color="primary" className={classes.button}  onClick={this.misGuide.bind(this)}>Miss Guided User
              <IoIosBody/>
            </Button></li>
            <li><Button variant="contained" color="primary" className={classes.button}  onClick={this.misGuideAlgoritm.bind(this)}>Miss Guided Algorithm
              <IoIosBody/>
            </Button></li>

          </ul>
          <canvas className="multi-line-canvas" ref="canvasPathss" width="1400" height="600"  onClick={this._onMouseMove.bind(this)}>

            THIS IS FALLBACK MESSAGE FOR OLD BROWSERS

            YOUR BROWSER IS NOT SUPPORTING CANVAS
          </canvas>
          <img ref="image" src='tile.png' className="hidden" />
          <h1>{ x } { y }</h1><br/>
          <h1>{ a } { b }</h1><br/>
        </div>
    )
  };
}

export default canvasPaths;