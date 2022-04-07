import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import ApiService from "../../API/ApiService";
import Categories from "../../components/categories/Categories";
import Slider from "./../../components/Slider/Slider";
import ResponseDataState from "../../store/ResponseDataState";
import "./HomePage.scss"
import CategoriesLoader from "../../components/Loaders/HomePageLoaders/CategoriesLoader/CategoriesLoader";
import SliderLoader from "../../components/Loaders/HomePageLoaders/SliderLoader/SliderLoader";
import ItemDataState from "../../store/ItemDataState";

const HomePage = observer(() => {


	const apiService = new ApiService();
	const { responseData } = ResponseDataState

	useEffect(() => {

		if (!responseData) {
			setTimeout(() => {
				apiService.getData()
					.then((data) => ResponseDataState.setResponseData(data))
			}, 500);
		}
	}, []);

	return (
		<>
			{!responseData
				?
				<>
					<CategoriesLoader />
					<SliderLoader />
					<SliderLoader />
				</>
				:
				<>
					<Categories sectionName="categories" />
					<section className="popular section-wrapper">
						<div className="inner">
							<h2 className="section-title">Популярные товары</h2>
							<Slider sectionName="popular-items" slideCount={4.5} />
						</div>
					</section>
					<section className="new-items section-wrapper">
						<div className="inner">
							<h2 className="section-title">Новинки</h2>
							<Slider sectionName="new-items" slideCount={4.5} />
						</div>
					</section>
				</>
			}
		</>
	);
});

export default HomePage;
