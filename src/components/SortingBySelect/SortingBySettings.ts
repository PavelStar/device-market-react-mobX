import SortingByState from "../../store/SortingByState";

export const setSortingBySettings = (sortingType: string): void => {
	const { sortingByType } = SortingByState;

	SortingByState.setSortingByType(sortingType);
};
