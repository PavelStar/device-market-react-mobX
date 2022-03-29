import React from "react";
import { IPriceInfo } from "../../interfaces/IPriceInfo";
import "./ProductPrice.scss";

const ProductPrice = ({ priceInfo, isAvailable }: { priceInfo: IPriceInfo, isAvailable: boolean }) => {

	const { fullPrice, discount, discountAmount } = priceInfo

	return (
		<div className="price">
			{isAvailable ? (

				<div className="item-card__price-block">
					<p className="item-card__price">{fullPrice - discountAmount} руб.</p>
					{discount && <span className="item-card__price--discount">{fullPrice} руб.</span>}
				</div>
			) : (
				<p className="item-card__price item-card__price--not-available">Нет в наличии</p>
			)}
		</div>
	);
};

export default ProductPrice;
