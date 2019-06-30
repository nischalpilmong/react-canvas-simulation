import React, {Component} from 'react';

import classes from './MouseCoordinates.css';

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
 /*   componentDidMount() {
    this.startCanvas();
  }
  startCanvas() {
    var context = this.refs.canvasPaths.getContext('2d');




  }  */



  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }






  render() {
    const { x, y } = this.state;

    return (
        <div className="container">
          <div>
            <img onClick={this._onMouseMove.bind(this)} width="100" height="150" src="http://www.mariogiannini.com/wp-content/uploads/2017/10/Photo-200x300.jpg" />
          </div>
          <h1>{ x } { y }</h1><br/>
        </div>
    )
  };
}

export default canvasPaths;