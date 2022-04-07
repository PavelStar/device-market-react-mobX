import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import ToCartBtn from "../../components/buttons/ToCartBtn/ToCartBtn";
import ItemDataState from "../../store/ItemDataState";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import ProductPrice from "../../components/ProductPrice/ProductPrice";
import ProductRating from "../../components/ProductRating/ProductRating";
import Features from "../../components/Features/Features";
import TabsList from "../../components/TabsList/TabsList";

import "react-image-gallery/styles/css/image-gallery.css";
import ProductSelectsState from "../../store/ProductSelectsState";
import "./ProductPage.scss";
import ProductSelects from "../../components/Product/ProductSelects/ProductSelects";
import ProductGallery from "../../components/Product/ProductGallery/ProductGallery";
import ApiService from "../../API/ApiService";
import ResponseDataState from "../../store/ResponseDataState";
import { IItemData } from "../../interfaces/IItemData";
import NotFound from "../NotFound/NotFound";

const ProductPage: React.FunctionComponent = observer(() => {
	const apiService = new ApiService();
	const { responseData } = ResponseDataState;
	const { itemData, urlName } = ItemDataState;

	const [tabName, setTabName] = useState("features");

	const navigate = useNavigate();
	const params = useParams();



	useEffect(() => {

		if (!responseData) {
			const responseFn = async () => {
				const data = await apiService.getData();
				ResponseDataState.setResponseData(data);
				data?.items.find((item) => {
					String(item.id) === params.id && ItemDataState.setItemData(item);
				});
			};
			responseFn();
		} else {
			responseData?.items.find((item) => {
				String(item.id) === params.id && ItemDataState.setItemData(item);
			});
		}

		return () => {
			ItemDataState.setItemData(undefined);
		};
	}, [params]);

	return (
		<>
			{itemData && (
				<div className="product-page">
					{itemData.title && (
						<div className="product-page__inner">
							<div className="product-page__top-wrap">
								<div className="container">
									<div className="product-page__links">
										<div className="product-page__links-inner">
											<Link
												to="/category"
												className="product-page__category-link"
												onClick={() => navigate("/category")}
											>
												Каталог
											</Link>
											<span>/</span>
											<p className="product-page__current-link">{itemData.title}</p>
										</div>
									</div>
								</div>

								<div className="product-page__container">
									<div className="product-page__main-wrap">
										<div className="product-img-gallery">
											<ProductGallery itemData={itemData} />
										</div>
										<div className="product-page__about-wrap">
											<h1 className="product-page__title">
												{`${itemData.categoryType} ${itemData.title}, ${itemData.features.memory}`}
												<span>{itemData.color && `, ${itemData.color}`}</span>
											</h1>
											<div className="product-page__price-wrap">
												<ProductRating rating={itemData.rating} />
											</div>
										</div>
										<ProductSelects product={itemData} />
										<div className="product-page__price-inner">
											<b className="item-card__price-title">Цена:</b>
											<ProductPrice
												priceInfo={itemData.priceInfo}
												isAvailable={itemData.isAvailable}
											/>
											<ToCartBtn toCartItem={itemData} />
										</div>
									</div>
								</div>
							</div>

							<div className="product-page__bottom-wrap">
								<div className="product-page__container">
									<div className="product-page__data-tabs">
										<TabsList tabName={tabName} setTabName={setTabName} />
										<div className="data-tabs__results">
											{tabName === "features" && <Features features={itemData.features} />}
										</div>
										<div className="data-tabs__results">
											{tabName === "reviews" && (
												<ReviewsList reviewData={itemData.reviewsInfo.reviews} />
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</>
	);
});

export default ProductPage;
