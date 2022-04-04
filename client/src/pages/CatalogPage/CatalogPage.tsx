import { useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import ResponseDataState from "../../store/ResponseDataState";
import ApiService from "../../API/ApiService";
import FiltersPanel from "../../components/FiltersPanel/FiltersPanel";
import PageWidthState from "../../store/PageWidthState";
import ResultsBlock from "../../components/ResultsBlock/ResultsBlock";
import ItemsFoundCounter from "../../components/ItemsFoundCounter/ItemsFoundCounter";
import FiltersSettingsState from "../../store/FiltersSettingsState";
import "./CatalogPage.scss";

const CatalogPage = observer(() => {
    const apiService = new ApiService();

    const { responseData } = ResponseDataState;
    const { isMobile } = PageWidthState;
    const { isFiltersShown } = FiltersSettingsState;


    const filtersWrapRef = useRef(null);




    useEffect(() => {
        console.log('catalog-page')
        if (!responseData?.items) {
            apiService.getData().then((data) => {
                ResponseDataState.setResponseData(data);
            });
        }


    }, []);





    return (
        <>
            {responseData && (
                <div className="catalog-page">
                    <h1 className="catalog-page__title">Каталог</h1>
                    <div className="catalog-page__inner">
                        <div className="catalog-page__filters-wrap" ref={filtersWrapRef}>
                            <ItemsFoundCounter />
                            {!isMobile || isFiltersShown ? <FiltersPanel /> : null}
                        </div>

                        <ResultsBlock responseItems={responseData.items} />
                    </div>
                </div>
            )}
        </>
    );
});

export default CatalogPage;
