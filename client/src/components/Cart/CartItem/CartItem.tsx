import { toJS } from 'mobx';
import { useEffect, useState } from 'react';
import { ICartItem } from '../../../interfaces/ICartItem';
import CartState from '../../../store/CartState';
import CloseBtn from '../../svg/CloseBtn';
import Counter from '../Counter/Counter';
import './CartItem.scss'


const CartItem = ({ cartItem }: { cartItem: ICartItem }) => {

    const { cartItems, priceSum } = CartState;
    const { count, itemData: { categoryType, title, images: { sliderImages, snippetImage }, priceInfo: { fullPrice, discountAmount }, features: { memory } } } = cartItem;





    const removeFromCart = () => {

        let deleteCount: number | undefined;

        CartState.setCartItems([
            ...cartItems.filter((i) => {
                if (i.itemData.id === cartItem.itemData.id) deleteCount = i.count
                return i.itemData.id !== cartItem.itemData.id;
            }),
        ]);

    };

    return (
        <div className="cart-item">

            <img className="cart-item__img" src={snippetImage} alt="img" />

            <div className="cart-item__text-wrap">
                <h3 className="cart-item__title">
                    {`${categoryType} ${title}, ${memory}`}
                </h3>
                {cartItem.count > 1 ? (
                    <b className="cart-item__price">
                        <span className="cart-item__price-count">{(fullPrice - discountAmount)} x {cartItem.count} </span>
                        <span className="cart-item__total">{(fullPrice - discountAmount) * cartItem.count} руб.</span>

                    </b>
                ) :
                    <b className="cart-item__price">
                        {(fullPrice - discountAmount)} руб.
                    </b>
                }
            </div>


            <button className="cart-item__delete-btn"
                onClick={() => removeFromCart()}
            >
                <CloseBtn />
            </button>
            <div className="cart-item__counter">
                <Counter itemPrice={cartItem.count * (fullPrice - discountAmount)} cartItem={cartItem} />
            </div>
        </div>
    )
}

export default CartItem