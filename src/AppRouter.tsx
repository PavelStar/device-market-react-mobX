import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/pages/HomePage/HomePage";
import CartPage from "./components/pages/CartPage/CartPage";
import NotFound from "./components/pages/NotFound/NotFound";
import CategoryPage from "./components/pages/CategoryPage/CategoryPage";
import ItemPage from "./components/pages/ItemPage/ItemPage";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/cart" element={<CartPage />} />
			<Route path="/category" element={<CategoryPage />} />
			<Route path="/item" element={<ItemPage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRouter;
