import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
