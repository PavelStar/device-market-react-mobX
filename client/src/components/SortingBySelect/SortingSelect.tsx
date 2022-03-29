import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { IItemData } from "../../interfaces/IItemData";
import SortingByState from "../../store/SortingByState";
import SortingArrows from "../svg/SortingArrows";
import './SortingSelect.scss'

const SortingSelect = observer(
    ({ itemsToShow, setItemsToShow }: { itemsToShow: IItemData[] | undefined; setItemsToShow: any }) => {
        const [selectValues, setSelectValues] = useState("");
        const { sortingByType } = SortingByState

        const sortBy = (e: any) => {
            setSelectValues(e.currentTarget.value);
            SortingByState.setSortingByType(e.currentTarget.value)


        };

        return (
            <>
                <select className="sorting-select" value={sortingByType} onChange={(e) => sortBy(e)}>
                    <option selected value="popular">
                        Сначала популярные
                    </option>
                    <option value="newest">Сначала новые</option>
                    <option selected value="cheap">
                        Сначала дешевые
                    </option>
                    <option value="expensive">Сначала дорогие</option>
                </select>
                <SortingArrows />
            </>
        );
    }
);

export default SortingSelect;
