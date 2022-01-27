import { makeAutoObservable, makeObservable } from "mobx";

class FiltersState {
    itemsToShow: any[] = [];
    isFiltersHidden: boolean = true;
    selectValue: string = "popular";
    sortedItems: any[] = [];
    selectedCategories: string[] = [];
    selectedBrands: any[] = [];
    sliderValues: number[] = [10000, 190000];
    isAvailableOn = false;
    isDiscountOn = false;
    notAvailableItems: [] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setItemsToShow(items: any[]) {
        this.itemsToShow = items;
    }

    setIsFiltersHidden(value: boolean) {
        this.isFiltersHidden = value;
    }

    setSelectValue(value: string) {
        this.selectValue = value;
    }

    setSortedItems(items: any) {
        this.sortedItems = items;
    }

    setSelectedCategorie(item: string[]) {
        this.selectedCategories = item;
    }
    setSelectedBrands(item: any) {
        this.selectedBrands = item;
    }

    setSliderValues(values: number[]) {
        this.sliderValues = values
    }

    setIsAvailableOn(item: boolean) {
        this.isAvailableOn = item;
    }

    setIsDiscountOn(item: boolean) {
        this.isDiscountOn = item;
    }

    setNotAvailableItems(item: any) {
        this.notAvailableItems = item;
    }
}

export default new FiltersState();
