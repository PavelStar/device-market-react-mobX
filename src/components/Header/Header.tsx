import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";
import "./Header.scss";
import User from "./User/User";
import LoginPopup from "../LoginPopup/LoginPopup";
import LoginPopupState from "../../store/LoginPopupState";
import { observer } from "mobx-react-lite";

const Header = observer(() => {



    return (
        <header className="header">
            <div className="header__inner">
                <Logo />
                <div className="header__nav">
                    <Search />
                    <User />
                    {LoginPopupState.isPopupShown ? <LoginPopup /> : null}
                    <Link to="/cart">
                        <Cart />
                    </Link>
                </div>
            </div>
        </header>
    );
});

export default Header;
