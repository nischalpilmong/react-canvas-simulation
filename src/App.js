import React, { Component } from "react";
import Dashboard from '../src/components/Dashboard'
import { BrowserRouter } from 'react-router-dom';

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
