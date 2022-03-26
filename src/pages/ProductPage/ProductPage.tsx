import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { IItemData } from "../../interfaces/IItemData";
import ToCartBtn from "../../components/buttons/ToCartBtn/ToCartBtn";
import ItemDataState from "../../store/ItemDataState";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import ColorSelect from "../../components/ColorSelect/ColorSelect";
import ProductPrice from "../../components/ProductPrice/ProductPrice";
import ProductRating from "../../components/ProductRating/ProductRating";
import Features from "../../components/Features/Features";
import TabsList from "../../components/TabsList/TabsList";
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css";
import { width } from "@mui/system";
import "./ProductPage.scss";

const ProductPage: React.FunctionComponent = observer(() => {

	const [product, setProduct] = useState<IItemData>();
	const [tabName, setTabName] = useState('features');

	const navigate = useNavigate()
	const goBack = () => navigate(-1)




	const { itemData } = ItemDataState;

	useEffect(() => {
		if (itemData) setProduct(itemData);
	}, [itemData]);




	const images = [
		{
			original: `${product && product.images.snippetImage}`,
			thumbnail: `${product && product.images.snippetImage}`,
		},
		{
			original: `${product && product.images.sliderImages[0]}`,
			thumbnail: `${product && product.images.sliderImages[0]}`,
		},
		{
			original: `${product && product.images.sliderImages[1]}`,
			thumbnail: `${product && product.images.sliderImages[1]}`,
		},

		{
			original: `${product && product.images.sliderImages[2]}`,
			thumbnail: `${product && product.images.sliderImages[2]}`,
		},
	];




	return (
		<>

			<div className="product-page">

				{product && product.title && (


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
										<p className="product-page__current-link">{product.title}</p>
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
											{`${product.categoryType} ${product.title}, ${product.features.memory}`}
											<span>{product.color && `, ${product.color}`}</span>
										</h1>
										<div className="product-page__price-wrap">

											<ProductRating rating={product.rating} />
										</div>
									</div>
									{product.color && <ColorSelect product={product} />}
									<div className="product-page__price-inner">
										<b className="item-card__price-title">Цена:</b>
										<ProductPrice
											priceInfo={product.priceInfo}
											isAvailable={product.isAvailable}
										/>
										<ToCartBtn item={product} />
									</div>

								</div>
							</div>

						</div>

						<div className="product-page__bottom-wrap">
							<div className="product-page__container">
								<div className="product-page__data-tabs">
									<TabsList tabName={tabName} setTabName={setTabName} />
									<div className="data-tabs__results">
										{tabName === "features" && <Features features={product.features} />}

									</div>
									<div className="data-tabs__results">
										{tabName === "reviews" && <ReviewsList reviewData={product.reviewsInfo.reviews} />}

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
