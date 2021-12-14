import { makeAutoObservable } from "mobx";
import { ICategory } from "../interfaces/ICategory";
import { ICategoryPageItem } from "../interfaces/ICategoryPageItem";

class Store {

	allItems: [] = [];
	newItems: ICategoryPageItem[] = [];
	popularItems: ICategoryPageItem[] = [];
	itemInfo: ICategoryPageItem | undefined;
	categories: ICategory[] = [];
	brands: string[] = [];
	categoryPage: any = {};
	categoryPageItems: ICategoryPageItem[] = [];
	isHomePageLoaded: boolean = false;
	isItemPageLoaded: boolean = false;
	isFilterPageLoaded: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	getResponseItems(res: []) {
		this.allItems = res;
	}

	getNewItems(items: ICategoryPageItem[]) {
		this.newItems = items;
	}

	getPopularItems(items: ICategoryPageItem[]) {
		this.popularItems = items;
	}

	getItemInfo(item: ICategoryPageItem) {
		this.itemInfo = item;
	}

	getCategoryItems(item: ICategory[]) {
		this.categories = item;
	}

	getBrands(brand: string[]) {
		this.brands = brand;
	}

	getCategoryPage(item: string) {
		this.categoryPage = item;
	}

	getCategoryPageItems(items: ICategoryPageItem[]) {
		this.categoryPageItems = items;
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

export default new Store();
