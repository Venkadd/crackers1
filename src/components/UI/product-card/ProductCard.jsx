import React from 'react'
import "../../../styles/product-card.css"
//import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'
// import { useState } from 'react'
const ProductCard = (props) => {
    const { id, title, image01, price } = props.item




    // const [value, setValue] = useState('');

    // const handleChange = (event) => {
    //   const newValue = event.target.value;
    //   if (!isNaN(newValue) && !newValue.includes('.')) { 
    //     setValue(newValue);
    //   }
    // };



    
    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }
  return (
      <div className='product__item'>
          <div className='product__img'>
              <img src={image01} alt='product-img' className='w-50' />
          </div>
          <div className='product__content'>
        <h5>{title}- &#x20b9;{price }</h5>
              <div className='d-flex align-items-center justify-content-between' >
          <span className='product__price'>
          &#x20b9;{ price}
          </span>
                  <button className='addToCart__btn' onClick={addToCart}>Add</button>

                  {/* <input
      type="text"
      value={value}
      onChange={handleChange}
        placeholder="Enter an integer"
       onClick={addToCart}              
     /> */}
                  

              </div>
          </div>
    </div>
  )
}

export default ProductCard