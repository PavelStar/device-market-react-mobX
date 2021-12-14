import { toJS } from "mobx";
import { listenerCount } from "process";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../../interfaces/ICategory";
import { ICategoryPageItem } from "../../../interfaces/ICategoryPageItem";
import store from "../../../store/store";
import "./Search.scss";

const Search = () => {
    const [isShowSearch, setIsShowSearch] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const showSearch = () => {
        let search = document.querySelector('.search__window')
        if (search) {
            search.classList.toggle('show-search')
        }
        setIsShowSearch(() => !isShowSearch);
        // if (document.body.style.overflow !== "hidden") {
        //     document.body.style.overflow = "hidden";
        // } else {
        //     document.body.style.overflow = "scroll";
        // }
    };

    const categoryTitle = (category: ICategory) => {
        const { categoryName } = category;

        store.getCategoryPage(categoryName);
        const filteredArr: ICategoryPageItem[] = store.allItems.filter((item: ICategoryPageItem) => {
            return item.category === categoryName;
        });
        store.getCategoryPageItems(filteredArr);
        store.categoryPageItems.sort((a: ICategoryPageItem, b: ICategoryPageItem) => {
            if (a.rating > b.rating) {
                return -1;
            }
            if (a.rating < b.rating) {
                return 1;
            }
            return 0;
        });

        showSearch();
    };

    const toItemPage = (item: ICategoryPageItem) => {
        store.getItemInfo(item);
        showSearch();
        setInputValue("");
    };



    const showResults = (e: any) => {
        setInputValue(e.target.value.toLocaleLowerCase())
        let modalRes = document.querySelector('.search__modal-results')
        if (modalRes) {
            modalRes.classList.add('show-search')
        }
    }

    useEffect(() => {
        let modalRes = document.querySelector('.search__modal-results')
        console.log(inputValue.length)
        inputValue.length === 0 && modalRes && modalRes.classList.remove('show-search')
    }, [inputValue])

    return (
        <div className="search">
            <button className="search__btn" onClick={showSearch}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M29.2675 25.7325L22.9212 19.3863C24.2325 17.41 25 15.0438 25 12.5C25 5.6075 19.3925 0 12.5 0C5.6075 0 0 5.6075 0 12.5C0 19.3925 5.6075 25 12.5 25C15.0438 25 17.41 24.2325 19.3863 22.9212L25.7325 29.2675C26.7075 30.2437 28.2925 30.2437 29.2675 29.2675C30.2437 28.2912 30.2437 26.7087 29.2675 25.7325ZM3.75 12.5C3.75 7.675 7.675 3.75 12.5 3.75C17.325 3.75 21.25 7.675 21.25 12.5C21.25 17.325 17.325 21.25 12.5 21.25C7.675 21.25 3.75 17.325 3.75 12.5Z"
                        fill="white"
                    />
                </svg>
            </button>


            <div className="search__window">
                <button className="search__back-btn" onClick={showSearch}>
                    Скрыть поиск
                </button>
                <input
                    // onChange={(e) => setInputValue(e.target.value.toLocaleLowerCase())}
                    onChange={(e) => showResults(e)}
                    className="search__type-field"
                    type="text"
                    placeholder="Поиск по товарам"
                />
                <div className="search__modal-wrap">
                    <div className="search__modal-results">
                        <ul className="search__results-list results-list">
                            {store.allItems ? store.allItems.map((item: ICategoryPageItem) => {
                                return item.title.toLocaleLowerCase().includes(inputValue) && inputValue.length ? (
                                    <li className="results-list__item">
                                        <Link className="results-list__link" to="/item" onClick={() => toItemPage(item)}>
                                            <img
                                                className="results-list__img"
                                                src={item.images.snippetImage}
                                                alt={item.title}
                                            />
                                            <p className="results-list__title">{item.title}</p>
                                            <p className="results-list__price">
                                                {item.priceInfo.fullPrice - item.priceInfo.discountAmount} р.
                                            </p>
                                        </Link>
                                    </li>
                                ) : null;
                            }) : null}
                        </ul>
                        {inputValue.length === 0 ? (
                            <>
                                <ul className="search__popular-list popular-list">
                                    {store.allItems.map((item: ICategoryPageItem) => {
                                        if (item.rating > 8.4 && item.isAvailable) {
                                            return (
                                                <li className="popular-list__item">
                                                    <Link
                                                        to="/item"
                                                        onClick={() => toItemPage(item)}
                                                        className="popular-list__link"
                                                    >
                                                        {item.title}
                                                    </Link>
                                                </li>
                                            );
                                        }
                                    })}
                                </ul>
                                <ul className="search__category-list search-category-list">
                                    {store.categories.length
                                        ? store.categories.map((item: ICategory) => {
                                            return (
                                                <li className="search-category-list__item">
                                                    <Link
                                                        onClick={() => categoryTitle(item)}
                                                        to="/category"
                                                        className="search-category-list__link"
                                                    >
                                                        <img
                                                            className="search-category-list__img"
                                                            src={item.image}
                                                            alt="img"
                                                        />
                                                        <p className="search-category-list__category-name">
                                                            {item.categoryName}
                                                        </p>
                                                    </Link>
                                                </li>
                                            );
                                        })
                                        : null}
                                </ul>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Search;
