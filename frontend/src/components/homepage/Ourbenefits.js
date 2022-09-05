import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/ourbenefits.css';

const Ourbenefits = () => {
  return (
    <div className='ourb'>
      <Container className='text-center p-4'>
        <h3 className='ourtle'>OUR BENEFITS</h3>
        <em className='ourem'>Luxury RentCar Rental Services</em>
      <Row className='mt-5 justify-content-md-between'>
        <Col sm lg="3">
            <img src='https://autostar.templines.org/wp-content/uploads/2018/12/as001.jpg' alt=''/>
            <h5 className='ourh5'>Our Customers Always</h5>
            <h5 className='ourh5'>100% Satisfied</h5>
            <div className='p-2'><img style={{height: "15px"}} src='https://snipboard.io/NRTeph.jpg' alt=''/></div>
            <p className='par'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation</p>
        </Col>
        <Col sm lg="3">
            <img src='https://autostar.templines.org/wp-content/uploads/2018/12/as002.jpg' alt=''/>
            <h5 className='ourh5'>We Provide Easier </h5>
            <h5 className='ourh5'>&#38; Faster Bookings</h5>
            <div className='p-2'><img style={{height: "15px"}} src='https://snipboard.io/NRTeph.jpg' alt=''/></div>
            <p className='par'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation</p>
        </Col>
        <Col sm lg="3">
            <img src='https://autostar.templines.org/wp-content/uploads/2018/12/as003.jpg' alt=''/>
            <h5 className='ourh5'>Your Choice of</h5>
            <h5 className='ourh5'>Any Pickup Location</h5>
            <div className='p-2'><img style={{height: "15px"}} src='https://snipboard.io/NRTeph.jpg' alt=''/></div>
            <p className='par'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation</p>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Ourbenefits
