import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../css/Contactform.css'

export default function Contact() {


    return (
        <div>
            <div className='listcarbg'>
                <div className='listoverlay'>
                    <h1>Contact Us</h1>
                </div>
            </div>
            <div  className='p-3 mb-5'>
            <Container className='mt-3'>
        
                <Row>

            <Col lg={8} className="bgcol">

                <h1 className='formh1 mb-3 text-center'>GET IN TOUCH</h1>
                    <form method='POST' action='http://localhost:3001/contact/submit'>
                    <div className='form-floating mb-3'>
                        <i className='icon fas fa-user-tie fa-lg'></i>
                        <input  
                            name="client_name"
                            type="text" 
                            className='form-control' 
                            id='floatingName' 
                            placeholder='Name'
                        />
                        <label For="floatingName">Name</label>
                    </div>

                    <div className='form-floating mb-3'>
                        <i className='icon fas fa-envelope fa-lg'></i>
                        <input 
                            name="email" 
                            type="email" 
                            className='form-control' 
                            id='floatingEmail' 
                            placeholder='Email'
                        />
                        <label For="floatingEmail">Email</label>
                    </div>

                    <div className='form-floating mb-3'>
                        <i className='icon fas fa-phone-alt fa-lg'></i>
                        <input 
                            name="phone" 
                            type="phone" 
                            className='form-control' 
                            id='floatingPhone' 
                            placeholder='Phone'
                        />
                        <label for="floatingPhone">Phone</label>
                    </div>

                    <div className='form-floating mb-3'>
                        <i className='icon-textarea fas fa-comment-alt fa-lg'></i>
                        <textarea 
                            name="message" 
                            className='form-control' 
                            id="floatingTextArea" 
                            cols="80" 
                            placeholder='Leave a Message Here' 
                            style={{height:'100px'}}
                        />
                        <label for="floatingTextArea">Message</label>
                    </div>
                    <button type='submit' className='btnform btn m-2'>Submit</button>
                    </form>
                    </Col> 


                    <Col lg={4} className='bgcol1'>
                    <h1 className='formh2 mb-3 text-center'>CONTACT INFO</h1>
        
                        <div className='coninfo'>
                            <div className='mb-4 mt-4'><i className='fas fa-user-tie fa-lg mb-2'><span>Name</span></i><h6 className='mb-3'>RentCar</h6></div>
                            <div className='mb-4'><i className='fas fa-envelope fa-lg mb-2'><span>Email</span></i><h6 className='mb-3'>RentCar2022@gmail.com</h6></div>
                            <div className='mb-4'><i className='fas fa-phone fa-lg mb-2'><span>Phone</span></i><h6 className='mb-3'>+6399-222-1133</h6></div>
                            <div className='mb-4'><i className='fas fa-map-marker-alt fa-lg mb-2'><span>Address</span></i><h6 className='mb-3'>#241 San Fernando City Pampanga</h6></div>
                        </div>
                    </Col>
                    
                </Row>
            </Container>
            </div>
        </div>
    )
};