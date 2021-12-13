import React from 'react'
import "./ItemPageLoader.scss"

const ItemPageLoader = () => {
    return (
        <div className="item-page-loader">
            <div className="item-page-loader__links">
                <div className="item-page-loader__link item"></div>
                <div className="item-page-loader__link item"></div>
            </div>
            <div className="item-page-loader__top">
                <div className="item-page-loader__title item"></div>
                <div className="item-page-loader__price item"></div>
            </div>
            <div className="item-page-loader__img item"></div>
            <div className="item-page-loader__reviews">
                <div className="item-page-loader__title item"></div>
                <div className="item-page-loader__text item"></div>
                <div className="item-page-loader__text item"></div>
            </div>
        </div>
    )
}

export default ItemPageLoader
