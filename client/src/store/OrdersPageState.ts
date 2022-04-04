import { makeAutoObservable } from "mobx";
import { ICartItem } from "../interfaces/ICartItem";
import { IItemData } from "../interfaces/IItemData";

class OrdersPageState {
	itemsFromCart: ICartItem[][] = [];
	orderSum: number | undefined;
	orderDate: string | undefined = "";

	constructor() {
		makeAutoObservable(this);
	}

	setItemsFromCart(items: ICartItem[][]) {
		this.itemsFromCart = items;
	}

	setOrderSum(sum: number) {
		this.orderSum = sum;
	}

	setOrderDate(date: string) {
		this.orderDate = date;
	}
}

export default new OrdersPageState();
