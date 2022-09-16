import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Descrptab from './Descrptab'
import './descrptab.css'

const Subaruliberty = () => {
  return (
    <div className='listingsallcars'>
        <div className='listcarbg'>
                <div className='listoverlay'>
                    <h1>Rent now</h1>
                </div>
            </div>
        <div>
        <Container>
            <Row>
                <Col lg={9}>
                    <div className='imglistings'><img src='https://autostar.templines.org/wp-content/uploads/2018/12/18054365085a8e60bba5141338689408_0_0.jpg' alt='' /></div>
                    <div className='text-center'><h1>Subaru Liberty</h1></div>
                    <div><Descrptab/></div>
                </Col>
                <Col lg={3}>
                
                </Col>
            </Row>
        </Container>
        </div>
    </div>
  )
}

export default Subaruliberty
