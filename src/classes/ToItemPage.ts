import { ICategoryPageItem } from "../interfaces/ICategoryPageItem";
import FiltersState from "../store/FiltersState";
import LoadersState from "../store/LoadersState";
import store from "../store/ItemState";

class ToItemPage {
	toItemPage(item: ICategoryPageItem) {
		LoadersState.setIsItemPageLoaded(true);
		store.getItemInfo(item);
	}
}

export default ToItemPage;
