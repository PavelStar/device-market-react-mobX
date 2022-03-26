import { observer } from "mobx-react-lite";
import { RefObject, useEffect, useRef, useState, } from "react";
import SearchState from "../../store/SearchState";
import SearchResultsList from "./SearchResultsList/SearchResultsList";
import SearchField from "./SearchField/SearchField";
import SearchBarBtn from "./SearchBarBtn/SearchBarBtn";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import PageWidthState from "../../store/PageWidthState";
import CloseBtn from "../svg/CloseBtn";
import "./SearchBar.scss";
import { ScrollLockOnFixed } from "../../Utils/ScrollLockOnFixed";

const SearchBar = observer(({ setIsNavShown, headerRef }: { setIsNavShown?: React.Dispatch<React.SetStateAction<boolean>>, headerRef: RefObject<HTMLDivElement> }) => {

    const searchBarRef = useRef<HTMLDivElement>(null);
    const searchInnerRef = useRef<HTMLDivElement>(null);

    const { headerHeight, isResultsShown } = SearchState;
    const { isMobile, scrollYPosition } = PageWidthState;

    const overlayRef = useRef(null)

    const onOverlayClick = (e: any) => {
        if (e.target === overlayRef.current) {
            SearchState.setIsSearchShown(false)
        }
    }



    useEffect(() => {
        ScrollLockOnFixed("disabled", headerRef)

        return () => {
            ScrollLockOnFixed("enabled", headerRef)
        }
    }, [])



    return (
        <div className="search-bar__overlay" onClick={onOverlayClick} ref={overlayRef}>
            <div className="search-bar"
                ref={searchBarRef}>

                <div className="search-bar__inner" ref={searchInnerRef}>
                    <div className="search-bar__window">
                        <SearchField />
                        {(isResultsShown) && (
                            <SearchResultsList searchInnerRef={searchInnerRef} />

                        )}
                        {/* <button onClick={() => setIsNavShown && setIsNavShown(false)} className="search-bar__close-btn"><CloseBtn /></button> */}
                        <button onClick={() => SearchState.setIsSearchShown(false)} className="search-bar__close-btn"><CloseBtn /></button>
                    </div>
                    {/* <SearchBarBtn /> */}
                </div>
            </div>
        </div>
    );
});

export default SearchBar;
