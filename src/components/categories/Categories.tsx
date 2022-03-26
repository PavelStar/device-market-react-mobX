import React from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { ICategory } from "../../interfaces/ICategory";
import CategoryItem from "../CategoryItem/CategoryItem";
import ResponseDataState from "../../store/ResponseDataState";
import FiltersSettingsState from "../../store/FiltersSettingsState";
import { sortByCategory } from "../../Utils/sortByCategory";
import "./Categories.scss";

interface ICategoriesItems {
	sectionName?: string;
}

const Categories: React.FC<ICategoriesItems> = observer(({ sectionName }) => {

	const { responseData } = ResponseDataState

	return (
		<div className="categories section-wrapper">
			<div className="inner">
				<h2 className="categories__title section-title">Категории</h2>
				<div className="categories__list">
					{
						responseData?.categories.map((category: ICategory) => {
							return (
								<Link
									to="/category"
									onClick={() => sortByCategory(category)}
									className="categories__item"
								>
									<CategoryItem category={category} itemSection='categories' />
								</Link>
							);
						})
					}
				</div>
			</div>
		</div>
	);
});

export default Categories;
