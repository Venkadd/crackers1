import React from 'react'
import { Container, Row, Col } from "reactstrap"
import { Link } from 'react-router-dom'
import categoryImg01 from "../../../assets/images/d.gif"
import categoryImg02 from "../../../assets/images/ful.gif"
import categoryImg03 from "../../../assets/images/sg.gif"
import categoryImg04 from "../../../assets/images/s.gif"
import "../../../styles/category.css"

const categoryData = [
  {
    display: "Ground Chakkars",
    imgUrl:categoryImg01
  },
  {
    display: "FlowerPots",
    imgUrl:categoryImg02
  },
  {
    display: "Single Sound",
    imgUrl:categoryImg03
  },
  {
    display: "Sky Shots",
    imgUrl:categoryImg04
  }
]

const Category = () => {
  return (
    <Container>
    <Row>
      {categoryData.map((item, index) => (
        <Col lg="3" md="4" >
          <div className="category__item d-flex align-items-center gap-10 mt-4">
            <div className="category__img">
              <img src={item.imgUrl} alt="category__item" />
            </div>
            
            {/* <h6 className='font__size'>{item.display}</h6> */}
            <button className="all__products-btns text center d-flex align-items-center justify-content-between"><Link to="/products"> {item.display}</Link></button>
          </div>
          
        </Col>
      ))}
    </Row>
    </Container>
    
  )
}

export default Category