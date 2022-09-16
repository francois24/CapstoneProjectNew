import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Descrptab from './Descrptab';
import './descrptab.css';
import 'react-datepicker/dist/react-datepicker.css';
import MaterialUIPickers from '../../homepage/datePicker'

const Forestertab = () => {
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
                    <div className='imglistings'><img src='https://autostar.templines.org/wp-content/uploads/2018/12/4494977815b9b41fc38001632250464_0_0.jpg' alt='' /></div>
                    <div className='text-center'><h1>Forester Subaru</h1></div>
                    <div><Descrptab/></div>
                </Col>
                <Col lg={3}>
                    <div>
                        <div className='rentperday'><h4>&#8369;&nbsp;1,000 / per day</h4></div>
                        <div className='rentncont'>
                            <div className='pckdate'>
                                <MaterialUIPickers />
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    </div>
  )
}

export default Forestertab
