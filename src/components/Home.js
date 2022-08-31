import React from 'react';
import '../App.css';
import Ourbenefits from './homepage/Ourbenefits';
import Rentalworks from './homepage/Rentalworks';
import Rentalfleet from './homepage/Rentalfleet';
import Carslick from './homepage/Carslick';
import Latestnews from './homepage/Latesnews'

export default function Home() {
  return (
    <>
    <main>
      <h1 className='home'>Home</h1>
      <Ourbenefits/>
      <Rentalworks/>
      <Rentalfleet/>
      <Carslick/>
      <Latestnews/>
    </main>
    </>
  );
}
