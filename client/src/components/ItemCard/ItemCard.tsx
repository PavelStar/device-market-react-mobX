import { observer } from "mobx-react-lite";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { IItemData } from "../../interfaces/IItemData";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductRating from "../ProductRating/ProductRating";
import ToCartBtn from "../buttons/ToCartBtn/ToCartBtn";
import ToItemLink from "../buttons/ToItemLink/ToItemLink";
import ProductTitle from "../ProductTitle/ProductTitle";
import "./ItemCard.scss";

interface ICardTypeOfView {
    inPageView?: string;
    inSliderView?: string;
    item: IItemData;
    isBtnLite?: boolean;
}

const ItemCard: React.FC<ICardTypeOfView> = observer(({ item, isBtnLite }) => {

    const itemCardRef = useRef<HTMLDivElement>(null);

    const {
        images: { snippetImage },
        id,
        priceInfo,
        isAvailable,
        reviewsInfo: { reviews },
        rating,
    } = item;

    return (
        <div className={isAvailable ? "item-card" : "item-card item-card--not-available"} ref={itemCardRef}>
            <Link className="item-card__img-link" to={`/item/${id}`} >
                <img className="item-card__img" src={snippetImage} alt="img" height="100" />
            </Link>
            <Link className="item-card__title-link" to={`/item/${id}`} >
                <ProductTitle itemData={item} />
            </Link>

            <Link className="item-card__rating-link" to={`/item/${id}`} >
                <div className="item-card__rating-wrap">
                    <ProductRating rating={rating} />
                    <p className="item-card__reviews">Отзывы ({reviews.length})</p>
                </div>
            </Link>
            <ProductPrice priceInfo={priceInfo} isAvailable={isAvailable} />
            <div className="item-card__buttons">
                {isAvailable && <ToCartBtn toCartItem={item} isBtnLite={isBtnLite} />}
                {isBtnLite && (
                    <ToItemLink id={id} />
                )}
            </div>
        </div>
    );
});

export default ItemCard;
