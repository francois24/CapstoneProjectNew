import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//tom
import { FooterContainer } from './components/footer';

// Justine Navbar
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Autolistings from './components/Autolistings';
import About from './components/About';
import Testimonials from './components/Testimonials';
import SignUp from './components/SignUp';
import News from './components/News';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/Autolistings' element={<Autolistings/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Testimonials' element={<Testimonials/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/News' element={<News/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </Router>
    <FooterContainer/>
      </>
  );
}

export default App;
