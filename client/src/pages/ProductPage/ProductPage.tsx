import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { IItemData } from "../../interfaces/IItemData";
import ToCartBtn from "../../components/buttons/ToCartBtn/ToCartBtn";
import ItemDataState from "../../store/ItemDataState";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import ColorSelect from "../../components/ProductSelects/ColorSelect/ColorSelect";
import ProductPrice from "../../components/ProductPrice/ProductPrice";
import ProductRating from "../../components/ProductRating/ProductRating";
import Features from "../../components/Features/Features";
import TabsList from "../../components/TabsList/TabsList";
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css";
import { width } from "@mui/system";
import "./ProductPage.scss";
import MemorySelect from "../../components/ProductSelects/MemorySelect/MemorySelect";
import ProductSelects from "../../components/ProductSelects/ProductSelects";
import ProductSelectsState from "../../store/ProductSelectsState";

const ProductPage: React.FunctionComponent = observer(() => {


	const [tabName, setTabName] = useState('features');

	const navigate = useNavigate()
	const goBack = () => navigate(-1)



	const { selectedColor, selectedMemory } = ProductSelectsState
	const { itemData } = ItemDataState;



	useEffect(() => {
		if (itemData) {
			ProductSelectsState.setSelectedColor(itemData.color)
			ProductSelectsState.setSelectedMemory(itemData.features.memory)

		};
	}, [itemData]);




	const images = [
		{
			original: `${itemData && itemData.images.snippetImage}`,
			thumbnail: `${itemData && itemData.images.snippetImage}`,
		},
		{
			original: `${itemData && itemData.images.sliderImages[0]}`,
			thumbnail: `${itemData && itemData.images.sliderImages[0]}`,
		},
		{
			original: `${itemData && itemData.images.sliderImages[1]}`,
			thumbnail: `${itemData && itemData.images.sliderImages[1]}`,
		},

		{
			original: `${itemData && itemData.images.sliderImages[2]}`,
			thumbnail: `${itemData && itemData.images.sliderImages[2]}`,
		},
	];




	return (
		<>

			<div className="product-page">

				{itemData && itemData.title && (


					<div className="product-page__inner">


						<div className="product-page__top-wrap">

							<div className="container">
								<div className="product-page__links">
									<div className="product-page__links-inner">
										<Link
											to="/category"
											className="product-page__category-link"
											onClick={goBack}
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
									{/* <ProductSlider product={product} /> */}
									<div className="product-img-gallery">
										<ImageGallery
											items={images}
											useBrowserFullscreen={false}
											showPlayButton={false}

										/>
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
									{/* <div>
										{product.color && <ColorSelect product={product} />}
										{product.features.memory && <MemorySelect product={product} />}
									</div> */}
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
										{tabName === "reviews" && <ReviewsList reviewData={itemData.reviewsInfo.reviews} />}

									</div>
								</div>
							</div>
						</div>

					</div>
				)}
			</div>
		</>
	);
});

export default ProductPage;
