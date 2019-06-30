import React, { Component } from "react";
import Canvas from '../src/components/Canvas/Canvas'
import CanvasPaths from '../src/components/CanvasPaths/CanvasPaths'
import CanvasClick from '../src/components/UserMovementSimulation/UserMovementSimulation'
import MouseCordinates from '../src/components/MouseCoordinates/MouseCoordinates'
import classes from './App.css';
class App extends Component {
  render() {
    return (
        <div className="App">
          <p className='Heading'> Cutomers List </p>
          <Canvas />
          <CanvasPaths/>
          <CanvasClick/>
          <MouseCordinates/>

        </div>
    );
  }
}

export default App;
