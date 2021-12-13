import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <Logo />
                <div className="header__nav">
                    <Search />
                    <Link to="/cart">
                        <Cart />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
