import { makeAutoObservable } from "mobx";
import { ICategory } from "../interfaces/ICategory";
import { IResponseData } from "../interfaces/IResponseData";

class FiltersSettingsState {
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
