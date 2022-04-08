import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { IItemData } from '../../interfaces/IItemData';
import FiltersSettingsState from '../../store/FiltersSettingsState';
import ResponseDataState from '../../store/ResponseDataState';
import SortingByState from '../../store/SortingByState';
import { SetFilterSettings } from '../../Utils/SetFilterSettings';
import ClearFiltersBtn from '../buttons/ResetFiltersBtn/ResetFiltersBtn';
import ItemCard from '../ItemCard/ItemCard';
import Pagination from '../Pagination/Pagination';
import SortingSelect from '../SortingSelect/SortingSelect';
import CatalogIcon from '../svg/CatalogIcon';
import './ResultsBlock.scss'
import ResultsList from './ResultsList/ResultsList';

interface IResultsBlock {
    responseItems?: IItemData[] | undefined;
}

const ResultsBlock: React.FC<IResultsBlock> = observer(({ responseItems }) => {


    const { allFilteredItems, isAvailable, isDiscount, priceRange, selectedBrands, selectedCategories, } = FiltersSettingsState;
    const { sortingByType } = SortingByState;


    useEffect(() => {
        responseItems && FiltersSettingsState.setAllFilteredItems(responseItems)
    }, [responseItems])

    useEffect(() => {
        FiltersSettingsState.setAllFilteredItems(SetFilterSettings());
    }, [isAvailable, isDiscount, priceRange, selectedBrands, selectedCategories, sortingByType])

    const showFilters = () => {
        FiltersSettingsState.setIsFiltersShown(true)
        console.log('show')
    };

    return (
        <div className='results-block'>


            <div className="catalog-page__items-wrap">
                {allFilteredItems && (
                    <>
                        <Pagination />
                        <div className="catalog-page__mobile-settings">
                            <button className="catalog-page__btn-show-filters" onClick={showFilters}>
                                <CatalogIcon />
                                <span>Фильтры</span>
                            </button>
                            <div className="catalog-page__sorting-by-wrap">
                                <SortingSelect />
                            </div>
                        </div>
                        <ResultsList />
                    </>
                )}
                {allFilteredItems?.length === 0 && (
                    <div className="catalog-page__results-not-found">
                        <p>По данным параметрам ничего не найдено</p>
                        <ClearFiltersBtn />
                    </div>
                )}
            </div>

        </div>
    )
})

export default ResultsBlock