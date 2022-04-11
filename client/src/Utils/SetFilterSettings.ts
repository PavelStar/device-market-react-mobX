import ResponseDataState from "../store/ResponseDataState";
import FiltersSettingsState from "../store/FiltersSettingsState";
import { setSortByItems } from "./setSortByItems";

export const setFilterSettings = () => {
	const { responseData } = ResponseDataState;
	const { allFilteredItems, selectedCategories, selectedBrands, priceRange, isAvailable, isDiscount } =
		FiltersSettingsState;

	return setSortByItems(
		responseData?.items
			.filter((item) => {
				if (selectedCategories.length) {
					return selectedCategories.includes(item.category);
				} else {
					return item;
				}
			})
			.filter((item) => {
				if (selectedBrands.length) {
					return selectedBrands.includes(item.brand);
				} else {
					return item;
				}
			})
			.filter((item) => {
				let price = item.priceInfo.fullPrice - item.priceInfo.discountAmount;
				return price >= priceRange[0] && price <= priceRange[1];
			})
			.filter((item) => {
				if (isAvailable) {
					return item.isAvailable;
				} else {
					return item;
				}
			})
			.filter((item) => {
				if (isDiscount) {
					return item.priceInfo.discount;
				} else {
					return item;
				}
			})
	);
};
