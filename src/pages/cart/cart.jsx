import React, {useContext, useState} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cartitem'
import "./cart.css"
import { useNavigate } from 'react-router-dom'
import PopUp from './popUp'


export const Cart = () => {

  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

  const navigate = useNavigate()
  const totalAmount = getTotalCartAmount();

  const [buttonPopUp, setButtonPopUp] = useState(false);

  const fakeBuyItems = ()=> {
    checkout(2,2);
    setButtonPopUp(true);
    console.log(buttonPopUp)

  }
  return (
    <div className='cart'>
      <div className="cart__title">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart__items">
        {PRODUCTS.map((product)=>{
          if (cartItems[product.id] !== 0){
              return (<CartItem data = {product} />)
          } else {
            return (null);
          }
        })}
      </div>
      {totalAmount > 0 ?
      ( 
        <div className="checkout">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick = {()=> navigate("/palomos-shop")} className='btn'>Continue Shopping</button>
        <button className='btn' onClick = {() => fakeBuyItems()}>Checkout</button>
        
      </div> 
      ) : ( 
      <div className="checkout">
        <h2>Your cart is empty</h2>
        <button onClick = {()=> navigate("/palomos-shop")} className='btn'>Continue Shopping</button>
        </div>
      )}
        <PopUp trigger = {buttonPopUp} setTrigger = {setButtonPopUp}>
          <h1>Successfully purchased items!</h1>
          <h2>Thank you for choosing Palomo's Shop!</h2>
        </PopUp>
    </div>
    
  ) 
}
