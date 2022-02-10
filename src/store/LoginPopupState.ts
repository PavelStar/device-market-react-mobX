import { makeAutoObservable } from "mobx";

class LoginPopupState {
	loginValue: string = "";
	passwordValue: string = "";
	isPassShown: boolean = false;
	isPopupShown: boolean = false;
	isLoggined: boolean = false;
	userName: string = "";

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

	setShowPopup(value: boolean) {
		this.isPopupShown = value;
	}

	setLoggined(value: boolean) {
		this.isLoggined = value;
	}

	setUserName(name: string) {
		this.userName = name;
	}
}

export default new LoginPopupState();
