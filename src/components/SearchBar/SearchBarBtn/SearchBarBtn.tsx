import { observer } from "mobx-react-lite";
import React from "react";
import PageWidthState from "../../../store/PageWidthState";
import SearchState from "../../../store/SearchState";
import SearchIcon from "../../svg/SearchIcon";
import "./SearchBarBtn.scss";

const SearchBarBtn = observer(() => {
    const { isMobile } = PageWidthState;

    const onSearchBtnClick = () => { };

    const closeSearch = () => {
        SearchState.setIsSearchShown(false)
        SearchState.setSearchInputValue('')
    }

    return isMobile ? (
        <button className="search-bar-btn--close" onClick={closeSearch}>Отмена</button>
    ) : (
        <button className="search-bar-btn--show-results" onClick={onSearchBtnClick}>
            <SearchIcon />
        </button>
    );
});

export default SearchBarBtn;
