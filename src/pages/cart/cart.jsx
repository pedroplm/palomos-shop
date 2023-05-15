import React, {useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cartitem'
import { useNavigate} from "react-router-dom";
import "./cart.css"

export const Cart = () => {

  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);

  const navigate = useNavigate();

  const totalAmount = getTotalCartAmount();
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
        <button className='btn' onClick = {() => navigate("palomos-shop/")}>Continue Shopping</button>
        <button className='btn' onClick = {() => (checkout(2, 2))}>Checkout</button>
      </div> 
      ) : ( 
      <div className="checkout">
        <h2>Your cart is empty</h2>
        <button className='btn' onClick = {() => navigate("palomos-shop/")}>Continue Shopping</button>
        </div>
      )}
        
    </div>
  )
}
