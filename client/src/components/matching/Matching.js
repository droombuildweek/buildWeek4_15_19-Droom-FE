import React, { Component } from "react";
import Slider from "react-slick";

import "./Matching.scss";

class Matching extends Component {
  render() {
    var settings = {
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      // prevArrow: (
      //   <button type="button" className="slick-prev">
      //     Match
      //   </button>
      // ),
      // nextArrow: (
      //   <button type="button" className="slick-next">
      //     Next
      //   </button>
      // )
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Matching;
