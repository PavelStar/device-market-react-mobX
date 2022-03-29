import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import CartState from "../../../store/CartState";
import CartIcon from "../../svg/CartIcon";
import NavBarItem from "../NavBarItem/NavBarItem";
import "./Cart.scss";


const Cart = observer(() => {
    const { cartItems } = CartState


    return (
        <Link to="/cart" className="cart__link">
            {(cartItems.length > 0) && <div className="cart__counter">{cartItems.length}</div>}
            <NavBarItem itemIcon={<CartIcon />} itemName={"Корзина"} />
        </Link>
    );
})

export default Cart;
