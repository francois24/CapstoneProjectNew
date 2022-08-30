import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ourbenefits from './components/Ourbenefits';
import Rentalworks from './components/Rentalworks';
import Rentalfleet from './components/Rentalfleet';


// Justine Navbar
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Autolistings from './components/pages/Autolistings';
import About from './components/pages/About';
import Testimonials from './components/pages/Testimonials';
import SignUp from './components/pages/SignUp';
import News from './components/pages/News';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/Autolistings' component={Autolistings} />
        <Route path='/About' component={About} />
        <Route path='/Testimonials' component={Testimonials} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/News' component={News} />
        <Route path='/Contact' component={Contact} />
      </Routes>
    </Router>

      <Ourbenefits/>
      <Rentalworks/>
      <Rentalfleet/>
      </>
  
  );
}

export default App;
