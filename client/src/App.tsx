import Header from "./components/Header/Header";
import { BrowserRouter, HashRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer/Footer";
import "./App.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import PageWidthState from "./store/PageWidthState";
import { observer } from "mobx-react-lite";
import SearchState from "./store/SearchState";
import ScrollToTop from "./Utils/ScrollToTop";

const App = observer(() => {

    const { isMobile } = PageWidthState
    const { isSearchShown } = SearchState;

    useEffect(() => {
        window.addEventListener('resize', onWindowResize)
    }, [])

    const onWindowResize = () => {
        if (window.innerWidth >= 768) {
            PageWidthState.setIsMobile(false)
        } else {
            PageWidthState.setIsMobile(true)

        }
    }

    return (
        <HashRouter>
            <Header />
            <ScrollToTop >
                <AppRouter />
            </ScrollToTop>
            <Footer />
        </HashRouter>
    );
})

export default App;
