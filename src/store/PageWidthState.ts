import { makeAutoObservable } from "mobx";

class PageWidthState {
	isMobile: boolean = window.innerWidth >= 768 ? false : true;
	itemCardWidth: number | undefined;
	scrollYPosition: number | undefined;

	constructor() {
		makeAutoObservable(this);
	}

	setIsMobile(width: boolean) {
		this.isMobile = width;
	}

	setItemCardWidth(width: number) {
		this.itemCardWidth = width;
	}

	setScrollYPosition(position: number) {
		this.scrollYPosition = position;
	}
}

export default new PageWidthState();
