import React, { Component } from "react";
import Canvas from '../src/components/Canvas/Canvas'
import CanvasPaths from '../src/components/CanvasPaths/CanvasPaths'
import CanvasClick from './components/UserMovementSimulation/CanvasClick'
import MouseCordinates from '../src/components/MouseCoordinates/MouseCoordinates'
import Animation from '../src/components/Animation/Animation'
import CanvasClicks from './components/ProblemSimulation/CanvasClick'
import Home from '../src/components/Home/Home'
import Dashboard from '../src/components/Dashboard'
import { BrowserRouter } from 'react-router-dom';


import classes from './App.css';
class App extends Component {
  render() {
    return (

        <BrowserRouter>
          <p className='Heading'><strong> GEOLOCATION GEOLYPHIC ART  </strong> </p>
        <div className="App">
         <Dashboard/>
        </div>
        </BrowserRouter>
    );
  }
}
export default App;
