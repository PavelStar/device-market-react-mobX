import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { IItemData } from "../../interfaces/IItemData";
import FiltersSettingsState from "../../store/FiltersSettingsState";
import { SetFilterSettings } from "../../Utils/SetFilterSettings";
import "./Pagination.scss";

interface IPagination {
    allFilteredItems?: IItemData[] | undefined;
}

const Pagination: React.FC<IPagination> = observer(() => {



    const { allFilteredItems, resultsByPagination } = FiltersSettingsState;

    const [itemsPerPage, setItemsPerPage] = useState<number>(6);
    const [startIndex, setStartIndex] = useState<number>(0);
    const [buttonsList, setButtonsList] = useState<number[] | undefined>();
    const [selectedBtn, setSelectedBtn] = useState<number>(1);



    useEffect(() => {
        let arrOfNumbers: number[] = [];

        if (allFilteredItems !== undefined) {
            for (let i = 1; i <= Math.ceil(allFilteredItems.length / itemsPerPage); i++) {
                arrOfNumbers.push(i);
            }

            setButtonsList(arrOfNumbers);
            setStartIndex(0)
            setSelectedBtn(1)
        }
    }, [allFilteredItems]);


    useEffect(() => {
        allFilteredItems && FiltersSettingsState.setResultsByPagination(allFilteredItems.slice(startIndex, startIndex + itemsPerPage))
    }, [buttonsList, selectedBtn])


    const buttonHandleClick = (number: number) => {
        setStartIndex((number - 1) * itemsPerPage);
        setSelectedBtn(number)
    };



    return (
        <div className="pagination">
            <ul className="pagination__list">
                {buttonsList?.map((number) => {
                    return (
                        <li className="pagination__item">
                            <button
                                className={
                                    selectedBtn === number
                                        ? "pagination__btn-number active"
                                        : "pagination__btn-number"
                                }
                                onClick={() => buttonHandleClick(number)}
                            >
                                {number}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
})

export default Pagination;
