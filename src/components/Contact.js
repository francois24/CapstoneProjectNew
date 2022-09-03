import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../css/Contactform.css'


export default function Contact() {

  return (
    <div className='p-3 mb-5 mt-5'>
        <h1 className='text-center h1cont'>CONTACT US</h1>
        <Container className='mt-5'>
     
            <Row>

           <Col lg={8} className="bgcol">

             <h1 className='formh1 mb-3 text-center'>GET IN TOUCH</h1>
                <form>
                <div className='form-floating mb-3'>
                    <i className='icon fas fa-user-tie fa-lg'></i>
                    <input type="text" className='form-control' id='floatingName' placeholder='Name'/>
                    <label For="floatingName">Name</label>
                </div>

                <div className='form-floating mb-3'>
                    <i className='icon fas fa-envelope fa-lg'></i>
                    <input type="email" className='form-control' id='floatingEmail' placeholder='Email'/>
                    <label For="floatingEmail">Email</label>
                </div>

                <div className='form-floating mb-3'>
                    <i className='icon fas fa-phone-alt fa-lg'></i>
                    <input type="phone" className='form-control' id='floatingPhone' placeholder='Phone'/>
                    <label for="floatingPhone">Phone</label>
                </div>

                <div className='form-floating mb-3'>
                    <i className='icon-textarea fas fa-comment-alt fa-lg'></i>
                    <textarea name="comment" className='form-control' id="floatingTextArea" cols="80" placeholder='Leave a Comment Here' style={{height:'100px'}}></textarea>
                    <label for="floatingTextArea">Comments</label>
                </div>
                <button type='submit' className='btnform btn m-2'>Submit</button>
                </form>
                </Col> 


                <Col lg={4} className='bgcol1'>
                <h1 className='formh2 mb-3 text-center'>CONTACT INFO</h1>
      
                    <div>
                        <li><i className='fas fa-user-tie fa-lg mb-2'><span>Name</span></i><h6 className='mb-3'>RentCar</h6></li>
                        
                        <li><i className='fas fa-envelope fa-lg mb-2'><span>Email</span></i><h6 className='mb-3'>RentCar2022@gmail.com</h6></li>
                        <li><i className='fas fa-phone fa-lg mb-2'><span>Phone</span></i><h6 className='mb-3'>+6399-222-1133</h6></li>
                        <li><i className='fas fa-map-marker-alt fa-lg mb-2'><span>Address</span></i><h6 className='mb-3'>#241 San Fernando City Pampanga</h6></li>
                    </div>
                    <div className='socialicon1'>
                        <ul>
                        <li><a href="/"><i className='fa fa-facebook'></i></a></li>
                        <li><a href="/"><i className='fa fa-instagram'></i></a></li>
                        <li><a href="/"><i className='fa fa-youtube'></i></a></li>
                        <li><a href="/"><i className='fa fa-twitter'></i></a></li>
                        </ul>
                    </div>
                </Col>
                
            </Row>
        </Container>
      
    </div>
  )
}