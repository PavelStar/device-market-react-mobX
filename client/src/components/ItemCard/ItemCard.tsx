import { spawn } from "child_process";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IItemData } from "../../interfaces/IItemData";
import ItemDataState from "../../store/ItemDataState";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductRating from "../ProductRating/ProductRating";
import ToCartBtn from "../buttons/ToCartBtn/ToCartBtn";
import CartState from "../../store/CartState";
import ResponseDataState from "../../store/ResponseDataState";
import ToItemLink from "../buttons/ToItemLink/ToItemLink";
import "./ItemCard.scss";
import PageWidthState from "../../store/PageWidthState";

interface ICardTypeOfView {
    inPageView?: string;
    inSliderView?: string;
    item: IItemData;
    isBtnLite?: boolean;
}

const ItemCard: React.FC<ICardTypeOfView> = observer(({ inPageView, inSliderView, item, isBtnLite }) => {
    const { cartItems } = CartState;
    const { responseData } = ResponseDataState;
    const { itemCardWidth } = PageWidthState;

    const itemCardRef = useRef<HTMLDivElement>(null);

    const {
        images: { snippetImage },
        title,
        priceInfo,
        priceInfo: { discount, discountAmount, fullPrice },
        isAvailable,
        reviewsInfo: { reviews },
        color,
        rating,
        categoryType,
        features: { memory },
    } = item;

    return (
        <div className={isAvailable ? "item-card" : "item-card item-card--not-available"} ref={itemCardRef}>
            <Link className="item-card__img-link" to="/item" onClick={() => ItemDataState.setItemData(item)}>
                <img className="item-card__img" src={snippetImage} alt="img" height="100" />
            </Link>
            <Link className="item-card__title-link" to="/item" onClick={() => ItemDataState.setItemData(item)}>
                <h3 className="item-card__title">{`${categoryType} ${title} ${color ? color : ""}, ${memory}`}</h3>
            </Link>

            <Link className="item-card__rating-link" to="/item" onClick={() => ItemDataState.setItemData(item)}>
                <div className="item-card__rating-wrap">
                    <ProductRating rating={rating} />
                    <p className="item-card__reviews">Отзывы ({reviews.length})</p>
                </div>
            </Link>
            <ProductPrice priceInfo={priceInfo} isAvailable={isAvailable} />
            <div className="item-card__buttons">
                {isAvailable && <ToCartBtn toCartItem={item} isBtnLite={isBtnLite} />}
                {isBtnLite && (
                    <Link to="/item" onClick={() => ItemDataState.setItemData(item)}>
                        <ToItemLink />
                    </Link>
                )}
            </div>
        </div>
    );
});

export default ItemCard;
