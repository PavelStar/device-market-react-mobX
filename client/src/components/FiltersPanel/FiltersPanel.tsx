import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { ICategory } from "../../interfaces/ICategory";
import CheckboxCategory from "./CheckboxCategory/CheckboxCategory";
import CheckboxBrand from "./CheckboxBrand/CheckboxBrand";
import FiltersSettingsState from "../../store/FiltersSettingsState";
import ResponseDataState from "../../store/ResponseDataState";
import PriceRange from "../PriceRange/PriceRange";
import Switcher from "../Switcher/Switcher";
import ClearFiltersBtn from "../buttons/ResetFiltersBtn/ResetFiltersBtn";
import PageWidthState from "../../store/PageWidthState";
import { scrollLockOnFixed } from "../../Utils/scrollLockOnFixed";
import CloseBtn from "../svg/CloseBtn";
import './FiltersPanel.scss'


interface IFiltersPanel {
	itemsToShowCount?: number;
}


const FiltersPanel: React.FC<IFiltersPanel> = observer(({ itemsToShowCount }) => {


	const { isMobile } = PageWidthState;
	const { isAvailable, isDiscount, itemsFound } = FiltersSettingsState
	const { responseData } = ResponseDataState

	const filtersRef = useRef(null)
	const showBtnRef = useRef(null)



	useEffect(() => {
		if (filtersRef.current && isMobile) {
			scrollLockOnFixed("disabled", filtersRef)
		}

		return () => {
			scrollLockOnFixed("enabled", filtersRef)
		}
	}, [])


	const showFilters = () => {
		FiltersSettingsState.setIsFiltersShown(false)
	};


	return (
		<div className="filters-panel" ref={filtersRef}>

			<div className="filters-panel__filter-wrap" >
				<div className="filters-panel__reset-wrap">

					<ClearFiltersBtn />
					<button
						onClick={showFilters}
						className="filters-panel__close-btn">
						<CloseBtn />
					</button>
				</div>
				<div className="filters-panel__section-wrap">
					<h3>Категория:</h3>
					<ul className="filters-panel__category-sorting-list">
						{responseData?.categories.map((category: ICategory) => {
							return (
								<li className="filters-panel__category-sorting-item">
									<CheckboxCategory category={category} />
								</li>
							);
						})}
					</ul>
				</div>
				<div className="filters-panel__section-wrap">
					<h3>Бренд:</h3>
					<ul className="filters-panel__brand-sorting-list">
						{responseData?.brands.map((brand: string) => {
							return (
								<li className="filters-panel__brand-sorting-item">
									<CheckboxBrand brand={brand} />
								</li>
							);
						})}
					</ul>
				</div>
				<PriceRange />
				<ul className="filters-panel__switch-list">
					<li className="filters-panel__switch-item">
						<p className="filters-panel__switch-text">В наличии</p>
						<Switcher name="isAvailableSwitch" state={isAvailable} />
					</li>
					<li className="filters-panel__switch-item">
						<p className="filters-panel__switch-text">Скидка</p>
						<Switcher name="isDiscountSwitch" state={isDiscount} />
					</li>
				</ul>
				{isMobile &&
					<div className="filters-panel__results-btn-wrap" ref={showBtnRef}>
						<button className="filters-panel__results-btn"
							onClick={showFilters}
						>
							Показать ({itemsFound}) товаров
						</button>

					</div>
				}
			</div>
		</div>
	);
});

export default FiltersPanel;
