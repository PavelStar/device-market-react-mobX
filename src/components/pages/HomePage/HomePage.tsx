import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import store from "../../../store/store";
import Categories from "../../categories/Categories";
import NewItems from "../../NewItems/NewItems";
import PopularItems from "../../PopularItems/PopularItems";
import ApiService from "../../../API/ApiService";
import HomePageLoader from "../../loaders/HomePageLoader/HomePageLoader";

const HomePage = observer(() => {
	const apiService = new ApiService();




	useEffect(() => {
		store.setIsHomePageLoaded(true)

		setTimeout(() => {
			const myFn = async () => {
				const res = await apiService.getData();

				store.getItems(res.items);
				store.getCategoryItems(res.categories);
				store.getBrands(res.brands);
			};
			myFn();
			store.setIsHomePageLoaded(false)
		}, 500);

	}, []);

	return (
		<>
			{store.isHomePageLoaded ? (
				<HomePageLoader />
			) : (
				<div>
					<Categories />
					<NewItems />
					<PopularItems />
				</div>
			)}
		</>
	);
});

export default HomePage;
