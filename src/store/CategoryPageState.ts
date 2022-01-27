import { makeAutoObservable } from "mobx";
import { ICategory } from "../interfaces/ICategory";
import { ICategoryPageItem } from "../interfaces/ICategoryPageItem";

class CategoryPageState {
	categoryPage: any = {};
	categoryPageItems: ICategoryPageItem[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	getCategoryPage(item: string) {
		this.categoryPage = item;
	}

	getCategoryPageItems(items: ICategoryPageItem[]) {
		this.categoryPageItems = items;
	}
}

export default new CategoryPageState();
