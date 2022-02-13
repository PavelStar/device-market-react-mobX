import { makeAutoObservable } from "mobx";
import { ICategoryPageItem } from "../interfaces/ICategoryPageItem";

class OrdersPageState {
	itemsFromCart: any = [];

	constructor() {
		makeAutoObservable(this);
	}

	setItemsFromCart(items: any) {
		this.itemsFromCart = items;
	}
}

export default new OrdersPageState();
