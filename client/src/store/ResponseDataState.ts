import { makeAutoObservable } from "mobx";
import { ICategory } from "../interfaces/ICategory";
import { IItemData } from "../interfaces/IItemData";
import { IResponseData } from "../interfaces/IResponseData";

class ResponseDataState {
	responseData: IResponseData | undefined;

	constructor() {
		makeAutoObservable(this);
	}

	setResponseData(res: IResponseData) {
		this.responseData = res;
	}
}

export default new ResponseDataState();
