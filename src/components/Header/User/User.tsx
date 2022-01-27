import { observer } from "mobx-react-lite";
import React from "react";
import LoginPopupState from "../../../store/LoginPopupState";
import UserIcon from "../../svg/UserIcon";
import "./User.scss";

const User = observer(() => {

    const showPopup = () => {
        LoginPopupState.showPopup(true);
    }

    return (
        <a className="user" onClick={showPopup}>
            <UserIcon />
            {/* <p className="user__text">Войти</p> */}
        </a>
    );
});

export default User;
