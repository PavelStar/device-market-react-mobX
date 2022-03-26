import { ICategory } from "./ICategory";
import { IItemData } from "./IItemData";

export interface IResponseData {
	categories: ICategory[];
	brands: string[];
	items: IItemData[];
}
