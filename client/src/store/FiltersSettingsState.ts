import { makeAutoObservable } from "mobx";
import { ICategory } from "../interfaces/ICategory";
import { IItemData } from "../interfaces/IItemData";
import { IResponseData } from "../interfaces/IResponseData";

class FiltersSettingsState {
	itemsFound: number | undefined;
	allFilteredItems: IItemData[] | undefined;
	resultsByPagination: IItemData[] | undefined;
	isFiltersShown: boolean = false;
	selectedCategories: string[] = [];
	selectedBrands: string[] = [];
	priceRange: number[] = [3000, 200000];
	isPriceRangeReseted: boolean = false;
	isDiscount: boolean = false;
	isAvailable: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	setItemsFound(count: number) {
		this.itemsFound = count;
	}

	setAllFilteredItems(items: IItemData[]) {
		this.allFilteredItems = items;
	}

	setResultsByPagination(items: IItemData[]) {
		this.resultsByPagination = items;
	}

	setIsFiltersShown(value: boolean) {
		this.isFiltersShown = value;
	}

	setSelectedCategories(res: string[]) {
		this.selectedCategories = res;
	}

	setSelectedBrands(res: string[]) {
		this.selectedBrands = res;
	}

	setPriceRange(res: number[]) {
		this.priceRange = res;
	}

	setIsPriceRangeReseted(res: boolean) {
		this.isPriceRangeReseted = res;
	}

	setIsDiscount(res: boolean) {
		this.isDiscount = res;
	}

	setIsAvailable(res: boolean) {
		this.isAvailable = res;
	}
}

export default new FiltersSettingsState();
