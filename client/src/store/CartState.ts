import { makeAutoObservable } from "mobx";
import { IItemData } from "../interfaces/IItemData";

class CartState {
	cartItems: IItemData[] = [];
	priceSum: number = 0;

	constructor() {
		makeAutoObservable(this);
	}

	setCartItems(data: IItemData[]) {
		this.cartItems = data;
	}

	setPriceSum(sum: number) {
		this.priceSum = sum;
	}
}

export default new CartState();
