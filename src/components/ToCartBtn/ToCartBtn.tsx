import "./ToCartBtn.scss";
import { observer } from "mobx-react-lite";
import CartState from "../../store/CartState";

const ToCartBtn = observer(({ item }: any) => {
	const addToCart = () => {

		item.count = 1
		CartState.setItemsToCart([...CartState.itemsInCart, item]);
		CartState.setPriceSum(CartState.priceSum + (item.priceInfo.fullPrice - item.priceInfo.discountAmount) * item.count)

	};

	return (
		<button className="to-cart-btn" onClick={addToCart}>
			В корзину
		</button>
	);
});

export default ToCartBtn;
