import React from 'react'
import "./popup.css"
import { useNavigate } from 'react-router-dom'


function PopUp(props) {

    const navigate = useNavigate()

    const fakePurchased = () =>{
        props.setTrigger(false)
        navigate("/palomos-shop")
    }
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            {props.children}
            <button className ="close-btn btn" onClick={()=> fakePurchased()}>Continue Shopping</button>
        </div>
    </div>
  ) : "";
}

export default PopUp;