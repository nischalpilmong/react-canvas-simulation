import React, {Component, PropTypes} from 'react';

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

  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.refs.canvasPathsss.getContext('2d');

    var imageObj1 = new Image();
    imageObj1.src = 'https://s-media-cache-ak0.pinimg.com/236x/d7/b3/cf/d7b3cfe04c2dc44400547ea6ef94ba35.jpg'
    imageObj1.onload = function() {
      ctx.drawImage(imageObj1,0,0);
    }

  }

  render() {
    const { x, y, a, b } = this.state;
    return (
        <div>
          <p className='Heading'><strong> GEOLOCATION GEOLYPHIC ART  </strong> </p>



          <canvas className="multi-line-canvas" ref="canvasPathsss" width="1400" height="600">

            THIS IS FALLBACK MESSAGE FOR OLD BROWSERS

            YOUR BROWSER IS NOT SUPPORTING CANVAS
          </canvas>

        </div>
    )
  };
}

export default canvasPaths;