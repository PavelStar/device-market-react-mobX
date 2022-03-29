import { observer } from "mobx-react-lite";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageWidthState from "../../../store/PageWidthState";
import { CSSTransition } from 'react-transition-group';
import "./LinksList.scss";

interface ILinksList {
    items: string[] | undefined;
    linkFunction?: any;
    // isListShown: boolean;
}

const LinksList: React.FC<ILinksList> = observer(({ items, linkFunction }) => {

    const linksListRef = useRef<HTMLDivElement>(null)
    const [isListShown, setIsListShown] = useState(false)

    useEffect(() => {
        //         if (linksListRef.current !== null) {
        //             if (isListShown) {
        //                 linksListRef.current.classList.add('links-list__wrap--on-open')
        //             }
        // 
        //             if (!isListShown) {
        // 
        //                 linksListRef.current.classList.remove('links-list__wrap--on-open')
        //             }
        //         }

    }, [isListShown]);



    return (
        <CSSTransition
            in={isListShown}
            timeout={1500}
            mountOnEnter
            unmountOnExit
            classNames="links-list"
        >

            <ul className={`links-list`} >
                {items &&
                    items.map((item) => {
                        return (
                            <Link className="links-list__item" to="/category" onClick={() => linkFunction(item)}>
                                <span>{item}</span>
                            </Link>
                        );
                    })}
            </ul>



        </CSSTransition>

    );
});

export default LinksList;
