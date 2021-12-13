import { ICategoryPageItem } from "../components/categories/Categories";
import FiltersState from "../store/FiltersState";
import store from "../store/store";

class ToItemPage {
	toItemPage(item: ICategoryPageItem) {
		store.setIsItemPageLoaded(true);
		store.getItemInfo(item);
	}
}

export default ToItemPage;
