import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import store from "../../../store/store";
import FiltersState from "../../../store/FiltersState";
import Filters from "./Filters/Filters";
import ToCartBtn from "../../ToCartBtn/ToCartBtn";
import "rc-slider/assets/index.css";
import "nouislider/distribute/nouislider.css";
import "./CategoryPage.scss";
import DeleteFromCartBtn from "../../DeleteFromCartBtn/DeleteFromCartBtn";
import CartState from "../../../store/CartState";
import FilterPageLoader from "../../loaders/FilterPageLoader/FilterPageLoader";
import { ICategoryPageItem } from "../../../interfaces/ICategoryPageItem";

const CategoryPage = observer(() => {





    const toItemPage = (item: ICategoryPageItem) => {

        store.getItemInfo(item);
    };

    const showFilters = () => {
        // if (document.body.style.overflow !== "hidden") {
        //     document.body.style.overflow = "hidden";
        // } else {
        //     document.body.style.overflow = "scroll";
        // }
        // FiltersState.setIsFiltersHidden(!FiltersState.isFiltersHidden);
        let filterWrap = document.querySelector(".sorting__filter-wrap");
        if (filterWrap) {
            filterWrap.classList.toggle("show");
            console.log(filterWrap);
        }
    };

    const sortBy = (e: any) => {
        FiltersState.setSelectValue(e.target.value);
        store.getCategoryPageItems(
            store.categoryPageItems.sort((a: ICategoryPageItem, b: ICategoryPageItem) => {
                let typeOfSortA;
                let typeOfSortB;
                if (FiltersState.selectValue === "popular") {
                    typeOfSortA = a.rating;
                    typeOfSortB = b.rating;
                }
                if (FiltersState.selectValue === "newest") {
                    typeOfSortA = a.releaseDate;
                    typeOfSortB = b.releaseDate;
                }
                if (FiltersState.selectValue === "expensive") {
                    typeOfSortA = a.priceInfo.fullPrice;
                    typeOfSortB = b.priceInfo.fullPrice;
                }
                if (FiltersState.selectValue === "cheap") {
                    typeOfSortA = b.priceInfo.fullPrice;
                    typeOfSortB = a.priceInfo.fullPrice;
                }

                if (typeOfSortA > typeOfSortB) {
                    return -1;
                }
                if (typeOfSortA < typeOfSortB) {
                    return 1;
                }
                return 0;
            })
        );

    };



    return (

        store.isFilterPageLoaded
            ? <FilterPageLoader />
            : <div className="category">
                <h1 className="category__title section-title">
                    {store.categoryPage.length ? store.categoryPage : null}({store.categoryPageItems.length})
                </h1>
                <div className="category__inner">
                    <div className="category__wrap">
                        <div className="category__sorting sorting sorting--mobile">
                            <div className="sorting__sorting-by-wrap">
                                <select
                                    className="sorting__sorting-by"
                                    value={FiltersState.selectValue}
                                    onChange={(e) => sortBy(e)}
                                >
                                    <option value="popular">Сначала популярные</option>
                                    <option value="newest">Сначала новые</option>
                                    <option value="cheap">Сначала дешевые</option>
                                    <option value="expensive">Сначала дорогие</option>
                                </select>

                                <svg
                                    width="26"
                                    height="36"
                                    viewBox="0 0 26 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.6025 14.4212H24.0354C24.4694 14.4212 24.8451 14.2628 25.1621 13.9456C25.4789 13.6285 25.638 13.253 25.638 12.819C25.638 12.385 25.479 12.0097 25.1621 11.6921L13.9456 0.475645C13.6287 0.158899 13.2533 0 12.819 0C12.3847 0 12.0093 0.158899 11.6921 0.475645L0.475645 11.6921C0.158461 12.0093 0 12.385 0 12.819C0 13.2529 0.158461 13.6285 0.475645 13.9456C0.79318 14.2628 1.16859 14.4212 1.6025 14.4212Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M24.0354 20.8313H1.6025C1.16824 20.8313 0.792829 20.9898 0.475645 21.3067C0.158461 21.6239 0 21.9993 0 22.4333C0 22.8673 0.158461 23.2429 0.475645 23.5599L11.6921 34.7763C12.0097 35.0935 12.3851 35.2523 12.819 35.2523C13.2529 35.2523 13.6287 35.0935 13.9456 34.7763L25.1621 23.5599C25.4789 23.2429 25.638 22.8673 25.638 22.4332C25.638 21.9993 25.479 21.6239 25.1621 21.3066C24.8452 20.9895 24.4694 20.8313 24.0354 20.8313Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>

                            <button onClick={showFilters} className="sorting__filters filters">
                                Фильтры
                            </button>
                        </div>
                        <Filters />
                    </div>
                    <div>
                        <div className="category__sorting sorting sorting--desktop">
                            <div className="sorting__sorting-by-wrap">
                                <select
                                    className="sorting__sorting-by"
                                    value={FiltersState.selectValue}
                                    onChange={(e) => sortBy(e)}
                                >
                                    <option value="popular">Сначала популярные</option>
                                    <option value="newest">Сначала новые</option>
                                    <option value="cheap">Сначала дешевые</option>
                                    <option value="expensive">Сначала дорогие</option>
                                </select>
                                <svg
                                    width="26"
                                    height="36"
                                    viewBox="0 0 26 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.6025 14.4212H24.0354C24.4694 14.4212 24.8451 14.2628 25.1621 13.9456C25.4789 13.6285 25.638 13.253 25.638 12.819C25.638 12.385 25.479 12.0097 25.1621 11.6921L13.9456 0.475645C13.6287 0.158899 13.2533 0 12.819 0C12.3847 0 12.0093 0.158899 11.6921 0.475645L0.475645 11.6921C0.158461 12.0093 0 12.385 0 12.819C0 13.2529 0.158461 13.6285 0.475645 13.9456C0.79318 14.2628 1.16859 14.4212 1.6025 14.4212Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M24.0354 20.8313H1.6025C1.16824 20.8313 0.792829 20.9898 0.475645 21.3067C0.158461 21.6239 0 21.9993 0 22.4333C0 22.8673 0.158461 23.2429 0.475645 23.5599L11.6921 34.7763C12.0097 35.0935 12.3851 35.2523 12.819 35.2523C13.2529 35.2523 13.6287 35.0935 13.9456 34.7763L25.1621 23.5599C25.4789 23.2429 25.638 22.8673 25.638 22.4332C25.638 21.9993 25.479 21.6239 25.1621 21.3066C24.8452 20.9895 24.4694 20.8313 24.0354 20.8313Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>
                        <ul className="category__list category-list">
                            {store.categoryPageItems.length > 0 &&
                                store.categoryPageItems.map((item: ICategoryPageItem) => {
                                    const { images, title, releaseDate, priceInfo, isAvailable, rating, features } = item;

                                    return (
                                        <li
                                            className={
                                                isAvailable
                                                    ? "category-list__item"
                                                    : "category-list__item category-list__item--not-available"
                                            }
                                        >
                                            <Link
                                                to="/item"
                                                onClick={() => toItemPage(item)}
                                                className="category-list__link"
                                            >
                                                <div className="category-list__img-wrap">
                                                    <img
                                                        src={images.snippetImage}
                                                        alt="img"
                                                        className="category-list__img"
                                                    />
                                                </div>
                                                <div className="category-list__text">
                                                    <h3 className="category-list__title">{title}</h3>
                                                    {/* <p>Год выпуска {releaseDate}</p> */}
                                                    <ul className="category-list__features-list features-list">
                                                        <li className="features-list__item">
                                                            <span>Платформа:</span> {item.features.platform}
                                                        </li>
                                                        <li className="features-list__item">
                                                            <span>Диагональ:</span> {item.features.diagonal}
                                                        </li>
                                                        <li className="features-list__item">
                                                            <span>Объем памяти:</span> {item.features.memory}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Link>
                                            <div className="category-list__footer">
                                                <div className="category-list__rating">
                                                    {/* <span className="category-list__rating-count">{rating}</span> */}
                                                    <span
                                                        className={"category-list__rating-count"}
                                                        style={
                                                            rating > 8
                                                                ? { backgroundColor: "green" }
                                                                : rating < 8 && rating > 5
                                                                    ? { backgroundColor: "orange" }
                                                                    : { backgroundColor: "red" }
                                                        }
                                                    >
                                                        {rating}
                                                    </span>
                                                    <Link className="category-list__reviews" to="#">
                                                        Отзывы
                                                        <span>({item.reviewsInfo.reviews.length})</span>
                                                    </Link>
                                                </div>
                                                {item.isAvailable ? (
                                                    CartState.itemsInCart.includes(item) ? (
                                                        <DeleteFromCartBtn item={item} />
                                                    ) : (
                                                        <ToCartBtn item={item} />
                                                    )
                                                ) : null}
                                                <div className="category-list__price-wrap">
                                                    <b
                                                        className={
                                                            priceInfo.discount
                                                                ? "category-list__item-price--discount"
                                                                : "category-list__item-price"
                                                        }
                                                    >
                                                        {isAvailable ? `${priceInfo.fullPrice} р.` : "нет в наличии"}
                                                    </b>
                                                    {priceInfo.discount && isAvailable && (
                                                        <b className="category-list__discount-price">
                                                            {priceInfo.fullPrice - priceInfo.discountAmount}
                                                            р.
                                                        </b>
                                                    )}
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
            </div>

    );
});

export default CategoryPage;
