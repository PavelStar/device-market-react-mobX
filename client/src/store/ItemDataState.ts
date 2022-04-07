import { makeAutoObservable } from "mobx";
import { IItemData } from "../interfaces/IItemData";

class ItemDataState {
	itemData: IItemData | undefined;
	urlName: string = "";

	constructor() {
		makeAutoObservable(this);
	}

	setItemData(data: IItemData | undefined) {
		this.itemData = data;
	}

	setUrlName(id: string) {
		this.urlName = id;
	}
}

export default new ItemDataState();
