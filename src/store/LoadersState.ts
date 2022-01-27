import { makeAutoObservable } from "mobx";
import { ICategory } from "../interfaces/ICategory";
import { ICategoryPageItem } from "../interfaces/ICategoryPageItem";

class LoadersState {
	isHomePageLoaded: boolean = false;
	isItemPageLoaded: boolean = false;
	isFilterPageLoaded: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	setIsHomePageLoaded(i: boolean) {
		this.isHomePageLoaded = i;
	}

	setIsItemPageLoaded(i: boolean) {
		this.isItemPageLoaded = i;
	}

	setIsFilterPageLoaded(i: boolean) {
		this.isFilterPageLoaded = i;
	}
}

export default new LoadersState();
