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
    },

    loadingStartWalkingButton: 0,

  }

  componentDidMount() {
    console.log('lado')
    var context = this.refs.canvasPathss.getContext('2d');
    const img = this.refs.image
    img.onload = () => {
      context.drawImage(img, 0, 0)
      context.font = "40px Courier"
    }

    /*  var image = new Image();

     image.onLoad = () => {
       console.log('ladooo00')
       context.drawImage(image, 40, 50, 40, 50);
     };
     image.src = "tile.png"; */
  }

  save(cordinates) {


    console.log('cordinates saved are  are', cordinates)
    this.state.cordinatess.push(cordinates);
    this.state.cordinatesWalk.push(cordinates);
  }
  startWalk() {

    //  this.state.cordinatesWalk.unshift({x: 0, y: 0, a: this.state.cordinatess[0].x, b: this.state.cordinatess[0].y});
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
  /*  lamo() {
     //console.log('dsjkfbsdjkfhsdkfjsd')
     var context = this.refs.canvasPathss.getContext('2d');
     var tile = new Image()
     tile.src = 'tile.png';
     console.log('tile src is ', tile.src)

       console.log('dfsdfjdjfhsdjkfhsdfsfjsdhksdkjfs..........')
       context.drawImage(tile,  0, 0);


   } */
  animateWalk(context, cordinatesWalkpopItem, movementValueX, movementValueY) {
    context.fillStyle = 'red';
    //  context.fillRect(cordinatesWalkpopItem.x - movementValueX, cordinatesWalkpopItem.y - movementValueY, 15, 15);

    var demo1 = cordinatesWalkpopItem.x - cordinatesWalkpopItem.a ;
    var demo2 =cordinatesWalkpopItem.y - cordinatesWalkpopItem.b;

    var divideDemo1 = demo1 / demo2; // 13.57
    var divideDemo2 = demo2 / demo2; // 1

    var subDemo1 = divideDemo1 * demo2;
    var subDemo2 = divideDemo2 * demo2;
    this.finalAnimate(cordinatesWalkpopItem, divideDemo1, divideDemo2, demo1, demo2, subDemo1, subDemo2);

    console.log('beeeeeeen hereeeee')
  }
  finalAnimate(cordinatesWalkpopItem, divideDemo1, divideDemo2, demo1, demo2, subDemo1, subDemo2) {
    if (demo2 > 0) {

      // Do Something
      for (var i = 0; i < demo2; i++) {
        //   window.setTimeout(callback, 1000 / 60)
        this.timeoutID = setTimeout(() =>  this.intervalWalk(cordinatesWalkpopItem, divideDemo1, divideDemo2, demo1, demo2), 1000);


        /* ...   cordinatesWalkpopItem.x = cordinatesWalkpopItem.x - divideDemo1;
          cordinatesWalkpopItem.y = cordinatesWalkpopItem.y - divideDemo2;
          var context = this.refs.canvasPathss.getContext('2d');

          // context.fillRect(cordinatesWalkpopItem.x - divideDemo1, cordinatesWalkpopItem.y - divideDemo2, 15, 15);
          context.fillRect(cordinatesWalkpopItem.x, cordinatesWalkpopItem.y, 15, 15);

        /*   context.fillStyle = 'black';
          context.fillRect(cordinatesWalkpopItem.x, cordinatesWalkpopItem.y, 15, 15); */

      }

    }
    if(demo2 < 0) {
      console.log('lammooooooo negative ')
      for (var i = 0; i > demo2; i--) {
        this.timeoutID = setTimeout(() =>  this.interval2Walk(cordinatesWalkpopItem, divideDemo1, divideDemo2, demo1, demo2), 1000);
        /* ...  cordinatesWalkpopItem.x = cordinatesWalkpopItem.x + divideDemo1
          cordinatesWalkpopItem.y = cordinatesWalkpopItem.y + divideDemo2
          var context = this.refs.canvasPathss.getContext('2d');
          console.log('lammooooooo positive ')
         // context.fillRect(cordinatesWalkpopItem.x + divideDemo1, cordinatesWalkpopItem.y - divideDemo2, 15, 15);
          context.fillRect(cordinatesWalkpopItem.x, cordinatesWalkpopItem.y, 15, 15);
         /*  context.fillStyle = 'black';
          context.fillRect(cordinatesWalkpopItem.x, cordinatesWalkpopItem.y, 15, 15); */
      }
    }


  }
  intervalWalk(cordinatesWalkpopItem, divideDemo1, divideDemo2, demo1, demo2) {
    cordinatesWalkpopItem.x = cordinatesWalkpopItem.x - divideDemo1;
    cordinatesWalkpopItem.y = cordinatesWalkpopItem.y - divideDemo2;
    var context = this.refs.canvasPathss.getContext('2d');

    // context.fillRect(cordinatesWalkpopItem.x - divideDemo1, cordinatesWalkpopItem.y - divideDemo2, 15, 15);
    context.fillRect(cordinatesWalkpopItem.x, cordinatesWalkpopItem.y, 15, 15);

  }
  interval2Walk(cordinatesWalkpopItem, divideDemo1, divideDemo2, demo1, demo2) {
    cordinatesWalkpopItem.x = cordinatesWalkpopItem.x + divideDemo1
    cordinatesWalkpopItem.y = cordinatesWalkpopItem.y + divideDemo2
    var context = this.refs.canvasPathss.getContext('2d');
    console.log('lammooooooo positive ')
    // context.fillRect(cordinatesWalkpopItem.x + divideDemo1, cordinatesWalkpopItem.y - divideDemo2, 15, 15);
    context.fillRect(cordinatesWalkpopItem.x, cordinatesWalkpopItem.y, 15, 15);
    /*  context.fillStyle = 'black';
     context.fillRect(cordinatesWalkpopItem.x, cordinatesWalkpopItem.y, 15, 15); */

  }



  walk() {
    //  this.intervalID = setInterval(() =>  this.calcMove('sandeep', this.drawEverything.bind(this)), 1000);
    if(this.state.loadingStartWalkingButton !== 0) {
      this.intervalID = setInterval(() =>  this.calcMove('sandeep', this.drawEverything.bind(this)), 1000);
    }
    else {
      alert('please click button STARTING USER POSITION')
    }
  }


  drawEverything(cordinatesWalkpopItem, movementValueX, movementValueY) {

    console.log('cordinates to be calulated are  2 ', cordinatesWalkpopItem)
    var context = this.refs.canvasPathss.getContext('2d');
    /*  context.fillStyle = 'red';
     context.fillRect(cordinatesWalkpopItem.x - movementValueX,cordinatesWalkpopItem.y - movementValueY,15,15); */


    //this.lamo();
    this.animateWalk(context, cordinatesWalkpopItem, movementValueX, movementValueY);


    /*   context.fillStyle = 'black';
    context.fillRect(cordinatesWalkpopItem.x,cordinatesWalkpopItem.y,15,15); */

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
      // var context = this.refs.canvasPathss.getContext('2d');
      // context.clearRect(0,0,15,15);
      var cordinatesWalkpopItem = this.state.cordinatesWalk.shift();
      console.log('cordinates total are ', this.state.cordinatess)
      console.log('cordinates to be animated remaining are  ', this.state.cordinatesWalk)
      //  console.log('cordinates to be calulated are  1 ', cordinatesWalkpopItem)
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
            <li><Button variant="contained" color="primary" className={classes.button}  onClick={this.startWalk.bind(this)}>starting User position
              <IoIosBody/>
            </Button></li>

            <li><Button variant="contained" color="primary" className={classes.button}  onClick={this.walk.bind(this)}>start walking
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