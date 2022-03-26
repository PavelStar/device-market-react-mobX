import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import { ICategory } from "../../../interfaces/ICategory";
import FiltersSettingsState from "../../../store/FiltersSettingsState";
import "./CheckboxCategory.scss";
import "./../checbox.scss";
import MarkerIcon from "../../svg/MarkerIcon";

interface IInputCategory {
    category: ICategory
}


const CheckboxCategory: React.FC<IInputCategory> = observer(({ category }) => {

    const { selectedCategories } = FiltersSettingsState

    const { categoryName } = category

    const addCategory = () => {
        if (!selectedCategories.includes(category.categoryName)) {
            FiltersSettingsState.setSelectedCategories([...selectedCategories.concat(category.categoryName)])
        }

        if (selectedCategories.includes(category.categoryName)) {
            FiltersSettingsState.setSelectedCategories([...selectedCategories.concat(category.categoryName)])
            FiltersSettingsState.setSelectedCategories(selectedCategories.filter((item) => {
                return item != categoryName
            }))

        }
    }





    return (
        <div className="checkbox-wrapper">
            <input
                className="visually-hidden"
                id={categoryName}
                type="checkbox"
                name="category-item"
                checked={selectedCategories.includes(categoryName) ? true : false}
                onChange={addCategory}
            />
            <div className="checkbox-border">
                <MarkerIcon />
            </div>
            <label className="filter-checkbox" htmlFor={categoryName}>{categoryName}</label>
        </div>
    );
})

export default CheckboxCategory;
