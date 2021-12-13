import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import AppRouter from "./AppRouter";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;
