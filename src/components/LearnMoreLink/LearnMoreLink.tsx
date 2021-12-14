import { toJS } from "mobx";
import React from "react";
import { Link } from "react-router-dom";
import FiltersState from "../../store/FiltersState";
import store from "../../store/store";
import "./LearnMoreLink.scss";

const LearnMoreLink = ({ linkType }: any) => {

    const itemsToPage = () => {

        FiltersState.setSelectedCategorie([])
        FiltersState.setSelectedBrands([])

        if (linkType === "Новинки") {
            store.getCategoryPage("Новинки")
            store.getCategoryPageItems(store.newItems)

        }
        if (linkType === "Популярное") {
            store.getCategoryPage("Популярное")
            store.getCategoryPageItems(store.popularItems)

        }

    }

    return (
        <Link className="learn-more-link" to="/category" onClick={itemsToPage}>
            Подробнее
        </Link>
    );
};

export default LearnMoreLink;
