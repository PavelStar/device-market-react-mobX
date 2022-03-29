import { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { IItemData } from "../../interfaces/IItemData";
import ItemCard from "../../components/ItemCard/ItemCard";
import ResponseDataState from "../../store/ResponseDataState";
import FiltersSettingsState from "../../store/FiltersSettingsState";
import ApiService from "../../API/ApiService";
import SortingBySelect from "../../components/SortingBySelect/SortingSelect";
import SortingByState from "../../store/SortingByState";
import { SetFilterSettings } from "../../Utils/SetFilterSettings";
import { setSortByItems } from "../../Utils/setSortByItems";
import CatalogIcon from "../../components/svg/CatalogIcon";
import CatalogPageLoader from "../../components/Loaders/CatalogPageLoaders/CatalogPageLoader";
import ClearFiltersBtn from "../../components/buttons/ResetFiltersBtn/ResetFiltersBtn";
import FiltersPanel from "../../components/FiltersPanel/FiltersPanel";
import "./CatalogPage.scss";
import PageWidthState from "../../store/PageWidthState";



const CatalogPage = observer(() => {
    const apiService = new ApiService();

    const { selectedCategories, selectedBrands, priceRange, isAvailable, isDiscount } = FiltersSettingsState;
    const { sortingByType } = SortingByState;
    const { responseData } = ResponseDataState;
    const { isMobile } = PageWidthState;

    const [itemsToShow, setItemsToShow] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const filtersWrapRef = useRef(null)

    useEffect(() => {
        apiService.getData().then((data) => {
            ResponseDataState.setResponseData(data);
            setItemsToShow(SetFilterSettings());
        });
    }, []);

    useEffect(() => {
        if (itemsToShow) {
            setIsLoading(true);
            setItemsToShow(SetFilterSettings());
            setIsLoading(false);
        }
    }, [selectedCategories, selectedBrands, priceRange, isAvailable, isDiscount]);

    useEffect(() => {
        if (itemsToShow) {
            setItemsToShow(setSortByItems([...itemsToShow]));
            window.scrollTo(0, 0);
        }
    }, [sortingByType]);

    const [isFiltersPanelShown, setIsFiltersPanelShown] = useState(false)

    const showFilters = () => {
        setIsFiltersPanelShown(!isFiltersPanelShown)
    };

    return (
        <>
            {isLoading ? (
                <>
                    <CatalogPageLoader />
                </>
            ) : (
                <div className="catalog-page">
                    <h1 className="catalog-page__title section-title">
                        Товаров найдено ({itemsToShow && itemsToShow.length})
                    </h1>
                    <div className="catalog-page__inner">
                        <div className="catalog-page__filters-wrap" ref={filtersWrapRef}>
                            {isFiltersPanelShown || !isMobile && (
                                <FiltersPanel
                                    itemsToShowCount={itemsToShow.length}
                                    showFilters={showFilters}
                                />
                            )}
                        </div>

                        <div className="catalog-page__items-wrap">
                            {itemsToShow?.length > 0 && (
                                <>
                                    <div className="catalog-page__mobile-settings">
                                        <button className="catalog-page__btn-show-filters" onClick={showFilters}>
                                            <CatalogIcon />
                                            <span>Фильтры</span>
                                        </button>
                                        <div className="catalog-page__sorting-by-wrap">
                                            <SortingBySelect
                                                itemsToShow={itemsToShow}
                                                setItemsToShow={setItemsToShow}
                                            />
                                        </div>
                                    </div>
                                    <ul className="catalog-page__results-list results-list">
                                        {itemsToShow.map((item: IItemData) => {
                                            return <ItemCard inPageView="inPage" item={item} />;
                                        })}
                                    </ul>
                                </>
                            )}
                            {(itemsToShow?.length === 0 && responseData) && (
                                <div className="catalog-page__results-not-found">
                                    <p>По данным параметрам ничего не найдено</p>
                                    <ClearFiltersBtn />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default CatalogPage;
