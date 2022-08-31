import React, { Component } from "react";
import Slider from "react-slick";
import LatestCard1 from './LatestCard1'
import LatestCard2 from './LatestCard2'
import LatestCard3 from './LatestCard3'
import LatestCard4 from './LatestCard4'
import '../../css/Latest.css'
import {Col, Row, Container} from 'react-bootstrap';

export default class SimpleSlider1 extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 813,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (<div className="Latestall">
      <Container class="m-5">
      <Row>
        <Col ><h1 class="text-center mt-5 h4"style={{fontSize:'2rem',fontWeight:'bolder'}}>LATEST NEWS</h1>
        <p class="text-center hh4 mb-4">Luxury AutoStar Rental Services</p>
        <p class="text-center p1">Amco laboris nisi ut aliquip xea comod consequt duis aute irure dolor reprehenderit</p>
        <p class="text-center p1">voluptate velit cillum dolore fugiat lore ipsum dolor sit amet consectetur adipisicing</p>
        <p class="text-center p1 mb-5">elit sed do eiusmod tempor incididunt</p>
        </Col>
      </Row>
    </Container>
    
      <div className="sisliall1">
        <Slider {...settings}>
          <div>
      <LatestCard1/>
          </div>
          <div>
        <LatestCard2/>
          </div>
          <div>
      <LatestCard3/>
          </div>
          <div>
          <LatestCard4/>
          </div>
          {/* <div>
          <CardLatestnews/>
          </div> */}
        </Slider>
      </div>
      </div>
    );
  }
}