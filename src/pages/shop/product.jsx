import React, { useContext } from 'react'
import {ShopContext} from "../../context/shop-context"
export const Product = (props) => {

    const {id, productName, price, productImage} = props.data;

    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemsAmount = cartItems[id];
  return (
    <div className='shop__products-product'>
        <img alt = {productName} src = {productImage}/>
        <div className="description">
            <p>{productName}</p>
            <p>${price}</p>
        </div>
        <button className = "btn" onClick={() => addToCart(id)}>Add to Cart {cartItemsAmount>0&&<>({cartItemsAmount})</>}</button>
    </div>
  )
}
