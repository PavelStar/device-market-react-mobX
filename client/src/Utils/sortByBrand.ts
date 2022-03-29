import FiltersSettingsState from "../store/FiltersSettingsState";

export const sortByBrand = (brand: string) => {
	const { selectedBrands } = FiltersSettingsState;

	if (!selectedBrands.includes(brand)) {
		FiltersSettingsState.setSelectedBrands([...selectedBrands.concat(brand)]);
	}
};
