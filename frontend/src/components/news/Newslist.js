import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Container, Row, Col} from 'react-bootstrap';
import '../../css/newslist.css';

const Newslist = () => {
  return (
    <div>
        <div className='listcarbg'>
            <div className='listoverlay'>
                <h1>News</h1>
            </div>
        </div>
        <div className='newscont'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='newsallcont'>
                            <Card sx={{ maxWidth: 945, boxShadow: 0 }}>
                                <CardMedia
                                    component="img"
                                    alt="Ford"
                                    height=""
                                    image="https://autostar.templines.org/wp-content/uploads/2016/10/567353681.jpg"
                                />
                                <div className='newsdesc'>
                                    <CardContent>
                                        <Typography className='mt-2 mb-2' gutterBottom variant="h5" component="div">
                                        <a className='newstitle' href='/Newsford'><h3>Ford supplier Flex-n-Gate opens $160 million plant in Detroit</h3></a>
                                        </Typography>
                                        <div className='redline'>-</div>
                                        <Typography className='mt-3' variant="body2" color="text.secondary">
                                        <p>Integer tortor bibendum est faucibus gravida aliquam nulla lectus lacinia eget lorem acdua eros pharetral interdum quisque convallis nula dpsum val mualiq amet consectetur adipisicing sed eiusmod tem pory. Utenim ad minim ven quis nostrud exercitation ulamco laboris nisi ut aliquip exldolor in reprehenderit voluptate velit non proident sunt in culpa.</p>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <a className='buttonred' href='/Newsford'>Read more</a>
                                    </CardActions>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className='newsallcont'>
                            <Card sx={{ maxWidth: 945, boxShadow: 0 }}>
                                <CardMedia
                                    component="img"
                                    alt="Porsche"
                                    height=""
                                    image="https://autostar.templines.org/wp-content/uploads/2016/10/1042706084.jpg"
                                />
                                <div className='newsdesc'>
                                    <CardContent>
                                        <Typography className='mt-2 mb-2' gutterBottom variant="h5" component="div">
                                        <a className='newstitle' href='/Newsporsche'><h3>Porsche sees opportunity to broaden subcriptions</h3></a>
                                        </Typography>
                                        <div className='redline'>-</div>
                                        <Typography className='mt-3' variant="body2" color="text.secondary">
                                        <p>Integer tortor bibendum est faucibus gravida aliquam nulla lectus lacinia eget lorem acdua eros pharetral interdum quisque convallis nula dpsum val mualiq amet consectetur adipisicing sed eiusmod tem pory. Utenim ad minim ven quis nostrud exercitation ulamco laboris nisi ut aliquip exldolor in reprehenderit voluptate velit non proident sunt in culpa.</p>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <a className='buttonred' href='/Newsporsche'>Read more</a>
                                    </CardActions>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className='newsallcont'>
                            <Card sx={{ maxWidth: 945, boxShadow: 0 }}>
                                <CardMedia
                                    component="img"
                                    alt="Toyota"
                                    height=""
                                    image="https://autostar.templines.org/wp-content/uploads/2016/10/175522406-1.jpg"
                                />
                                <div className='newsdesc'>
                                    <CardContent>
                                        <Typography className='mt-2 mb-2' gutterBottom variant="h5" component="div">
                                        <a className='newstitle' href='/Newstoyota'><h3>Toyota Car decline overshadows light-truck gain</h3></a>
                                        </Typography>
                                        <div className='redline'>-</div>
                                        <Typography className='mt-3' variant="body2" color="text.secondary">
                                        <p>Integer tortor bibendum est faucibus gravida aliquam nulla lectus lacinia eget lorem acdua eros pharetral interdum quisque convallis nula dpsum val mualiq amet consectetur adipisicing sed eiusmod tem pory. Utenim ad minim ven quis nostrud exercitation ulamco laboris nisi ut aliquip exldolor in reprehenderit voluptate velit non proident sunt in culpa.</p>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <a className='buttonred' href='/Newstoyota'>Read more</a>
                                    </CardActions>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className='newsallcont'>
                            <Card sx={{ maxWidth: 945, boxShadow: 0 }}>
                                <CardMedia
                                    component="img"
                                    alt="Dealer"
                                    height=""
                                    image="https://autostar.templines.org/wp-content/uploads/2016/10/460704445-1.jpg"
                                />
                                <div className='newsdesc'>
                                    <CardContent>
                                        <Typography className='mt-2 mb-2' gutterBottom variant="h5" component="div">
                                        <a className='newstitle' href='/Newsdealer'><h3>Dealer agency warns carmakers on ‘safest’ label after Tesla boast</h3></a>
                                        </Typography>
                                        <div className='redline'>-</div>
                                        <Typography className='mt-3' variant="body2" color="text.secondary">
                                        <p>Integer tortor bibendum est faucibus gravida aliquam nulla lectus lacinia eget lorem acdua eros pharetral interdum quisque convallis nula dpsum val mualiq amet consectetur adipisicing sed eiusmod tem pory. Utenim ad minim ven quis nostrud exercitation ulamco laboris nisi ut aliquip exldolor in reprehenderit voluptate velit non proident sunt in culpa.</p>
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <a className='buttonred' href='/Newsdealer'>Read more</a>
                                    </CardActions>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Newslist
