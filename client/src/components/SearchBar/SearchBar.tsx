import { observer } from "mobx-react-lite";
import { RefObject, useEffect, useRef, useState, } from "react";
import SearchState from "../../store/SearchState";
import SearchResultsList from "./SearchResultsList/SearchResultsList";
import SearchField from "./SearchField/SearchField";
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import CloseBtn from "../svg/CloseBtn";
import { scrollLockOnFixed } from "../../Utils/scrollLockOnFixed";
import "./SearchBar.scss";

const SearchBar = observer(({ setIsNavShown, headerRef }: { setIsNavShown?: React.Dispatch<React.SetStateAction<boolean>>, headerRef: RefObject<HTMLDivElement> }) => {

    const searchBarRef = useRef<HTMLDivElement>(null);
    const searchInnerRef = useRef<HTMLDivElement>(null);
    const { isResultsShown } = SearchState;
    const overlayRef = useRef(null)

    const onOverlayClick = (e: any) => {
        if (e.target === overlayRef.current) {
            SearchState.setIsSearchShown(false)
        }
    }


    useEffect(() => {
        scrollLockOnFixed("disabled", headerRef)

        return () => {
            scrollLockOnFixed("enabled", headerRef)
            clearAllBodyScrollLocks()
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
                        <button onClick={() => SearchState.setIsSearchShown(false)} className="search-bar__close-btn"><CloseBtn /></button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default SearchBar;
