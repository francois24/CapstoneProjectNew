import React from 'react';
import '../App.css';
import Ourbenefits from './homepage/Ourbenefits';
import Rentalworks from './homepage/Rentalworks';
import Rentalfleet from './homepage/Rentalfleet';
import Carslick from './homepage/Carslick';
import Latestnews from './homepage/Latesnews'
import Reviews from './homepage/review';
import Banner from './homepage/banner'
import Rentalserv from './homepage/Rentalserv'

export default function Home() {
  return (
    <>
    <main>
      <Banner />
      <Ourbenefits/>
      <Rentalworks/>
      <Rentalfleet/>
      <Carslick/>
      <Rentalserv/>
      <Latestnews/>
      <Reviews/>
    </main>
    </>
  );
}
