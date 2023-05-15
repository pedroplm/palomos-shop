import React from 'react'
import {Product} from './product';
//api request com produtos
import { PRODUCTS } from "../../products";
import "./shop.css"
export const Shop = () => {
 
  return (
    <div className='shop__section'>
        <div className='shop__title'>
            <h1>Palomo's Shop</h1>
        </div>
        <div className="shop__products">
            {PRODUCTS.map((product)=>(
            <Product data = {product}/>
            ))}

        </div>
    </div>
  )
}
