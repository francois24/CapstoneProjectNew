import React, { Component } from "react";
import Slider from "react-slick";
import Forestersubaru from '../cars/Forestersubaru'
import Miragerange from '../cars/Miragerange'
import Mitsubishilancer from '../cars/Mitsubishilancer'
import Pajerorange from '../cars/Pajerorange'
import Subaruliberty from '../cars/Subaruliberty'
import Xvrangesubaru from '../cars/Xvrangesubaru'
import '../../css/carslick.css'

export default class Carslick extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 830,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
      <div className="sisliall">
        <Slider {...settings}>
          <div>
            <Forestersubaru/>
          </div>
          <div>
            <Miragerange/>
          </div>
          <div>
            <Mitsubishilancer/>
          </div>
          <div>
            <Pajerorange/>
          </div>
          <div>
            <Subaruliberty/>
          </div>
          <div>
            <Xvrangesubaru/>
          </div>
        </Slider>
      </div>
    );
  }
}