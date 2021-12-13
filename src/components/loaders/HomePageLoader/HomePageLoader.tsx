import React from 'react';
import './HomePageLoader.scss';

const HomePageLoader = () => {
    return (
        <div className="home-page-loader">
            <div className="home-page-loader__section">
                <div className="home-page-loader__title item"></div>
                <ul className="home-page-loader__list list">
                    <li className="list__item item"></li>
                    <li className="list__item item"></li>
                    <li className="list__item item"></li>
                </ul>
            </div>
            <div className="home-page-loader__section">
                <div className="home-page-loader__title item"></div>
                <ul className="home-page-loader__list list list--second">
                    <li className="list__item item"></li>
                </ul>
                <div className="home-page-loader__btn item"></div>
            </div>
            <div className="home-page-loader__section">
                <div className="home-page-loader__title item"></div>
                <ul className="home-page-loader__list list list--third">
                    <li className="list__item item"></li>
                </ul>
                <div className="home-page-loader__btn item"></div>
            </div>
        </div>
    )
}

export default HomePageLoader
