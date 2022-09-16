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
import Newsford from './components/news/Newsford';
import Newsporsche from './components/news/Newsporsche';
import Newstoyota from './components/news/Newstoyota';
import Newsdealer from './components/news/Newsdealer';
import Forestertab from './components/autolistings/listingcars/Forestertab';
import Miragerange from './components/autolistings/listingcars/Miragerange';
import Mitsubishilancer1 from './components/autolistings/listingcars/Mitsubishilancer1';
import Pajerorange from './components/autolistings/listingcars/Pajerorange';
import Subaruliberty from './components/autolistings/listingcars/Subaruliberty';
import Xvrange from './components/autolistings/listingcars/Xvrange';


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
        <Route path='/Newsford' exact element={<Newsford/>} />
        <Route path='/Newsporsche' exact element={<Newsporsche/>} />
        <Route path='/Newstoyota' exact element={<Newstoyota/>} />
        <Route path='/Newsdealer' exact element={<Newsdealer/>} />
        <Route path='/Forestertab' exact element={<Forestertab/>} />
        <Route path='/Miragerange' exact element={<Miragerange/>} />
        <Route path='/Mitsubishilancer1' exact element={<Mitsubishilancer1/>} />
        <Route path='/Pajerorange' exact element={<Pajerorange/>} />
        <Route path='/Subaruliberty' exact element={<Subaruliberty/>} />
        <Route path='/Xvrange' exact element={<Xvrange/>} />
      </Routes>
    </Router>
    <FooterContainer/>
      </>
  );
}

export default App;
