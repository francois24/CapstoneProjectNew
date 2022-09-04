import {Container, Row, Col} from 'react-bootstrap';
import '../../css/rentalserv.css';

function RentalServ() {
    return (
        <div className='rentservall'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className='rentserv'>
                            <h3>Autostar Rental Service<br/>With a wide range of Vehicles</h3>

                            <p>Integer tortor bibendum est faucibus gravida aliquam nulla lectus lacinia eget lorem acdua eros pharetral interdum quisque convallis nula dpsum val mualiq amet consectetur adipisicing sed eiusmod tem pory.</p><br/>
                            <p>Ut enim ad minim ven quis nostrud exercitation ulamco laboris nisi ut aliquip exl dolor in reprehenderit voluptate velit non proident sunt in culpa.</p>
                            <div style={{marginBottom: '3rem'}}></div>
                            <div className='renservcon'>
                                <div className='resericoncon'>
                                    <span class="material-symbols-outlined flipicon ccon">sell</span>
                                </div>
                                <div>
                                    <h5>Easy &#38; Competitive Prices</h5>
                                    <p>Faucibus gravida aliquam nulla lectus lacinia eget</p>
                                </div>
                            </div>

                            <div className='renservcon'>
                                <div className='resericoncon'>
                                    <span class="material-symbols-outlined ccon">privacy_tip</span>
                                </div>
                                <div>
                                    <h5>Breakdown Assistance</h5>
                                    <p>Faucibus gravida aliquam nulla lectus lacinia eget</p>
                                </div>
                            </div>

                            <div className='renservcon'>
                                <div className='resericoncon'>
                                    <span class="material-symbols-outlined ccon">thumb_up</span>
                                </div>
                                <div>
                                    <h5>Trusted Rent Service</h5>
                                    <p>Faucibus gravida aliquam nulla lectus lacinia eget</p>
                                </div>
                            </div>

                            <div className='renservcon'>
                                <div className='resericoncon'>
                                    <span class="material-symbols-outlined ccon">call</span>
                                </div>
                                <div>
                                    <h5>24/7 Free Customer Support</h5>
                                    <p>Faucibus gravida aliquam nulla lectus lacinia eget</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='rentservimg'>
                            <img className='rsimg1' src='https://autostar.templines.org/wp-content/uploads/2018/12/lay01.png'  alt=''/>
                            <img className='rsimg2' src='https://autostar.templines.org/wp-content/uploads/2018/12/lay02.png' alt=''/>
                            <img className='rsimg3' src='https://autostar.templines.org/wp-content/uploads/2018/12/lay03.png' alt=''/>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div>
                <div className='rentservbg'>
                    <div className='overlay'>
                        <h1>Call Today For Booking Your Next Ride <i class='fas fa-phone flipicon' style={{fontSize:'48px',color:'#bf0404'}}></i> <span>(800) 650 743</span> Operators available 24/7</h1>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default RentalServ;