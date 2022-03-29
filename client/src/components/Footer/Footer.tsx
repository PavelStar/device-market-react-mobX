import { observer } from "mobx-react-lite";
import ResponseDataState from "../../store/ResponseDataState";
import { sortByCategory } from "./../../Utils/sortByCategory";
import Logo from "../Logo/Logo";
import LinksList from "./LinksList/LinksList";
import { sortByBrand } from "../../Utils/sortByBrand";
import { useEffect, useState } from "react";
import PageWidthState from "../../store/PageWidthState";
import ArrowIcon from "../svg/ArrowIcon";
import FooterNavList from "./FooterNavList/FooterNavList";
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

                <FooterNavList title='Категории' linkFunction={sortByCategory} items={responseData?.categories.map((category) => {
                    return category.categoryName;
                })} />

                <FooterNavList title='Бренды' linkFunction={sortByBrand} items={responseData?.brands} />


            </div>
        </footer>
    );
});

export default Footer;
