import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './allcars.css';
import Hghwy from '../../media/highway.png'
import Hybrd from '../../media/belt.png'
import Gearbx from '../../media/gearbox.png'

export default function Forestersubaru() {
  return (
    <Card className='p-2 crdsmpleall' sx={{ maxWidth: 350, boxShadow: 0 }}>
      <CardMedia
        component="img"
        height=""
        image="https://autostar.templines.org/wp-content/uploads/2018/12/4494977815b9b41fc38001632250464_0_0.jpg"
        alt="Forester Subaru"
        className='p-3'
      />
      <CardContent style={{backgroundColor: 'rgb(148, 148, 148,0.1)'}}>
        <Typography gutterBottom variant="" component="div" className='text-center'>
          <h5 className='fltnme'>Forester Subaru</h5>
          <div className='fltfull mt-3'>
            <div>
              <img className='fltspc' src={Hghwy} alt=''/>
              <p className='fltp'>4980</p>
            </div>
            <div>
              <img className='fltspc' src={Hybrd} alt=''/>
              <p className='fltp'>Hybrid</p>
            </div>
            <div>
              <img className='fltspc' src={Gearbx} alt=''/>
              <p className='fltp'>Manual</p>
            </div>
          </div>
          <hr/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <Container>
          <Row>
              <Col className='p-0 mt-0'>
                <ul className='fltli'>
                  <li><i class="fa fa-check">Pay at Pick-Up</i></li>
                  <li><i class="fa fa-check">Chilled AC</i></li>
                  <li><i class="fa fa-check">Free cancellation</i></li>
                  <li><i class="fa fa-check">Audio input</i></li>
                  <li><i class="fa fa-check">Heated seats</i></li>
                </ul>
              </Col>
              <Col className='p-0 mt-0'>
                <ul className='fltli'>
                  <li><i class="fa fa-check">Budget Car</i></li>
                  <li><i class="fa fa-check">Automatic/Manual</i></li>
                  <li><i class="fa fa-check">Unlimited Mileage</i></li>
                  <li><i class="fa fa-check">Bluetooth</i></li>
                </ul>
              </Col>
          </Row>
        </Container>
        </Typography>
      </CardContent>
      <CardActions style={{backgroundColor: 'rgb(148, 148, 148,0.1)'}}>
        <div className='fltact'>
          <div className='fltday'>
            <h6>$655 / per day</h6>
          </div>
          <div>
            <button className='fltrent'><h6>RENT&#160;IT</h6></button>
          </div>
        </div>
      </CardActions>
    </Card>
  );
}