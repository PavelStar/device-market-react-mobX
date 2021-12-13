import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import store from "../../../../store/store";
import FiltersState from "../../../../store/FiltersState";
import { Range } from "rc-slider";
import Switch from "@mui/material/Switch";
import { ICategory, ICategoryPageItem } from "../../../categories/Categories";
import ResetFilters from "../../../../classes/ResetFilters";

const Filters = observer(() => {
	const resetFilters = new ResetFilters;
	const label = { inputProps: { "aria-label": "Switch" } };
	// const [sliderValues, setSliderValues] = useState([10000, 190000]);
	const [dynamicKey, setDynamicKey] = useState(Date.now());

	const { selectedCategories } = FiltersState;


	const showFilteredItems = (e: any) => {
		if (e.currentTarget.name === "category-item") {
			if (e.currentTarget.checked) {
				FiltersState.setSelectedCategorie(selectedCategories.concat(e.currentTarget.id));
			} else {
				FiltersState.setSelectedCategorie(
					FiltersState.selectedCategories.filter((item: any) => {
						return item !== e.currentTarget.id;
					})
				);
			}
		}

		if (e.currentTarget.name === "brand-item") {
			if (e.currentTarget.checked) {
				FiltersState.setSelectedBrands(FiltersState.selectedBrands.concat(e.currentTarget.id));
			} else {
				FiltersState.setSelectedBrands(
					FiltersState.selectedBrands.filter((item: any) => {
						return item !== e.currentTarget.id;
					})
				);
			}
		}

		if (e.currentTarget.name === "isAvailableSwitch") {
			FiltersState.setIsAvailableOn(!FiltersState.isAvailableOn);
		}

		if (e.currentTarget.name === "isDiscountSwitch") {
			FiltersState.setIsDiscountOn(!FiltersState.isDiscountOn);
		}

		store.getCategoryPageItems(
			store.allItems
				.filter((item: ICategoryPageItem) => {
					if (FiltersState.selectedCategories.length === 0) {
						return item;
					} else {
						return FiltersState.selectedCategories.includes(item.category);
					}
				})
				.filter((item: ICategoryPageItem) => {
					if (FiltersState.selectedBrands.length === 0) {
						return item;
					} else {
						return FiltersState.selectedBrands.includes(item.brand);
					}
				})
				.filter((item: ICategoryPageItem) => {
					if (FiltersState.isAvailableOn) {
						return item.isAvailable === true;
					} else {
						return item;
					}
				})
				.filter((item: ICategoryPageItem) => {
					if (FiltersState.isDiscountOn) {
						return item.priceInfo.discount === true;
					} else {
						return item;
					}
				})
		);

		store.categoryPageItems.sort((a: ICategoryPageItem, b: ICategoryPageItem) => {
			if (a.rating > b.rating) {
				return -1;
			}
			if (a.rating < b.rating) {
				return 1;
			}
			return 0;
		});
	};

	const onSliderChange = (value: number[]) => {
		FiltersState.setSliderValues(value);
		store.getCategoryPageItems(
			store.allItems.filter((item: ICategoryPageItem) => {
				if (FiltersState.selectedCategories.length > 0) {
					return (
						item.priceInfo.fullPrice >= FiltersState.sliderValues[0] &&
						item.priceInfo.fullPrice <= FiltersState.sliderValues[1] &&
						FiltersState.selectedCategories.includes(item.category)
					);
				}

				if (FiltersState.selectedCategories.length === 0) {
					return item.priceInfo.fullPrice >= FiltersState.sliderValues[0] && item.priceInfo.fullPrice <= FiltersState.sliderValues[1];
				} else {
					return null
				}
			})
		);
	};

	const handleChange = (e: { target: HTMLInputElement; }) => {
		setDynamicKey(Date.now());
		if (e.target.id === "1") {
			FiltersState.setSliderValues([+e.target.value, FiltersState.sliderValues[1]]);
		}
		if (e.target.id === "2") {
			FiltersState.setSliderValues([FiltersState.sliderValues[0], +e.target.value]);
		}
	};

	const showFilters = () => {
		store.getCategoryPage("Найдено товаров: ");
		// FiltersState.setIsFiltersHidden(!FiltersState.isFiltersHidden);
		// if (document.body.style.overflow !== "hidden") {
		// 	document.body.style.overflow = "hidden";
		// } else {
		// 	document.body.style.overflow = "scroll";
		// }
		let filterWrap = document.querySelector('.sorting__filter-wrap')
		if (filterWrap) {
			filterWrap.classList.toggle('show')
			console.log(filterWrap)
		}
	};

	const reset = () => {
		resetFilters.reset()
		setDynamicKey(Date.now());
		// FiltersState.setSelectedCategorie(store.categories)
	}

	return (
		<div className="sorting__filter-wrap">
			<h2 className="sorting__title section-title">Фильтры</h2>
			<div className="sorting__reset-wrap">
				<button className="sorting__reset-btn" onClick={reset}>Сбросить фильтры</button>
				<button onClick={showFilters} className="sorting__close-btn">
					закрыть
				</button>
			</div>
			<ul className="sorting__category-sorting-list">
				{store.categories.map((item: ICategory) => {
					const { categoryName } = item
					return (
						<li className="sorting__category-sorting-item">
							<input
								id={categoryName}
								type="checkbox"
								name="category-item"
								checked={FiltersState.selectedCategories.includes(categoryName) ? true : false}
								onChange={(e) => showFilteredItems(e)}
							/>
							<label htmlFor={categoryName}>{categoryName}</label>
						</li>
					);
				})}
			</ul>
			<ul className="sorting__brand-sorting-list">
				{store.brands.map((brand: string) => {
					return (
						<li className="sorting__brand-sorting-item">
							<input
								id={brand}
								type="checkbox"
								name="brand-item"
								checked={FiltersState.selectedBrands.includes(brand) ? true : false}
								onChange={(e) => showFilteredItems(e)}
							/>
							<label htmlFor={brand}>{brand}</label>
						</li>
					);
				})}
			</ul>
			<div className="sorting__price-range price-range">
				<h3 className="price-range__title">Цена</h3>
				<div className="price-range__inputs-wrap">
					<input type="tel" onChange={(e: { target: HTMLInputElement; }) => handleChange(e)} value={FiltersState.sliderValues[0]} id="1" />
					<input type="tel" onChange={(e: { target: HTMLInputElement; }) => handleChange(e)} value={FiltersState.sliderValues[1]} id="2" />
				</div>
				<>
					<Range
						className="sorting__range-slider"
						key={dynamicKey}
						min={0}
						max={250000}
						step={1000}
						defaultValue={FiltersState.sliderValues}
						onChange={onSliderChange}
					/>
				</>
			</div>
			<ul className="sorting__switch-list">
				<li className="sorting__switch-item">
					<p className="sorting__switch-text">В наличии</p>
					<Switch
						{...label}
						onChange={(e) => showFilteredItems(e)}
						checked={FiltersState.isAvailableOn}
						name="isAvailableSwitch"
					/>
				</li>
				<li className="sorting__switch-item">
					<p className="sorting__switch-text">Скидка</p>
					<Switch
						{...label}
						onChange={(e) => showFilteredItems(e)}
						checked={FiltersState.isDiscountOn}
						name="isDiscountSwitch"
					/>
				</li>
			</ul>
			<div className="sorting__results-btn-wrap">
				<button className="sorting__results-btn" onClick={showFilters}>
					Показать ({store.categoryPageItems.length}) товаров
				</button>
			</div>
		</div>
	);
});

export default Filters;
