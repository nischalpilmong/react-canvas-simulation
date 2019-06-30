import React, {Component} from 'react';

import classes from './Animation.css';

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



  componentDidMount(){
   this.lamo =  setInterval(() => this.drawEverything(), 1000);
  }




  drawEverything() {

    // ballX = ballX + 5;
    var ballX = this.state.ballX

    this.change(ballX);
    console.log('cordinates after animations are   ', this.state.cordinatess)

    console.log(this.state.ballX);
    var context = this.refs.canvasPathss.getContext('2d');


    context.fillStyle = 'red';
    context.fillRect(ballX,100,10,10);
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


    return (
        <div>
          <canvas className="multi-line-canvas" ref="canvasPathss" width="1400" height="600">

            THIS IS FALLBACK MESSAGE FOR OLD BROWSERS

            YOUR BROWSER IS NOT SUPPORTING CANVAS

          </canvas>


        </div>
    )
  };
}

export default canvasPaths;