import FiltersSettingsState from "../store/FiltersSettingsState";
import { setFilterSettings } from "./setFilterSettings";

export const resetFilters = () => {
	FiltersSettingsState.setSelectedCategories([]);
	FiltersSettingsState.setSelectedBrands([]);
	FiltersSettingsState.setPriceRange([3000, 200000]);
	FiltersSettingsState.setIsDiscount(false);
	FiltersSettingsState.setIsAvailable(false);
	FiltersSettingsState.setIsPriceRangeReseted(true);
	FiltersSettingsState.setAllFilteredItems(setFilterSettings());
};
