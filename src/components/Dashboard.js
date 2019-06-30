import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CanvasClick from './UserMovementSimulation/CanvasClick';
import CanvasClicks from './ProblemSimulation/CanvasClick';
import './Dashboard.css';

class Blog extends Component {
  render () {
    return (
        <div className="Dashboard">
          <header>
            <nav>
              <ul>
                <li><Link to="/">User movement Simulation</Link></li>
                <li><Link to="/Dashboard">Problem Simulation</Link></li>
              </ul>
            </nav>
          </header>
          {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
          <Route path="/" exact component={CanvasClick} />
          <Route path="/Dashboard" component={CanvasClicks} />
        </div>
    );
  }
}

export default Blog;