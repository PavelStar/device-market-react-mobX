import React, { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { ICategory } from "../../interfaces/ICategory";
import CheckboxCategory from "./CheckboxCategory/CheckboxCategory";
import CheckboxBrand from "./CheckboxBrand/CheckboxBrand";
import FiltersSettingsState from "../../store/FiltersSettingsState";
import ResponseDataState from "../../store/ResponseDataState";
import PriceRange from "../PriceRange/PriceRange";
import Switcher from "../Switcher/Switcher";
import ClearFiltersBtn from "../buttons/ResetFiltersBtn/ResetFiltersBtn";
import './Filters.scss'
import PageWidthState from "../../store/PageWidthState";
import { ScrollLockOnFixed } from "../../Utils/ScrollLockOnFixed";
import CloseBtn from "../svg/CloseBtn";

const Filters = observer(({ showFilters, itemsToShowCount }: { showFilters: any, itemsToShowCount: number }) => {
	// const resetFilters = new ResetFilters;

	const filtersRef = useRef(null)
	const showBtnRef = useRef(null)

	useEffect(() => {
		if (filtersRef.current) {

			ScrollLockOnFixed("disabled", filtersRef)
		}

		return () => {
			if (filtersRef.current) {

				ScrollLockOnFixed("enabled", filtersRef)
			}
		}
	}, [])




	const { isAvailable, isDiscount } = FiltersSettingsState
	const { responseData } = ResponseDataState

	const { isMobile } = PageWidthState;


	return (
		<div className="filters" >
			<div className="filters__filter-wrap" ref={filtersRef}>
				<h2 className="filters__title">Фильтры</h2>
				<div className="filters__reset-wrap">

					<ClearFiltersBtn />
					<button
						onClick={showFilters}
						className="filters__close-btn">
						<CloseBtn />
					</button>
				</div>
				<ul className="filters__category-sorting-list">
					{responseData?.categories.map((category: ICategory) => {
						return (
							<li className="filters__category-sorting-item">
								<CheckboxCategory category={category} />
							</li>
						);
					})}
				</ul>
				<ul className="filters__brand-sorting-list">
					{responseData?.brands.map((brand: string) => {
						return (
							<li className="filters__brand-sorting-item">
								<CheckboxBrand brand={brand} />
							</li>
						);
					})}
				</ul>
				<PriceRange />
				<ul className="filters__switch-list">
					<li className="filters__switch-item">
						<p className="filters__switch-text">В наличии</p>
						<Switcher name="isAvailableSwitch" state={isAvailable} />
					</li>
					<li className="filters__switch-item">
						<p className="filters__switch-text">Скидка</p>
						<Switcher name="isDiscountSwitch" state={isDiscount} />
					</li>
				</ul>
				{isMobile &&
					<div className="filters__results-btn-wrap" ref={showBtnRef}>
						<button className="filters__results-btn" onClick={showFilters}>
							Показать ({itemsToShowCount}) товаров
						</button>

					</div>
				}
			</div>
		</div>
	);
});

export default Filters;
