import { observer } from "mobx-react-lite";
import React from "react";
import FiltersSettingsState from "../../../store/FiltersSettingsState";
import MarkerIcon from "../../svg/MarkerIcon";
import "./CheckboxBrand.scss";

interface IInputBrand {
    brand: string
}


const CheckboxCategory: React.FC<IInputBrand> = observer(({ brand }) => {

    const { selectedBrands } = FiltersSettingsState

    const addBrand = () => {
        if (!selectedBrands.includes(brand)) {
            FiltersSettingsState.setSelectedBrands([...selectedBrands.concat(brand)])
        }

        if (selectedBrands.includes(brand)) {
            FiltersSettingsState.setSelectedBrands(selectedBrands.filter((item) => {
                return item != brand
            }))
        }
    }

    return (
        <div className="checkbox-wrapper">
            <input
                className="visually-hidden"
                id={brand}
                type="checkbox"
                name="brand-item"
                checked={selectedBrands.includes(brand) ? true : false}
                onChange={addBrand}
            />
            <div className="checkbox-border">
                <MarkerIcon />
            </div>
            <label htmlFor={brand}>{brand}</label>
        </div>
    );
})

export default CheckboxCategory;
