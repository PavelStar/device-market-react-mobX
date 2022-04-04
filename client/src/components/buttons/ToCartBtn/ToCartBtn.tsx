import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { IItemData } from "../../../interfaces/IItemData";
import CartState from "../../../store/CartState";
import CartIcon from "../../svg/CartIcon";
import RemoveFromCartIcon from "../../svg/RemoveFromCartIcon";
import "./ToCartBtn.scss";


interface IToCartBtn {
	toCartItem: IItemData;
	isBtnLite?: boolean;
}

const ToCartBtn: React.FC<IToCartBtn> = observer(({ toCartItem, isBtnLite }) => {
	const { cartItems, priceSum } = CartState;
	const { priceInfo: { fullPrice, discountAmount } } = toCartItem;


	const [isItemInCart, setIsItemInCart] = useState(false)

	useEffect(() => {

		setIsItemInCart(false)
		cartItems.forEach(i => {
			if (i.itemData.id === toCartItem.id) {
				setIsItemInCart(true)
			}
		})
	})




	const addToCart = () => {
		CartState.setCartItems([...cartItems.concat({ count: 1, itemData: toCartItem })]);
	};

	const removeFromCart = () => {

		let deleteCount: number | undefined;

		CartState.setCartItems([
			...cartItems.filter((i) => {
				if (i.itemData.id === toCartItem.id) deleteCount = i.count
				return i.itemData.id !== toCartItem.id;
			}),
		]);
	};




	return (
		<>
			{isItemInCart ?
				<button className="to-cart-btn to-cart-btn--remove" onClick={removeFromCart}>
					{isBtnLite ? <RemoveFromCartIcon /> : 'Удалить из корзины'}
				</button>
				:
				<button className="to-cart-btn" onClick={addToCart}>
					{!isBtnLite && "В корзину"} <CartIcon />
				</button>}
		</>
	);

});

export default ToCartBtn;
