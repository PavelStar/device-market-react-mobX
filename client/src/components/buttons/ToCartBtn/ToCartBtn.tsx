import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { IItemData } from "../../../interfaces/IItemData";
import CartState from "../../../store/CartState";
import CartIcon from "../../svg/CartIcon";
import CloseBtn from "../../svg/CloseBtn";
import RemoveFromCartIcon from "../../svg/RemoveFromCartIcon";
import "./ToCartBtn.scss";



const ToCartBtn = observer(({ item, isBtnLite }: { item: IItemData, isBtnLite?: boolean }) => {
	const { cartItems, priceSum } = CartState;
	const { priceInfo: { fullPrice, discountAmount } } = item;


	const [isItemInCart, setIsItemInCart] = useState(false)

	useEffect(() => {

		setIsItemInCart(false)
		cartItems.forEach(i => {
			if (i.id === item.id) {
				console.log(true)
				setIsItemInCart(true)
			}
		})

	})


	const addToCart = () => {
		CartState.setCartItems([...cartItems.concat(item)]);
		CartState.setPriceSum(priceSum + fullPrice - discountAmount)
	};

	const removeFromCart = () => {
		CartState.setCartItems([
			...cartItems.filter((i) => {
				return i.id !== item.id;
			}),
		]);
		CartState.setPriceSum(priceSum - (fullPrice - discountAmount))
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
