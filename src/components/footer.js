
import React from 'react'
import Footer from '.././css/footer'
import Icon from '.././css/icons'
import image from '../media/justineLogoImg1.png'


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <img src={image} height={100} width={120} alt="imagelogo"/>
                <Footer.LogoDes>Copyright © 2018 RentCar.
                All Rights Reserved.
                </Footer.LogoDes>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>USEFUL LINKS</Footer.Title>
                    <Footer.Link href="#">About us</Footer.Link>
                    <Footer.Link href="#">Our Services</Footer.Link>
                    <Footer.Link href="#">Information</Footer.Link>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>OUR TEAMS</Footer.Title>
                    <Footer.Link href="#">Support</Footer.Link>
                    <Footer.Link href="#">Contacts</Footer.Link>
                    <Footer.Link href="#">Typography</Footer.Link>
                    <Footer.Link href="#">FAQ</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>SOCIAL MEDIA</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            {/* <Footer.Row1>
                <Footer.Column1>
                    <Footer.Title1>Copyright © 2018 CarRent <Footer.Row1>
                <Footer.Column1>
                    <Footer.Title1>Copyright © 2018 WordPress Theme. All Rights Reserved.</Footer.Title1>
                </Footer.Column1>
            </Footer.Row1>. All Rights Reserved.</Footer.Title1>
                </Footer.Column1>
            </Footer.Row1> */}
            </Footer.Wrapper>
        </Footer>
    )
}