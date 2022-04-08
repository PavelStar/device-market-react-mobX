import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../components/Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Cart from "./Cart/Cart";
import User from "./User/User";

import { observer } from "mobx-react-lite";
import LoginState from "../../store/LoginState";
import CatalogLink from "../buttons/CatalogLink/CatalogLink";
import SearchState from "../../store/SearchState";
import PageWidthState from "../../store/PageWidthState";
import NavBarItem from "./NavBarItem/NavBarItem";
import SearchIcon from "../svg/SearchIcon";
import LoginPopup from "../LoginPopup/LoginPopup";
import "./Header.scss";

const Header = observer(() => {
    const headerRef = useRef<HTMLDivElement>(null);
    const headerNavRef = useRef<HTMLDivElement>(null);
    const { isPopupShown } = LoginState;
    const { isSearchShown, headerHeight, searchBarHeight } = SearchState;

    const { isMobile } = PageWidthState;

    useEffect(() => {
        headerRef.current && SearchState.setHeaderHeight(headerRef.current?.clientHeight)
    }, [])

    useEffect(() => {
        if (!isMobile) {
            document.body.style.setProperty("padding-top", `${headerRef.current?.clientHeight}px`)
        } else {
            document.body.style.setProperty("padding-top", `${0}px`)

        }
    }, [isMobile])



    const showSearch = () => {
        SearchState.setIsSearchShown(true)
        PageWidthState.setScrollYPosition(window.scrollY)
    }

    return (
        <>
            {isPopupShown && <LoginPopup headerRef={headerRef} />}

            <header className={!isSearchShown && isMobile ? "header" : "header header--to-top"} ref={headerRef} >
                {isSearchShown ? (
                    <SearchBar headerRef={headerRef} />
                ) : (
                    <div className="header__nav" ref={headerNavRef}>
                        <Logo logoType="navigation" />
                        <CatalogLink isNav={true} />
                        <button
                            className="header__show-mobile-search-btn"
                            onClick={showSearch}
                        >
                            <NavBarItem itemIcon={<SearchIcon />} itemName={"Поиск"} />
                        </button>
                        <User />
                        <Cart />
                    </div>
                )}
            </header>
        </>
    );
});

export default Header;
