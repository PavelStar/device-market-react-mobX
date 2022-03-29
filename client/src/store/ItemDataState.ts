import { makeAutoObservable } from "mobx";
import { IItemData } from "../interfaces/IItemData";

class ItemDataState {
	itemData: IItemData | undefined;

	constructor() {
		makeAutoObservable(this);
	}

	setItemData(data: IItemData) {
		this.itemData = data;
	}
}

export default new ItemDataState();
