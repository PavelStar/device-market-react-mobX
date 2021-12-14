import { makeAutoObservable } from "mobx";
import { ICategoryPageItem } from "../interfaces/ICategoryPageItem";

class CartState {
	itemsInCart: ICategoryPageItem[] = [];
	priceSum: number = 0;
	itemCount: number = 1

	constructor() {
		makeAutoObservable(this);
	}

	setItemsToCart(value: ICategoryPageItem[]) {
		this.itemsInCart = value;
	}

	setPriceSum(price: number) {
		this.priceSum = price;
	}

	setItemCount(item: number) {
		this.itemCount = item
	}
}

export default new CartState();
