import { observer } from 'mobx-react-lite';
import React from 'react'
import { ICartItem } from '../../../interfaces/ICartItem';
import CartState from '../../../store/CartState';
import StatusEmptyBlock from '../../StatusEmptyBlock/StatusEmptyBlock';
import EmptyCart from '../../svg/EmptyCart';
import CartItem from '../CartItem/CartItem';

const CartItems = observer(() => {

    const { cartItems } = CartState;

    return (
        <ul className="cart__list">
            {cartItems.length === 0 ? (
                <StatusEmptyBlock title={"В корзину ничего не добавлено"} image={<EmptyCart />} />
            ) : (
                cartItems.map((item: ICartItem) => {
                    return (
                        <li>
                            <CartItem cartItem={item} />
                        </li>
                    );
                })
            )}
        </ul>
    )
})

export default CartItems