import React from 'react'
import Footer from '.././css/footer'
import Icon from '.././css/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>RentCar</Footer.Title>
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
            </Footer.Wrapper>
        </Footer>
    )
}