import React, { useRef } from 'react'
import { Container } from "reactstrap"
import logo from "../../assets/images/p.jpg"
import { NavLink,Link } from 'react-router-dom'
import "../../styles/header.css"
import { useSelector ,useDispatch } from 'react-redux'
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice'

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "About",
    path: "/aboutus",
  },
  {
    display: "SafetyTips",
    path: "/safety",
  },
  {
    display: "PriceList",
    path: "/products",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },

];

const Header = () => {
  const menuRef = useRef(null)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch=useDispatch()

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu")
  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }
  return (
    <header className='header'>
      
      
      <Container>
        <div className='nav_wrapper d-flex align-items-center justify-content-between'>
          <div className='logo'>
            <img src={logo} alt="logo"  />
            <h5>Crackers</h5>
          </div>
          


{/* //menu */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {
                nav__links.map((items, index) => (
                  <NavLink
                  
                    to={items.path} key={index}
                    className={navClass =>
                      navClass.isActive ? "active__menu" : ""}
                  >
                    {items.display}</NavLink>
                ))}
            </div>
            
          </div>
{/* //rightside */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-bag-3-line"></i>
              <span className="cart__badge">{ totalQuantity}</span>
            </span>
            <span className='user'>
              <Link to="/login"><i class='ri-user-line'></i></Link>
            </span>
            <span className='mobile_menu' onClick={toggleMenu}>
              <i class='ri-menu-line'></i>
            </span>

          </div>
          

        </div>
        
      </Container>
    
      
    </header>
  )
}

export default Header