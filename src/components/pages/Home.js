import React from 'react';
import '../../App.css';
import Ourbenefits from '../Ourbenefits';
import Rentalworks from '../Rentalworks';
import Rentalfleet from '../Rentalfleet';


export default function Home() {
  return (
    <>
    <main>
      <h1 className='home'>Home</h1>
      <Ourbenefits/>
      <Rentalworks/>
      <Rentalfleet/>
    </main>
    </>
  );
}
