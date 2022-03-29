import FiltersSettingsState from "../store/FiltersSettingsState";

export const ResetFilters = () => {
	FiltersSettingsState.setSelectedCategories([]);
	FiltersSettingsState.setSelectedBrands([]);
	FiltersSettingsState.setPriceRange([3000, 200000]);
	FiltersSettingsState.setIsDiscount(false);
	FiltersSettingsState.setIsAvailable(false);
	FiltersSettingsState.setIsPriceRangeReseted(true);
};
