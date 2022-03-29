import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import NotFound from "./pages/NotFound/NotFound";
import FiltersPage from "./pages/CatalogPage/CatalogPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import { useEffect } from "react";

const AppRouter = () => {





	return (

		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/cart" element={<CartPage />} />
			<Route path="/category" element={<FiltersPage />} />
			<Route path="/item" element={<ProductPage />} />
			<Route path="/orders-page" element={<OrdersPage />} />
			<Route path="/device-market-react-mobX" element={<HomePage />} />
			<Route path="*" element={<NotFound />} />

		</Routes>
	);
};

export default AppRouter;
