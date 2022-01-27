import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import store from "../../../store/ItemState";
import ResItemsState from "../../../store/ResItemsState";
import Categories from "../../categories/Categories";
import NewItems from "../../NewItems/NewItems";
import PopularItems from "../../PopularItems/PopularItems";
import ApiService from "../../../API/ApiService";
import HomePageLoader from "../../loaders/HomePageLoader/HomePageLoader";
import LoadersState from "../../../store/LoadersState";

const HomePage = observer(() => {
	const apiService = new ApiService();

	useEffect(() => {
		LoadersState.setIsHomePageLoaded(true)

		setTimeout(() => {
			const myFn = async () => {
				const res = await apiService.getData();

				ResItemsState.getAllItems(res.items);
				ResItemsState.getCategories(res.categories);
				ResItemsState.getBrands(res.brands);
			};
			myFn();
			LoadersState.setIsHomePageLoaded(false)
		}, 500);

	}, []);

	return (
		<>
			{LoadersState.isHomePageLoaded ? (
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
