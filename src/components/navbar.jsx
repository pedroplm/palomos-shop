import React from 'react'
//router
import {Link} from "react-router-dom"
//icons
import {ShoppingCart} from "phosphor-react";
//css
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="links">
            <Link to="palomos-shop/">Shop</Link>
            <Link to="palomos-shop/cart">
                <ShoppingCart size ={32}/>
            </Link>
        </div>
    </div>
  )
}
