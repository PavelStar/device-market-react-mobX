import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import StarIcon from "../svg/StarIcon";
import "./ProductRating.scss";

const ProductRating = observer(({ rating }: { rating: number }) => {

    const [starsIds] = useState<number[]>([1, 2, 3, 4, 5]);
    const [ratingPercentage, setRatingPercentage] = useState<number>(100);

    const listRef = useRef<HTMLUListElement>(null);


    useEffect(() => {
        if (null !== listRef.current) {
            setRatingPercentage(rating * 100 / 5)
        }
    });

    return (
        <div className="product-rating">
            <div className="product-rating__wrap">
                <ul className="stars-list" ref={listRef}>
                    {starsIds.map(() => {
                        return (
                            <li className={"stars-list__item"}>
                                <StarIcon />
                            </li>
                        );
                    })}
                </ul>
                <ul className="stars-list stars-list--active" style={{ width: `${ratingPercentage}%` }}>
                    {starsIds.map(() => {
                        return (
                            <li className={"stars-list__item"}>
                                <StarIcon />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="product-rating__counter">{rating}</div>
        </div>
    );
})

export default ProductRating;
