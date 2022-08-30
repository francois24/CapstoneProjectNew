import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Justine Navbar
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Route path='/' exact element={<Home/>} />
        <Route path='/Autolistings' element={<Autolistings/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Testimonials' element={<Testimonials/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/News' element={<News/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </Router>
      </>
  
  );
}

export default App;
