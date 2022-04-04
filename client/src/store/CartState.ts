import { makeAutoObservable } from "mobx";
import { ICartItem } from "../interfaces/ICartItem";
import { IItemData } from "../interfaces/IItemData";

class CartState {
	cartItems: ICartItem[] = [];
	priceSum: number = 0;

	constructor() {
		makeAutoObservable(this);
	}

	setCartItems(item: ICartItem[]) {
		this.cartItems = item;
	}

	setPriceSum(sum: number) {
		this.priceSum = sum;
	}
}

export default new CartState();
