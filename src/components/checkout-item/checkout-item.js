import React from 'react'

import './checkout-item.scss'


const CheckoutItem = ({ cartItem: { id, imageUrl, name, price, quantity } }) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">{quantity}</span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={(id) => id}>&#x2716;</div>
    </div>
)

export default CheckoutItem