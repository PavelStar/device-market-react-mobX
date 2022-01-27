import { makeAutoObservable } from "mobx";
import { ICategory } from "../interfaces/ICategory";
import { ICategoryPageItem } from "../interfaces/ICategoryPageItem";

class ResItemsState {
	allCategories: ICategory[] = [];
	allBrands: string[] = [];
	allItems: [] = [];
	newItems: ICategoryPageItem[] = [];
	popularItems: ICategoryPageItem[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	getCategories(item: ICategory[]) {
		this.allCategories = item;
	}

	getBrands(brand: string[]) {
		this.allBrands = brand;
	}

	getAllItems(res: []) {
		this.allItems = res;
	}

	getNewItems(items: ICategoryPageItem[]) {
		this.newItems = items;
	}

	getPopularItems(items: ICategoryPageItem[]) {
		this.popularItems = items;
	}
}

export default new ResItemsState();
