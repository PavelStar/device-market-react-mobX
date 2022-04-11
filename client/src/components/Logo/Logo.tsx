import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageWidthState from "../../store/PageWidthState";
import { resetFilters } from "../../Utils/resetFilters";
import NavBarItem from "../Header/NavBarItem/NavBarItem";
import HomeIcon from "../svg/HomeIcon";
import LogoImage from "../svg/LogoImage";
import "./Logo.scss";

const Logo = observer(({ logoType }: { logoType: string }) => {

    const { isMobile } = PageWidthState



    return (
        <Link to="/" onClick={resetFilters}>
            <div className="logo">
                {logoType === "navigation" ? (
                    <>
                        {isMobile ? <NavBarItem itemIcon={<HomeIcon />} itemName={"Домой"} /> : <b className="logo"><span>Device</span> <span>Market</span></b>}


                    </>
                ) : (
                    <b className="logo"><span>Device</span> <span>Market</span></b>
                )}
            </div>
        </Link>
    );
})

export default Logo;
