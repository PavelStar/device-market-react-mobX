import React from "react";
import { observer } from "mobx-react-lite";
import store from "../../store/ItemState";
import ResItemsState from "../../store/ResItemsState";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./Categories.scss";
import FiltersState from "../../store/FiltersState";
import { ICategory } from "../../interfaces/ICategory";
import { ICategoryPageItem } from "../../interfaces/ICategoryPageItem";
import CategoryPageState from "../../store/CategoryPageState";
import LoadersState from "../../store/LoadersState";



const Categories = observer(() => {
	const categoryTitle = (category: ICategory) => {
		const { categoryName } = category;
		console.log(categoryName)

		FiltersState.setSelectedCategorie(FiltersState.selectedCategories.concat(categoryName))
		LoadersState.setIsFilterPageLoaded(true)

		setTimeout(() => {
			CategoryPageState.getCategoryPage(categoryName);
			const filteredArr: ICategoryPageItem[] = ResItemsState.allItems.filter((item: ICategoryPageItem) => {
				return item.category === categoryName;
			});
			CategoryPageState.getCategoryPageItems(filteredArr);
			CategoryPageState.categoryPageItems.sort((a: ICategoryPageItem, b: ICategoryPageItem) => {
				if (a.rating > b.rating) {
					return -1;
				}
				if (a.rating < b.rating) {
					return 1;
				}
				return 0;
			});
			LoadersState.setIsFilterPageLoaded(false)
		}, 500);



	};

	return (
		<div className="categories">
			<div className="categories__inner">
				<h2 className="categories__title section-title">Категории</h2>
				<div className="categories__slider-wrap">
					{ResItemsState.allItems.length > 0 ? (
						<Swiper
							spaceBetween={5}
							slidesPerView={3}
							loop={true}
							breakpoints={{
								1140: {
									spaceBetween: 10,
									pagination: {
										el: ".categories__dots-pagination",
										type: "bullets",
										clickable: true,
									},

									navigation: {
										nextEl: ".categories__button-next",
										prevEl: ".categories__button-prev",
									},
								},
							}}
						>
							{ResItemsState.allCategories.length
								? ResItemsState.allCategories.map((category: ICategory) => {
									const { image, categoryName } = category;

									return (
										<SwiperSlide>
											<Link
												to="/category"
												onClick={() => categoryTitle(category)}
												className="categories__item"
											>
												<img className="categories__item-img" src={image} alt="item-img" />
												<h3 className="categories__item-title">{categoryName}</h3>
											</Link>
										</SwiperSlide>
									);
								})
								: null}
						</Swiper>
					) : null}
					<button className="categories__dots-pagination dots-pagination"></button>
					<button className="categories__button-prev button-prev">
						<svg width="11" height="20" viewBox="0 0 11 20" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M10.3725 19.01C9.88245 19.5 9.09245 19.5 8.60245 19.01L0.292452 10.7C-0.0975481 10.31 -0.0975481 9.67999 0.292452 9.28999L8.60245 0.979988C9.09245 0.489988 9.88245 0.489988 10.3725 0.979988C10.8625 1.46999 10.8625 2.25999 10.3725 2.74999L3.13245 9.99999L10.3825 17.25C10.8625 17.73 10.8625 18.53 10.3725 19.01Z"
								fill="#E5E5E5"
							/>
						</svg>
					</button>
					<button className="categories__button-next button-next">
						<svg width="11" height="20" viewBox="0 0 11 20" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M0.37999 19.01C0.86999 19.5 1.65999 19.5 2.14999 19.01L10.46 10.7C10.85 10.31 10.85 9.68 10.46 9.29L2.14999 0.980003C1.65999 0.490003 0.86999 0.490003 0.37999 0.980003C-0.11001 1.47 -0.11001 2.26 0.37999 2.75L7.61999 10L0.36999 17.25C-0.11001 17.73 -0.11001 18.53 0.37999 19.01Z"
								fill="#E5E5E5"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
});

export default Categories;
