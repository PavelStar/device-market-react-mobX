import { ICategory } from "../interfaces/ICategory";
import FiltersSettingsState from "../store/FiltersSettingsState";

export const sortByCategory = (category: ICategory | string) => {
	if (typeof category !== "string") {
		FiltersSettingsState.setSelectedCategories([category.categoryName]);
	} else {
		FiltersSettingsState.setSelectedCategories([category]);
	}
};
