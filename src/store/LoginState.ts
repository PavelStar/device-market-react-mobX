import { makeAutoObservable } from "mobx";
import { IItemData } from "../interfaces/IItemData";

class LoginState {
	isPopupShown: boolean = false;
	userName: string = "";
	userPassword: string = "";

	constructor() {
		makeAutoObservable(this);
	}

	setIsPopupShown(value: boolean) {
		this.isPopupShown = value;
	}

	setUserName(name: string) {
		this.userName = name;
	}

	setUserPassword(password: string) {
		this.userPassword = password;
	}
}

export default new LoginState();
