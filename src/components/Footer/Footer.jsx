import React from 'react'
import { Container, Row, Col,ListGroupItem,ListGroup } from "reactstrap"
import logo from "../../assets/images/p.jpg"
import "../../styles/footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
          <div className=' footer__logo text-start'>
            <img src={logo} alt="logo" />
              <h5>Crackers</h5>
              <p>The History of Gowtham Crackers started by M.G.Pandia Rajen in Madurai, Tamil Nadu in 1985. It is a well-known retail and wholesale distributor of firework crackers, display items and upto 15 Varieties of gift boxes.</p>
          </div>
          </Col>
          <Col lg="3" md="4" sm="6">
         
            <h5>Address</h5>
            <div className='deliver__time-list'>
           <div className='delivery__time-item border-0 ps-0'>
                <span>25/ 3A, Theni Main Rd,</span>
                <span>Nagamalaipudukottai, Madurai,</span>
                <span>Tamil Nadu – 625 019.</span>
                </div>
                </div>
          </Col>
          <Col lg="3" md="4" sm="6">
          <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone:7543905643</span>
                
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email:gowtham@gmail.com</span>
                
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
          <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website made by Gowtham. All Rights
              Reserved.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/muhib160">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com/muhib160">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to=" https://www.youtube.com/c/MuhibsTechDiary">
                  <i class="ri-youtube-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to=" https://www.linkedin.com/in/muhib160/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
</Container>
    </footer>
  )
}

export default Footer;

