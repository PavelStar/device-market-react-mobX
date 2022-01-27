import { makeAutoObservable } from "mobx";

class LoginPopupState {
	loginValue: string = "";
	passwordValue: string = "";
	isPassShown: boolean = false;
	isPopupShown: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	setLoginValue(value: string) {
		this.loginValue = value;
	}

	setPasswordValue(value: string) {
		this.passwordValue = value;
	}

	setIsPassShown(value: boolean) {
		this.isPassShown = value;
	}

	showPopup(value: boolean) {
		this.isPopupShown = value;
	}
}

export default new LoginPopupState();
