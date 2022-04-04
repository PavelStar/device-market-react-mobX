import { useEffect, useState } from 'react'
import { Range } from "rc-slider";
import FiltersSettingsState from '../../store/FiltersSettingsState';
import "rc-slider/assets/index.css";
import "nouislider/distribute/nouislider.css";
import './PriceRange.scss'
import { observer } from 'mobx-react-lite';
import { SetFilterSettings } from '../../Utils/SetFilterSettings';

const PriceRange = observer(() => {

    const { priceRange, isPriceRangeReseted } = FiltersSettingsState

    const [dynamicKey, setDynamicKey] = useState(Date.now());

    useEffect(() => {
        if (isPriceRangeReseted) {
            setDynamicKey(Date.now())
            FiltersSettingsState.setIsPriceRangeReseted(false)
        }
    }, [isPriceRangeReseted])


    const handleChange = (e: { target: HTMLInputElement; }) => {
        setDynamicKey(Date.now());
        if (e.target.id === "1") FiltersSettingsState.setPriceRange([+e.target.value, priceRange[1]]);
        if (e.target.id === "2") FiltersSettingsState.setPriceRange([priceRange[0], +e.target.value]);
    };

    const onSliderChange = (value: number[]) => {
        FiltersSettingsState.setPriceRange(value)
    }

    return (
        <div className="price-range">
            <h3 className="price-range__title">Цена</h3>
            <div className="price-range__inputs-wrap">
                <input type="tel" onChange={(e: any) => handleChange(e)} value={priceRange[0]} id="1" />
                <input type="tel" onChange={(e: any) => handleChange(e)} value={priceRange[1]} id="2" />
            </div>
            <>
                <Range
                    className="sorting__range-slider"
                    key={dynamicKey}
                    min={0}
                    max={250000}
                    step={1000}
                    defaultValue={priceRange}
                    onAfterChange={(value) => onSliderChange(value)}

                />
            </>
        </div>
    )
})

export default PriceRange