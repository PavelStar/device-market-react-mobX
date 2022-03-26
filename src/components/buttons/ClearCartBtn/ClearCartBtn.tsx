import React from 'react'
import CartState from '../../../store/CartState';
import './ClearCartBtn.scss'

const ClearCartBtn = () => {

    const clearCart = () => {
        CartState.setCartItems([]);
        CartState.setPriceSum(0);
    };

    return (
        <button className="clear-cart-btn" onClick={clearCart}>
            Очистить
        </button>
    )
}

export default ClearCartBtn