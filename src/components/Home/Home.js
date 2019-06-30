import React, {Component} from 'react';

import classes from './Home.css';

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
    loading: true
  }



  render() {


    return (
        <div id="wrapper">
          <section id="home" class="video-section js-height-full">
            <div class="overlay"></div>
            <div class="home-text-wrapper relative container">
              <div class="home-message">
                <p>Learning Management System</p>
                <small>Edulogy is the ideal choice for your organization, your business and your online education system. Create your online course now with unlimited page templates, color options, and menu features.</small>
                <div class="btn-wrapper">
                  <div class="text-center">
                    <a href="#" class="btn btn-primary wow slideInLeft">Read More</a> &nbsp;&nbsp;&nbsp;<a href="#" class="btn btn-default wow slideInRight">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider-bottom">

            </div>
          </section>
        </div>
    )
  };
}

export default canvasPaths;