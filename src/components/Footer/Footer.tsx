import { observer } from "mobx-react-lite";
import ResponseDataState from "../../store/ResponseDataState";
import { sortByCategory } from "./../../Utils/sortByCategory";
import Logo from "../Logo/Logo";
import LinksList from "./LinksList/LinksList";
import { sortByBrand } from "../../Utils/sortByBrand";
import { useEffect, useState } from "react";
import PageWidthState from "../../store/PageWidthState";
import ArrowIcon from "../svg/ArrowIcon";
import "./Footer.scss";

const Footer = observer(() => {
    const { responseData } = ResponseDataState;
    const { isMobile } = PageWidthState;

    const [isCategoriesListShown, setIsCategoriesListShown] = useState(true);
    const [isBrandsListShown, setIsBrandsListShown] = useState(true);

    useEffect(() => {
        if (isMobile) {
            setIsCategoriesListShown(false);
            setIsBrandsListShown(false);
        }
        if (!isMobile) {
            setIsCategoriesListShown(true);
            setIsBrandsListShown(true);
        }
    }, [isMobile]);

    return (
        <footer className="footer section-wrapper">
            <div className="footer__inner inner">
                <Logo logoType="footer" />
                <div className="footer__categories">
                    <h3
                        onClick={() => isMobile && setIsCategoriesListShown(!isCategoriesListShown)}
                        className="footer__title"
                    >
                        Категории
                        {isMobile && (
                            <span
                                className={
                                    !isCategoriesListShown
                                        ? "footer__show-list-arrow"
                                        : "footer__show-list-arrow footer__show-list-arrow--active"
                                }
                            >
                                <ArrowIcon />
                            </span>
                        )}
                    </h3>

                    <LinksList
                        items={responseData?.categories.map((category) => {
                            return category.categoryName;
                        })}
                        linkFunction={sortByCategory}
                        isListShown={isCategoriesListShown}
                    />
                </div>
                <div className="footer__brands">
                    <h3 onClick={() => isMobile && setIsBrandsListShown(!isBrandsListShown)} className="footer__title">
                        Бренды
                        {isMobile && (
                            <span
                                className={
                                    !isBrandsListShown
                                        ? "footer__show-list-arrow"
                                        : "footer__show-list-arrow footer__show-list-arrow--active"
                                }
                            >
                                <ArrowIcon />
                            </span>
                        )}
                    </h3>
                    <LinksList
                        items={responseData?.brands}
                        linkFunction={sortByBrand}
                        isListShown={isBrandsListShown}
                    />
                </div>
            </div>
        </footer>
    );
});

export default Footer;
