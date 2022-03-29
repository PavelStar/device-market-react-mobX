import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { ICategory } from "../../interfaces/ICategory";
import "./CategoryItem.scss"

interface ICategoryItem {
	category?: ICategory,
	itemSection?: string
}

const CategoryItem: React.FC<ICategoryItem> = observer(({ category, itemSection }: any) => {

	const { categoryName, image } = category

	return (
		<div className={`category-item category-item--${itemSection}`} style={{ backgroundImage: `url(${itemSection === 'categories' && image})` }}>
			{/* {!footerItem && <img className="category-item__img" src={image} alt="item-img" />} */}
			<p className="category-item__title">{categoryName}</p>
		</div>
	);
})

export default CategoryItem;
