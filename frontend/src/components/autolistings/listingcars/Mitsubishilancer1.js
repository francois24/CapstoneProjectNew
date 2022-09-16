import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import Descrptab from './Descrptab'
import './descrptab.css'

const Mitsubishilancer1 = () => {
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
                    <div className='imglistings'><img src='https://autostar.templines.org/wp-content/uploads/2018/10/001-1.jpg' alt='' /></div>
                    <div className='text-center'><h1>Mitsubishi Lancer</h1></div>
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

export default Mitsubishilancer1
