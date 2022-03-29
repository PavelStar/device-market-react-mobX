import { IItemData } from "../interfaces/IItemData";
import SortingByState from "../store/SortingByState";

export const setSortByItems = (items: any) => {
	return items?.sort((a: any, b: any) => {
		let typeOfSortA;
		let typeOfSortB;

		if (SortingByState.sortingByType === "popular") {
			typeOfSortA = a.rating;
			typeOfSortB = b.rating;
		}
		if (SortingByState.sortingByType === "newest") {
			typeOfSortA = a.releaseDate;
			typeOfSortB = b.releaseDate;
		}
		if (SortingByState.sortingByType === "expensive") {
			typeOfSortA = a.priceInfo.fullPrice;
			typeOfSortB = b.priceInfo.fullPrice;
		}
		if (SortingByState.sortingByType === "cheap") {
			typeOfSortA = b.priceInfo.fullPrice;
			typeOfSortB = a.priceInfo.fullPrice;
		}

		if (typeOfSortA > typeOfSortB) {
			return -1;
		}
		if (typeOfSortA < typeOfSortB) {
			return 1;
		}
		return 0;
	});
};
