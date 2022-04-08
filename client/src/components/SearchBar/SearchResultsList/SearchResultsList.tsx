import React, { RefObject, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IItemData } from "../../../interfaces/IItemData";
import ItemDataState from "../../../store/ItemDataState";
import SearchState from "../../../store/SearchState";
import ToItemLink from "../../buttons/ToItemLink/ToItemLink";
import ResponseDataState from "../../../store/ResponseDataState";
import { observer } from "mobx-react-lite";
import PageWidthState from "../../../store/PageWidthState";
import "./SearchResultsList.scss";
import { clearAllBodyScrollLocks } from "body-scroll-lock";

const SearchResultsList = observer(
    ({ resultsHeight, searchInnerRef }: { resultsHeight?: number; searchInnerRef: RefObject<HTMLDivElement> }) => {
        const searchResultsRef = useRef<HTMLUListElement>(null);

        const { responseData } = ResponseDataState;
        const { searchInputValue, searchResults, isResultsShown, isFocused } = SearchState;
        const { isMobile } = PageWidthState;



        useEffect(() => {
            document.addEventListener("click", outsideSearchClick);

            return () => {
                document.removeEventListener("click", outsideSearchClick);
            };
        }, []);

        useEffect(() => {
            if (responseData) {
                SearchState.setSearchResults(
                    responseData.items.filter((item) => {
                        return (
                            item.title.toLocaleLowerCase().includes(searchInputValue.toLocaleLowerCase()) ||
                            item.brand.toLocaleLowerCase().includes(searchInputValue.toLocaleLowerCase())
                        );
                    })
                );
            }
        }, [searchInputValue]);

        const outsideSearchClick = (e: any) => {
            if (!searchInnerRef.current?.contains(e.target as Node)) {
                SearchState.setIsResultsShown(false);
            }
        };

        const onResultClick = (item: IItemData) => {
            // ItemDataState.setItemData(item);
            SearchState.setIsResultsShown(false);
            SearchState.setIsSearchShown(false)
            SearchState.setSearchInputValue('')
            clearAllBodyScrollLocks()
        };

        return (
            <ul className="search__results-list search-results" ref={searchResultsRef}>
                {searchInputValue &&
                    searchResults.map((item: IItemData) => {
                        const {
                            id,
                            color,
                            title,
                            priceInfo: { fullPrice, discountAmount },
                            images: { snippetImage },
                            features: { memory },
                        } = item;

                        return (
                            <li key={item.id} className="search-results__item">
                                <Link to={`/item/${id}`} className="search-results__link" onClick={() => onResultClick(item)}>
                                    <div className="search-results__img-wrap">
                                        <img
                                            className="search-results__img"
                                            src={snippetImage}
                                            alt={title}
                                            height="50"
                                        />
                                    </div>
                                    <div className="search-results__text-wrap">
                                        <p className="search-results__title">
                                            {title}, {color}, {memory}
                                        </p>
                                        <p className="search-results__price">{fullPrice - discountAmount} р.</p>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                {searchInputValue && !searchResults.length && (
                    <p>
                        По запросу <span className="search-results__results-not-found">{searchInputValue} </span>
                        ничего не найдено
                    </p>
                )}
            </ul>
        );
    }
);

export default SearchResultsList;
