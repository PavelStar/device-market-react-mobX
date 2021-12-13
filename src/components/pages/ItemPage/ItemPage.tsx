import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Swiper, SwiperSlide } from "swiper/react";
import store from "../../../store/store";
import "./ItemPage.scss";
import ToCartBtn from "../../ToCartBtn/ToCartBtn";
import CartState from "../../../store/CartState";
import DeleteFromCartBtn from "../../DeleteFromCartBtn/DeleteFromCartBtn";
import { ICategoryPageItem, Ifeatures, Ireview } from "../../categories/Categories";
import { toJS } from "mobx";
import ItemPageLoader from "../../loaders/ItemPageLoader/ItemPageLoader";
import { sortAndDeduplicateDiagnostics } from "typescript";



const ItemPage: React.FunctionComponent = observer(() => {
	const { itemInfo } = store;


	useEffect(() => {
		console.log('object')
		setTimeout(() => {
			store.setIsItemPageLoaded(false)
		}, 500);
	}, [itemInfo])

	const categoryTitle = (itemInfo: any) => {
		store.getCategoryPage(itemInfo);
		const filteredArr: ICategoryPageItem[] = store.allItems.filter((item: ICategoryPageItem) => {
			return item.category === itemInfo;
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

	};

	return (
		store.isItemPageLoaded ? <ItemPageLoader /> :
			<div className="item-page">
				{itemInfo && itemInfo.title && (
					<div className="item-page__inner">
						<div className="item-page__links">
							<Link
								to="/category"
								className="item-page__category-link"
								onClick={() => categoryTitle(itemInfo.category)}
							>
								{itemInfo.category}
							</Link>
							<span>/</span>
							<p className="item-page__current-link">{itemInfo.title}</p>
						</div>
						<div className="item-page__top-wrap">
							<h1 className="item-page__title section-title">{itemInfo.title}</h1>
							<div className="item-page__price-wrap">
								<div className="item-page__price-inner">
									{itemInfo.isAvailable ? (
										<b
											className={
												itemInfo.priceInfo.discount
													? "category-list__item-price category-list__item-price--discount"
													: "category-list__item-price"
											}
										>
											{itemInfo.priceInfo.fullPrice} р.
										</b>
									) : (
										"нет в наличии"
									)}
									{itemInfo.priceInfo.discount && itemInfo.isAvailable && (
										<b className="category-list__discount-price">
											{itemInfo.priceInfo.fullPrice - itemInfo.priceInfo.discountAmount}
											р.
										</b>
									)}

									{itemInfo.isAvailable ? (
										CartState.itemsInCart.includes(itemInfo) ? (
											<DeleteFromCartBtn item={itemInfo} />
										) : (
											<ToCartBtn item={itemInfo} />
										)
									) : null}
								</div>
								<span
									className="item-page__rating"
									style={
										itemInfo.rating > 8
											? { backgroundColor: "green" }
											: itemInfo.rating < 8 && itemInfo.rating > 5
												? { backgroundColor: "orange" }
												: { backgroundColor: "red" }
									}
								>
									{itemInfo.rating}
								</span>
							</div>
							<div className="item-page__main-wrap">
								<div className="item-page__slider-wrap">
									<Swiper
										spaceBetween={5}
										slidesPerView={1.1}
										centeredSlides={true}
										loop={true}
										breakpoints={{
											1140: {
												slidesPerView: 1,
												pagination: {
													el: ".item-page__dots-pagination",
													type: "bullets",
													clickable: true,
												},

												navigation: {
													nextEl: ".item-page__button-next",
													prevEl: ".item-page__button-prev",
												},
											},
										}}
									>
										<SwiperSlide>
											<div className="item-page__img-wrap">
												<img
													className="item-page__img"
													src={itemInfo.images.sliderImages[0]}
													alt="img"
												/>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="item-page__img-wrap">
												<img
													className="item-page__img"
													src={itemInfo.images.sliderImages[1]}
													alt="img"
												/>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="item-page__img-wrap">
												<img
													className="item-page__img"
													src={itemInfo.images.sliderImages[2]}
													alt="img"
												/>
											</div>
										</SwiperSlide>
									</Swiper>
									<button className="item-page__dots-pagination dots-pagination"></button>
									<button className="item-page__button-prev button-prev">
										<svg width="11" height="20" viewBox="0 0 11 20" xmlns="http://www.w3.org/2000/svg">
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M10.3725 19.01C9.88245 19.5 9.09245 19.5 8.60245 19.01L0.292452 10.7C-0.0975481 10.31 -0.0975481 9.67999 0.292452 9.28999L8.60245 0.979988C9.09245 0.489988 9.88245 0.489988 10.3725 0.979988C10.8625 1.46999 10.8625 2.25999 10.3725 2.74999L3.13245 9.99999L10.3825 17.25C10.8625 17.73 10.8625 18.53 10.3725 19.01Z"
												fill="#E5E5E5"
											/>
										</svg>
									</button>
									<button className="item-page__button-next button-next">
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
								<div className="item-page__about-wrap">
									<div className="item-page__color-wrap">
										<h3 className="item-page__colors-title">Цвет</h3>
										<ul className="item-page__colors-list">
											<li className="item-page__color">
												<input className="item-page__color-btn item-page__color-btn--black" type="radio" name="color" value="black" checked />
											</li>
											<li className="item-page__color">
												<input className="item-page__color-btn item-page__color-btn--white" type="radio" name="color" value="white" />
											</li>
											<li className="item-page__color">
												<input className="item-page__color-btn item-page__color-btn--blue" type="radio" name="color" value="blue" />
											</li>
										</ul>
									</div>
									<h2>Характеристики</h2>
									<ul className="item-page__features-list">
										<li className="item-page__feature">
											<p className="item-page__feature-text">
												Платформа: {itemInfo.features.platform}
											</p>
										</li>
										<li className="item-page__feature">
											<p className="item-page__feature-text">
												Диагональ: {itemInfo.features.diagonal}
											</p>
										</li>
										<li className="item-page__feature">
											<p className="item-page__feature-text">
												Объем памяти: {itemInfo.features.memory}
											</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="item-page__reviews reviews">
								<h2 className="reviews__title section-title">Отзывы</h2>
								<ul className="reviews__list">
									{itemInfo.reviewsInfo.reviews.length ? itemInfo.reviewsInfo.reviews.map((item: Ireview) => {
										return (
											<li className="reviews__item">
												<div className="reviews__user-name-wrap">
													<h3 className="reviews__user-title">{item.userName}</h3>
													<span className="reviews__date">{item.reviewDate}</span>
												</div>
												<p className="reviews__user-rating">Оценка: {item.userRating}</p>
												<div className="reviews__message-wrap">
													<h4 className="reviews__message-title">Отзыв</h4>
													<p className="reviews__user-message">
														{item.userMessage}
													</p>
												</div>
											</li>
										)
									}) : null}
								</ul>
							</div>
						</div>
					</div>
				)}
			</div>
	);
});

export default ItemPage;
