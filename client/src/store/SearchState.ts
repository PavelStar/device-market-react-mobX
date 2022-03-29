import { makeAutoObservable } from "mobx";
import { IItemData } from "../interfaces/IItemData";

class SearchState {
	searchInputValue: string = "";
	isSearchShown: boolean = false;
	isResultsShown: boolean = false;
	searchResults: IItemData[] = [];
	isFocused: boolean = false;
	headerHeight: number | undefined;
	searchBarHeight: number | undefined;

	constructor() {
		makeAutoObservable(this);
	}

	setSearchInputValue(value: string) {
		this.searchInputValue = value;
	}

	setIsSearchShown(value: boolean) {
		this.isSearchShown = value;
	}

	setIsResultsShown(value: boolean) {
		this.isResultsShown = value;
	}

	setSearchResults(results: IItemData[]) {
		this.searchResults = results;
	}

	setIsFocused(focus: boolean) {
		this.isFocused = focus;
	}

	setHeaderHeight(height: number) {
		this.headerHeight = height;
	}

	setSearchBarHeight(height: number) {
		this.searchBarHeight = height;
	}
}

export default new SearchState();
