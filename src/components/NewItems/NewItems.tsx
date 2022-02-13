import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import store from "../../store/ItemState";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LearnMoreLink from "../LearnMoreLink/LearnMoreLink";
import "./NewItems.scss";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import ToItemPage from "../../classes/ToItemPage";
import { ICategoryPageItem } from "../../interfaces/ICategoryPageItem";
import ResItemsState from "../../store/ResItemsState";

const NewItems: React.FunctionComponent = observer(() => {
	let newItems: string = "Новинки";

	const toItemPage = new ToItemPage

	useEffect(() => {
		ResItemsState.getNewItems(
			ResItemsState.allItems.filter((item: ICategoryPageItem) => {
				return item.releaseDate > 2017 && item.isAvailable;
			})
		);
	}, [ResItemsState.allItems]);

	// const toItemPage = (item: ICategoryPageItem) => {
	// 	store.setIsItemPageLoaded(true)
	// 	store.getItemInfo(item);
	// };

	SwiperCore.use([Navigation, Pagination]);

	return (
		<div className="new-items">
			<div className="new-items__inner">
				<h2 className="new-items__title section-title">Новинки</h2>
				<div className="new-items__slider-wrap">
					<Swiper
						spaceBetween={5}
						slidesPerView={1.1}
						// pagination={{ clickable: true }}
						centeredSlides={true}
						loop={true}
						// observer={true}
						// observeParents={true}
						breakpoints={{
							1140: {
								slidesPerView: 1,
								pagination: {
									el: '.new-items__dots-pagination',
									type: 'bullets',
									clickable: true,
								},

								navigation: {
									nextEl: ".new-items__button-next",
									prevEl: ".new-items__button-prev",
								},
							},
						}}
					>
						{ResItemsState.newItems.map((item: ICategoryPageItem) => {
							const { images, title, color, priceInfo } = item;

							return (
								<>
									<SwiperSlide>
										{/* <Link to="/item" onClick={() => toItemPage(item)} className="new-items__item"> */}
										<Link to="/item" onClick={() => toItemPage.toItemPage(item)} className="new-items__item">
											{/* <span className="new-items__new">New</span> */}
											<img
												className="new-items__item-img"
												src={images.snippetImage}
												alt="item-img"
											/>
											<h3 className="new-items__item-title">
												{title}
												<span>{color && `, ${color}`}</span>
											</h3>
											<b className="new-items__item-price">{priceInfo.fullPrice} р.</b>
											<button className="new-items__learn-more">Перейти</button>
										</Link>
									</SwiperSlide>
								</>
							);
						})}
					</Swiper>
					<button className="new-items__dots-pagination dots-pagination"></button>
					<button className="new-items__button-prev button-prev">
						<svg width="11" height="20" viewBox="0 0 11 20" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M10.3725 19.01C9.88245 19.5 9.09245 19.5 8.60245 19.01L0.292452 10.7C-0.0975481 10.31 -0.0975481 9.67999 0.292452 9.28999L8.60245 0.979988C9.09245 0.489988 9.88245 0.489988 10.3725 0.979988C10.8625 1.46999 10.8625 2.25999 10.3725 2.74999L3.13245 9.99999L10.3825 17.25C10.8625 17.73 10.8625 18.53 10.3725 19.01Z"
								fill="#E5E5E5"
							/>
						</svg>
					</button>
					<button className="new-items__button-next button-next">
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
				<div className="new-items__learn-more-wrap">
					<LearnMoreLink linkType={newItems} />
				</div>
			</div>
		</div>
	);
});

export default NewItems;
