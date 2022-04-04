import { RecordWithTtl } from 'dns';
import { toJS } from 'mobx';
import React, { useState } from 'react';
import { ICartItem } from '../../../interfaces/ICartItem';
import { IItemData } from '../../../interfaces/IItemData';
import CartState from '../../../store/CartState'
import { RemoveFromCart } from '../../../Utils/RemoveFromCart';
import './Counter.scss'

interface ICounter {
    itemPrice?: number;
    cartItem?: ICartItem | undefined;
}

const Counter: React.FC<ICounter> = ({ itemPrice, cartItem }) => {

    const { cartItems, priceSum } = CartState;



    const incItem = () => {


        CartState.setCartItems([...cartItems.map((item) => {
            if (item.itemData.id === cartItem?.itemData.id) {
                ++item.count
            }
            return item
        })])
    }


    const decItem = () => {

        CartState.setCartItems([...cartItems.filter((item) => {

            if (item.itemData.id === cartItem?.itemData.id) {
                --item.count

            }
            return item.count !== 0
        })])

    }



    return (
        <div className="counter">
            <button className="counter__btn counter__btn--dec"
                onClick={decItem}
            >-</button>
            <div className="counter__num">{cartItem?.count}</div>
            <button className="counter__btn counter__btn--inc"
                onClick={incItem}
                disabled={cartItem?.count === cartItem?.itemData.amount ? true : false}
            >+</button>
        </div>
    )
}

export default Counter