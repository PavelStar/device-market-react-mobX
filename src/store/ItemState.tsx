import { makeAutoObservable } from "mobx";
import { ICategory } from "../interfaces/ICategory";
import { ICategoryPageItem } from "../interfaces/ICategoryPageItem";

class Store {

	itemInfo: ICategoryPageItem | undefined;

	constructor() {
		makeAutoObservable(this);
	}


	getItemInfo(item: ICategoryPageItem) {
		this.itemInfo = item;
	}


}

export default new Store();
