import { makeAutoObservable } from "mobx";

class ProductSelectsState {
	selectedTitle: string | undefined;
	selectedColor: string | undefined;
	selectedMemory: string | undefined;

	constructor() {
		makeAutoObservable(this);
	}

	setSelectedTitle(title: string) {
		this.selectedTitle = title;
	}

	setSelectedColor(color: string) {
		this.selectedColor = color;
	}

	setSelectedMemory(memory: string) {
		this.selectedMemory = memory;
	}
}

export default new ProductSelectsState();
