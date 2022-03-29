import { observer } from "mobx-react-lite";
import { useState } from "react";
import LoginState from "../../../store/LoginState";
// import LoginPopupState from "../../../store/LoginPopupState";
import UserIcon from "../../svg/UserIcon";
import "./User.scss";
import UserNav from "./UserNav/UserNav";
import NavBarItem from "../NavBarItem/NavBarItem";
import PageWidthState from "../../../store/PageWidthState";

const User = observer(() => {
    const { userName, userPassword, isPopupShown } = LoginState;



    const showPopup = () => {
        // LoginPopupState.setShowPopup(true);
        LoginState.setIsPopupShown(!isPopupShown);
        PageWidthState.setScrollYPosition(window.scrollY)

    };

    return userName && userPassword ? (
        <UserNav />
    ) : (
        <button className="user" onClick={showPopup}>

            <NavBarItem itemIcon={<UserIcon />} itemName={"Вход"} />
        </button>
    );
});

export default User;
