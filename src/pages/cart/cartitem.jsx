import React, {useContext} from 'react'

import { ShopContext } from '../../context/shop-context'

export const CartItem = (props) => {
    const {id, productName, price, productImage} = props.data;

    const { cartItems, addToCart, removeFromCart, updateCartItemsCount } = useContext(ShopContext);

    return (
        <div className='cart__items-item'>
            <img alt = {productName} src = {productImage}/>
            <div className='cart__items-description'>
            <p>{productName}</p>
            <p>${price}</p>  
            <div className='cart__items-counter'>
                <button onClick={() => {
                    removeFromCart(id)
                }}> - </button>
                <input value = {cartItems[id]} onChange = {(e) =>{updateCartItemsCount(Number(e.target.value), id)}}></input>
                <button onClick= {()=>{addToCart(id)}}> + </button>
            </div>
            </div>
        </div>
    )
}
