import React from 'react';

import './checkout.scss';

const CheckoutItem = ({ cartItem : {name , imageUrl , price , quantity}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img image={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remote-button'>&#10005;</div>
    </div>
)

export default CheckoutItem;