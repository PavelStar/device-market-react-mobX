import { ItemEntity } from "./ItemEntity";

export interface ResponseInfo {
	brands: string[];
	categories: string[];
	items: ItemEntity[];
}
