import FiltersState from "../store/FiltersState";
import store from "../store/ItemState";
import ResItemsState from "../store/ResItemsState";
import CategoryPageState from "../store/CategoryPageState";

class ResetFilters {
	reset() {
		FiltersState.setSelectedCategorie([]);
		FiltersState.setSelectedBrands([]);
		FiltersState.setIsAvailableOn(false);
		FiltersState.setIsDiscountOn(false);
		FiltersState.setSliderValues([10000, 190000]);
		CategoryPageState.getCategoryPageItems(ResItemsState.allItems);
	}
}

export default ResetFilters;
