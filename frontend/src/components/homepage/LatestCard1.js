import React from 'react';
import { Card, Col, Row, Container} from 'react-bootstrap';
import '../../css/Latest.css'


function BasicExample() {
  return (<>
  
    <Container className='caroucard'>
      <Row >
        <Col className="p-2" >
      <Card style={{ width: '' }} className="Card">
      <Card.Img variant="top" src="https://autostar.templines.org/wp-content/uploads/2016/10/567353681.jpg" />
      <Card.Body >
      <i class='fa fa-calendar ' style={{color:'#bf0404 ',}}><span>August </span><span className='year'>20,2022</span> <i class="fa fa-comments-o"><span>3 COMMETNS</span></i></i> 
      <Card.Title ><a href="/Newsford" >Ford supplier Flex-n-Gate opens $160 million plant in Detroit</a></Card.Title>
            <div className='titleall'>-</div>
        <Card.Text className='cardtextall'>
        Integer tortor bibendum est faucibus gravida aliquam nulla lectus lacinia eget
        lorem acdua eros pharetral interdum quisque convallis nula dpsum val mualiq
        amet consectetur adipisicing sed eiusmod tem pory.

        Utenim ad minim ven quis nostrud exercitation ulamco laboris nisi ut aliquip exldolor in reprehenderit voluptate velit non proident sunt in culpa.
        </Card.Text>
      </Card.Body>      
    </Card></Col>
      </Row>
    </Container>
    </>
  );
}

export default BasicExample;