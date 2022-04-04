import { ICartItem } from "../interfaces/ICartItem";
import { IItemData } from "../interfaces/IItemData";

export const RemoveFromCart = (currentItem: ICartItem, itemsInCart: ICartItem[]) => {
	// const { id } = currentItem;

	let deleteCount: number | undefined;

	return [
		...itemsInCart.filter((i) => {
			if (i.itemData.id === currentItem.itemData.id) deleteCount = i.count;
			return i.itemData.id !== currentItem.itemData.id;
		}),
	];

	// 	let arr = [
	// 		...itemsInCart.filter((i) => {
	// 			if (i.item.id === item.id) deleteCount = i.count;
	// 			return i.item.id !== item.id;
	// 		}),
	// 	];
	//
	// 	console.log(arr);
};
