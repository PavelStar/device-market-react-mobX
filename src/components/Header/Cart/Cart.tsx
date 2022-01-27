import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import CartState from "../../../store/CartState";
import "./Cart.scss";
import CartIcon from "../../svg/CartIcon";

const Cart = observer(() => {
    return (
        <div className="cart">
            <Link to="/cart" className="cart__link">
                {(CartState.itemsInCart.length > 0) && <div className="cart__counter">{CartState.itemsInCart.length}</div>}

                <CartIcon />

            </Link>
        </div>
    );
})

export default Cart;
