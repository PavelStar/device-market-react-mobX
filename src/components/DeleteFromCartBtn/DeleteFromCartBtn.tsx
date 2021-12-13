import React from 'react'
import "./DeleteFromCartBtn.scss"
import CartState from '../../store/CartState';
import { observer } from 'mobx-react-lite';

const DeleteFromCartBtn = observer(({ item }: any) => {

    const deleteFromCart = () => {
        CartState.setItemsToCart(
            CartState.itemsInCart.filter((cartItem) => {
                return cartItem.id !== item.id;
            })
        );
        CartState.setPriceSum(CartState.priceSum - (item.priceInfo.fullPrice - item.priceInfo.discountAmount) * item.count)
        item.count = 1
    };

    return (
        <button className="delete-from-cart-btn" onClick={deleteFromCart}>
            Убрать из корзины
        </button>
    )
})

export default DeleteFromCartBtn
