
import { makeAutoObservable } from "mobx";

class PaginationState {
    itemsCount: number | undefined;
    startIndex: number = 0;

    constructor() {
        makeAutoObservable(this);
    }


}

export default new PaginationState();
