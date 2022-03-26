import { makeAutoObservable } from "mobx";
import { IItemData } from "../interfaces/IItemData";

class OrdersPageState {
	itemsFromCart: IItemData[][] = [];
	orderSum: number | undefined;
	orderDate: string | undefined = "";

	constructor() {
		makeAutoObservable(this);
	}

	setItemsFromCart(items: IItemData[][]) {
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
