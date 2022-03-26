import { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { IItemData } from "../../interfaces/IItemData";
import Filters from "../../components/Filters/Filters";
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
import "./FiltersPage.scss";
import ClearFiltersBtn from "../../components/buttons/ResetFiltersBtn/ResetFiltersBtn";

const CategoryPage = observer(() => {
    const apiService = new ApiService();

    const { selectedCategories, selectedBrands, priceRange, isAvailable, isDiscount } = FiltersSettingsState;
    const { sortingByType } = SortingByState;
    const { responseData } = ResponseDataState;

    const [itemsToShow, setItemsToShow] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

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

    const showFiltersBtn = useRef(null);

    const showFilters = () => {
        let filtersBlock = document.querySelector(".filters-page__filters-wrap");
        filtersBlock?.classList.toggle("show");
        window.scrollTo(0, 0);
    };

    return (
        <>
            {isLoading ? (
                <>
                    <CatalogPageLoader />
                </>
            ) : (
                <div className="filters-page">
                    <h1 className="filters-page__title section-title">
                        Товаров найдено ({itemsToShow && itemsToShow.length})
                    </h1>
                    <div className="filters-page__inner">
                        <div className="filters-page__filters-wrap">
                            <Filters showFilters={showFilters} itemsToShowCount={itemsToShow.length} />
                        </div>

                        <div className="filters-page__items-wrap">
                            {itemsToShow?.length > 0 && (
                                <>
                                    <div className="filters-page__mobile-settings">
                                        <button className="filters-page__btn-show-filters" onClick={showFilters}>
                                            <CatalogIcon />
                                            <span>Фильтры</span>
                                        </button>
                                        <div className="filters-page__sorting-by-wrap">
                                            <SortingBySelect
                                                itemsToShow={itemsToShow}
                                                setItemsToShow={setItemsToShow}
                                            />
                                        </div>
                                    </div>
                                    <ul className="filters-page__results-list results-list">
                                        {itemsToShow.map((item: IItemData) => {
                                            return <ItemCard inPageView="inPage" item={item} />;
                                        })}
                                    </ul>
                                </>
                            )}
                            {itemsToShow?.length == 0 && (
                                <div className="filters-page__results-not-found">
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

export default CategoryPage;
