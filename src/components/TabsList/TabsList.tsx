import React, { useState } from "react";
import "./TabsList.scss";

const TabsList = ({ tabName, setTabName }: { tabName: string; setTabName: any }) => {



    return (
        <ul className="tabs-list">
            <li className="tabs-list__item">
                <button
                    className={
                        tabName === "features" ? "tabs-list__button tabs-list__button--active" : "tabs-list__button"
                    }
                    onClick={() => setTabName("features")}
                >
                    Описание
                </button>
            </li>
            <li className="tabs-list__item">
                <button
                    className={
                        tabName === "reviews" ? "tabs-list__button tabs-list__button--active" : "tabs-list__button"
                    }
                    onClick={() => setTabName("reviews")}
                >
                    Отзывы
                </button>
            </li>
        </ul>
    );
};

export default TabsList;
