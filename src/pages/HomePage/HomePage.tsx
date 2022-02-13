import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import ApiService from "../../API/ApiService";
import LoadersState from "../../store/LoadersState";
import ResItemsState from "../../store/ResItemsState";
import HomePageLoader from "../../components/loaders/HomePageLoader/HomePageLoader";
import Categories from "../../components/categories/Categories";
import NewItems from "../../components/NewItems/NewItems";
import PopularItems from "../../components/PopularItems/PopularItems";
import Brands from "../../components/Brands/Brands";

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
					<Brands />
					<Categories />
					<NewItems />
					<PopularItems />
				</div>
			)}
		</>
	);
});

export default HomePage;
