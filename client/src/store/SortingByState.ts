import { makeAutoObservable } from "mobx";

class SortingByState {
	sortingByType: string = "popular";

	constructor() {
		makeAutoObservable(this);
	}

	setSortingByType(res: string) {
		this.sortingByType = res;
	}
}

export default new SortingByState();
