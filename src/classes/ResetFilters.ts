import FiltersState from "../store/FiltersState";
import store from "../store/store";

class ResetFilters {
	reset() {
		FiltersState.setSelectedCategorie([]);
		FiltersState.setSelectedBrands([]);
		FiltersState.setIsAvailableOn(false);
		FiltersState.setIsDiscountOn(false);
		FiltersState.setSliderValues([10000, 190000]);
		store.getCategoryPageItems(store.allItems);
	}
}

export default ResetFilters;
