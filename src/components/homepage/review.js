
import React, { Component } from "react";
import Slider from "react-slick";
import ComplexGrid from "./reviewSlider";
import '../../css/rentalfleet.css'


export default class Reviews extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

    };
    return (
      <div className="revall">
        <div className='fleetjd'>
      <h3 className='fleetle'>Customer Review</h3>
      <div className='emflt'><em >Luxury RentCar Rental Services</em></div>
      
      </div>
        <Slider {...settings}>
          <div>
            <h3><ComplexGrid/></h3>
          </div>
          <div>
            <h3><ComplexGrid/></h3>
          </div>
          <div>
            <h3><ComplexGrid/></h3>
          </div>
          <div>
            <h3><ComplexGrid/></h3>
          </div>
          
        </Slider>
      </div>
    );
  }
}