import { toJS } from "mobx";
import React from "react";
import { Link } from "react-router-dom";
import CategoryPageState from "../../store/CategoryPageState";
import FiltersState from "../../store/FiltersState";
import ResItemsState from "../../store/ResItemsState";
import store from "../../store/ItemState";
import "./LearnMoreLink.scss";

const LearnMoreLink = ({ linkType }: any) => {

    const itemsToPage = () => {

        FiltersState.setSelectedCategorie([])
        FiltersState.setSelectedBrands([])

        if (linkType === "Новинки") {
            CategoryPageState.getCategoryPage("Новинки")
            CategoryPageState.getCategoryPageItems(ResItemsState.newItems)

        }
        if (linkType === "Популярное") {
            CategoryPageState.getCategoryPage("Популярное")
            CategoryPageState.getCategoryPageItems(ResItemsState.popularItems)

        }

    }

    return (
        <Link className="learn-more-link" to="/category" onClick={itemsToPage}>
            Подробнее
        </Link>
    );
};

export default LearnMoreLink;
