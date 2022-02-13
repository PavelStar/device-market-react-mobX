import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import NotFound from "./pages/NotFound/NotFound";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/cart" element={<CartPage />} />
			<Route path="/category" element={<CategoryPage />} />
			<Route path="/item" element={<ItemPage />} />
			<Route path="/orders-page" element={<OrdersPage />} />
			<Route path="/hardware-store-react-mobX" element={<HomePage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRouter;
