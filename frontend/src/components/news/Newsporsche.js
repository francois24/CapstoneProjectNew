import {Container, Row, Col} from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PinterestIcon from '@mui/icons-material/Pinterest';

import './allnewsblog.css';

const Newsporsche = () => {
  return (
    <div className='newsblog'>
        <Container>
            <Row>
                <Col lg={12}>
                    <div className='blogcont'>
                        <Card sx={{ maxWidth: 945, boxShadow: 0 }}>
                            <CardMedia
                                component="img"
                                alt="Porsche"
                                height=""
                                image="https://autostar.templines.org/wp-content/uploads/2016/10/1042706084.jpg"
                            />
                            <div className='blogdesc'>
                                <CardContent>
                                    <Typography className='mt-2 mb-2' gutterBottom variant="h5" component="div">
                                    <h3>Porsche sees opportunity to broaden subcriptions</h3>
                                    </Typography>
                                    <Typography className='mt-3' variant="body2" color="text.secondary">
                                    <p>Detroit — General Motors‘ strategy of producing its current pickups through the launch of the next-gen Chevrolet Silverado and GMC Sierra appears to be working but will be tested through the end of the year.</p>
                                    <p>Despite sales declines in the third quarter, including estimated double-digit slides in September, sales of the pickups are actually up 0.6 percent for the year through September.</p>
                                    <div className='blogcrdall'>
                                        <div className='blogquote'>
                                            <i class='fas fa-quote-right' style={{fontSize:20, color:'#bf0404'}}></i>
                                            <div className='blogcrd'>
                                                <p><em>Our brands are very well-positioned for the fourth quarter when our next wave of new products start shipping in high volume,” said Kurt McNeil, GM U.S. vice president of sales operations, citing some concern about low inventories.</em></p>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Because of those concerns, GM curtailed incentives last month. That contributed to estimated declines of 19 percent for the Silverado and 35 percent for the Sierra, according to the Automotive News Data Center.</p>
                                    <p>“It is a really tricky balance. You never know how a launch is going to go,” said Michelle Krebs, executive analyst at Autotrader. “They’ve sold down well. It’s going to be really important for them to ramp up without any glitches.”</p>
                                    <p>The incentive pullback allowed Fiat Chrysler’s Ram pickup to outsell the Silverado for the past two months in the U.S., according to estimates from the Automotive News Data Center.</p>
                                    <p>GM’s incentive spending, according to Autodata, was down $710 for Sierra and down $315 for Silverado compared with August. For the year, incentive spending on the Silverado was $6,186 — up $787 from a year earlier — and down $802 on Sierra to $4,542, Autodata reports.</p>
                                    <p>That compares with Ford’s average incentive spending on the F series of $3,880 per unit through September. Ram, which also launched a redesigned pickup at the beginning of the year and continues to produce the previous generation, was at $6,183 — up $58 from a year ago.</p>
                                    <p>FCA and GM had similar strategies for continuing to produce the outgoing pickup with the redesigned version, but they implemented the plans differently.</p>
                                    <p>GM did so while changing its plants over and shipping the trucks from Fort Wayne, Ind., to its Oshawa, Ontario, plant for final assembly and paint. FCA, which had some early production problems, is building the redesigned trucks at a new plant.</p>
                                    <div className='blogcrdall'>
                                        <div className='blogquote'>
                                            <i class='fas fa-quote-right' style={{fontSize:20, color:'#bf0404'}}></i>
                                            <div className='blogcrd'>
                                                <p><em>“We haven’t heard about production issues with GM like we did with Ram,” Edmunds senior analyst Ivan Drury said. “That was one of the biggest hindrances for them. They couldn’t get their lineup out when it was supposed to happen.”</em></p>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Ram’s pickup sales are even with last year.</p>
                                    <p>GM hasn’t said when it plans to stop producing the outgoing model. FCA is expected to continue producing the outgoing model until the end of 2019 or early 2020.</p>
                                    </Typography>
                                    <div className='blogsoc'>
                                        <ul>
                                            <li><p>SHARE THIS:</p></li>
                                            <li><a href='/#'><FacebookIcon fontSize='medium' className='blogfb'/></a></li>
                                            <li><a href='/#'><TwitterIcon fontSize='medium' className='blogtwit'/></a></li>
                                            <li><a href='/#'><PinterestIcon fontSize='medium' className='blogpint'/></a></li>
                                            <li><a href='/#'><EmailIcon fontSize='medium' className='blogemail'/></a></li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Newsporsche
