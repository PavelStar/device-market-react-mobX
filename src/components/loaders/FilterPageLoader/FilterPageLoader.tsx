import React from 'react'
import "./FilterPageLoader.scss"

const FilterPageLoader = () => {
    return (
        <div className="filter-page-loader">
            <div className="filter-page-loader__filter item"></div>
            <ul className="filter-page-loader__list">
                <li className="filter-page-loader__item item"></li>
                <li className="filter-page-loader__item item"></li>
                <li className="filter-page-loader__item item"></li>
                <li className="filter-page-loader__item item"></li>
            </ul>
        </div>
    )
}

export default FilterPageLoader
