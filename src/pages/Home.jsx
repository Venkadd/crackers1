import React from "react";
import {Link} from"react-router-dom"
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap"
import heroImg from "../../src/assets/images/R.png"
//import Quality from "../../src/assets/images/100.webp"
import "../styles/hero-section.css"
import "../styles/home.css"
import Category from "../components/UI/category/Category";
// import Lak from "../../src/assets/images/lak.jpg"
// import Lak1 from "../../src/assets/images/lak.jpg"
// import Lak2 from "../../src/assets/images/lak.jpg"
import ProductCard from "../components/UI/product-card/ProductCard";
import products from "../assets/fake-data/products";
//import Cr from "../assets/images/cr.png"
const Home = () => {
    return (
        <Helmet title="Home">
            <section>
            {/* <section>
                <Container>
                    <Row>
                    <div id="myCarousel" className="carousel-slide-carousel-fade" data-ride="carousel">
	<div class="carousel-inner">
								<div className="carousel-item-active  ">
							<img src="http://www.gowthamcrackers.com/images/upload/home_banner_10_08_2021_05_40_16.jpg?t=130423034106" className=" hello__j img-fluid w-100 d-block" alt="Gowtham Crackers" title="Gowtham Crackers"/>
						</div>
			</div>
	</div>
                    </Row>
                </Container>
                </section> */}
                
                
                
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="hero__c">
                                <h5 className="mb-3">Easy way to make an order</h5>  
                                <h1 className="mb-4 hero__title" >
                                    <span>Biggest sales</span> Just wait product at<span> your door</span></h1>
                                <p className="para__content">
                                    It is very highy quality in cracker
                                </p>
                                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                                    <button className="all__products-btns d-flex align-items-center justify-content-between"><Link to="/products">See all Products</Link></button>
                                </div>
                                <div className="hero__service d-flex align-items-center gap-5 mt-5">
                                    <p className="d-flex align-items-center gap-2">
                                        <span className="shipping__icon ">
                                            <i className="ri-car-line"></i></span>
                                            Delivery
                                    </p>
                                    <p className="d-flex align-items-center gap-2">
                                        <span className="shipping__icon ">
                                            <i className="ri-shield-check-line"></i></span>
                                            100% secure checkout
                                    </p>
                                </div>
                        </div>
                        </Col>

                        

                        <Col lg="6" md="6">
                            <div className="hero__content">
                           <img src={heroImg} alt="hero-img" className="w-100"/>     
                        </div>
                        </Col>

                        <section className="img__url center">
                <Container>
                    <Row>
                                    <Col lg="12" className="text-center">
                                    {/* <img src={Quality} alt="hero-img" className="w-4"/>  */}
                                        <h3 className="text-c">Quality</h3>
                                        <p className="mb-1 mt-4 feauter__text">Our skilled quality controllers scan the products on well-defined quality parameters using modern testing tools and devices to ensure perfect products. Our prime motto is to attain the utmost customer satisfaction</p>
                                    </Col>

                                    <Col lg="12" className="text-center">
                                    {/* <img src={Quality} alt="hero-img" className="w-4"/>  */}
                                        <h3 className="text-g">Genuine Price</h3>
                                        <p className="mb-1 mt-4 feauter__text">We are producing safe and compliant crackers with highest quality at low price enabling you to spread joy and happiness in all occasions by offering them quality assured products.</p>
                                    </Col>
                                    <Col lg="12" className="text-center">
                                    {/* <img src={Quality} alt="hero-img" className="w-4"/>  */}
                                        <h3 className="text-s">Safe To Use</h3>
                                        <p className="mb-1 mt-4 feauter__text">The colorful crackers are manufactured by utilizing optimum quality chemical elements and sophisticated techniques in adherence to international quality standards, so our products are safe to use.</p>
                                    </Col>
                                    <Col lg="12" className="text-center">
                                    {/* <img src={Quality} alt="hero-img" className="w-4"/>  */}
                                        <h3 className="text-q">Coustmer Satisfaction</h3>
                                        <p className="mb-1 mt-4 feauter__text">Our easy payment modes, transparent dealings, client-centric approach, competitive price range and ethical business policies have enabled our customers to get satisfied with our services.</p>
                                    </Col>
                                    
                    </Row>
                </Container>
            </section>
                        
                    </Row>
                </Container>
            </section>

            {/* <section>
                <Container>
                    <Row>
                        <Col>
                            <img src={Cr} alt="category__item" className="center" />
                                <h3>Shopnow</h3>
                        </Col>
                    </Row>
                </Container>
            </section> */}
            


            <section>
<Category/>
            </section>
            

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2>Popular Products</h2>
                        </Col>
                        <Col lg="12">
                            <div className="product__category d-flex align-items-center justify-content-center gap-4">
                            <button className="all__btn">All</button>
                            </div>
                        </Col>
                        {/* {
                            product.map(item => (
                                <Col lg="3" md="4" key={item.id}>
                                    <ProductCard item={ item} />
                            </Col> 
                            ))
                        }
                         */}
                        

                        {
                            products.map(item => (
                                <Col lg="3" md="4" key={item.id}>
                                    <ProductCard item={ item} />
                            </Col> 
                            ))
                    }
                    </Row>
                </Container>
</section>

        </Helmet>
    )
};
export default Home