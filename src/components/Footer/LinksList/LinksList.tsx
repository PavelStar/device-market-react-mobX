import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageWidthState from "../../../store/PageWidthState";
import "./LinksList.scss";

const LinksList = observer(
    ({
        items,
        linkFunction,
        isListShown,
    }: {
        items: string[] | undefined;
        linkFunction?: any;
        isListShown: boolean;
    }) => {
        useEffect(() => {
            console.log(isListShown);
        }, [isListShown]);

        return (
            <ul className="links-list">
                {isListShown &&
                    items &&
                    items.map((item) => {
                        return (
                            <Link className="links-list__item" to="/category" onClick={() => linkFunction(item)}>
                                <span>{item}</span>
                            </Link>
                        );
                    })}
            </ul>
        );
    }
);

export default LinksList;
