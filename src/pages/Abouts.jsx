import React from 'react'
import "../styles/about.css"
import { Container, Row, Col } from "reactstrap"
const Abouts = () => {
  return (
    <div>
    <div>
      <img src="http://www.gowthamcrackers.com/images/aboutbanner.png" class="img-fluid w-100" alt="Gowtham Crackers" title="Gowtham Crackers"></img>
      </div>
      

    

      <section>
                <Container>
          <Row>
            <Col>
            <div className="container pad">
    <div className="row">
        <div className="col-lg-6 col-md-6 col-12 align-self-center">
            <div className="loc_about_img relative">
                <div className="loc_effect"> 
                    <img src="https://i.pinimg.com/originals/0f/26/02/0f26023d7367a87eb5c5f25e7d3e7fae.gif" class="img-fluid" alt="Gowtham Crackers" title="Gowtham Crackers"/>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-md-6 col-12 pl-lg-4 pt-lg-0 pt-5">
            <h1 className="cookie bigfont clr1">About Us</h1>
            <h1 className="cookie__i pb-3 clr2">Crackers <span className='cookie__o'>Pyro Tech</span></h1>
            <p className="roboto">The History of Gowtham Crackers started by <strong>M.G.Pandia Rajen</strong> in Madurai, Tamil Nadu in 1985.
                It is a well-known retail and wholesale distributor of firework crackers, display items and upto 15
                Varieties of gift boxes. We have more over 35 years of experience in this field. We are an authorized
                business owner of more than 18 branded fireworks.</p>
            <p className="roboto">Our classy brand selection that are sold larger in
                number with greatest customer satisfaction are French Terry, Vinayaga, Sony and Century fireworks
                Remo Crackers Gift Boxes. At Present, we have 2 firework outlets.</p>    
            <p className="roboto">We make customized order which brings in profits to small business customers. We serve all over Tamil Nadu and South India.</p>    
        </div>
    </div>
</div>
            </Col>
                 </Row>
                </Container>
                </section> 
      </div>
  )
}

export default Abouts