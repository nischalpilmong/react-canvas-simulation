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

    // this.save(this.state.cordinates.x, this.state.cordinates.y, this.state.cordinates.a, this.state.cordinates.b);
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
    //.....  setInterval(() => this.drawEverything(), 1000);

    // var cordinatesWalk = this.state.cordinatesWalk;

    // console.log('.....heheheheh...cordinates walk is ', cordinatesWalk)

    //  console.log('cordinates walk all item  ', this.state.cordinatesWalk);


    // this.drawEverything();

    this.calcMove('sandeep', this.drawEverything.bind(this));
    // setInterval(this.drawEverything(ballX), 1000);


  }




  drawEverything(cordinatesWalkpopItem) {



    console.log('cordinates to be calulated are  2 ', cordinatesWalkpopItem)
    var context = this.refs.canvasPathss.getContext('2d');
    context.fillStyle = 'red';
    context.fillRect(cordinatesWalkpopItem.x - this.state.ballX,cordinatesWalkpopItem.y - this.state.ballY,15,15);

    /*  if(cordinatesWalkpopItem.a === cordinatesWalkpopItem.x - this.state.ballX && cordinatesWalkpopItem.b === cordinatesWalkpopItem.y - this.state.ballY) {
       console.log('you are on vertex ');
     }
     else {
       console.log('lamo', )
     } */
    var demo1 = cordinatesWalkpopItem.x - this.state.ballX;
    var demo2 = cordinatesWalkpopItem.y - this.state.ballY;

    console.log('the cordinates of red point is ', demo1, demo2)

    console.log('cordinates glich is', cordinatesWalkpopItem.a, cordinatesWalkpopItem.b )

    console.log('........demo rough ......')
    console.log('cordinates x is',cordinatesWalkpopItem.x );
    console.log('ballX is', this.state.ballX);
    console.log('cordinates y is',cordinatesWalkpopItem.y );
    console.log('ballY is', this.state.ballY);


  }





  calcMove(name, callback) {

    //  var ballX = this.state.ballX;
    //  var ballY = this.state.ballY;
    var cordinatesWalkpopItem  =  this.state.cordinatesWalk.shift();

    console.log('cordinates total are ', this.state.cordinatess)
    console.log('cordinates to be animated remaining are  ', this.state.cordinatesWalk)

    console.log('cordinates to be calulated are  1 ', cordinatesWalkpopItem)




    console.log(name)
    var movementValueX = cordinatesWalkpopItem.x - cordinatesWalkpopItem.a;
    var movementValueY = cordinatesWalkpopItem.y - cordinatesWalkpopItem.b;

    console.log('movmentValueX is ', movementValueX)
    console.log('movmentValueY is ', movementValueY)

    //  this.change(ballX, ballY, movementValueX, movementValueY, cordinatesWalkpopItem);
    this.setState((state) => {
      return {
        ...state,
        ballX: movementValueX,
        ballY: movementValueY
        // movement value is 717
      }
    });
    callback(cordinatesWalkpopItem);

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