import { IFeatures } from "./IFeatures";
import { IImages } from "./IImages";
import { IPriceInfo } from "./IPriceInfo";
import { IreviewsInfo } from "./IReviewsInfo";

export interface IItemData {
	id: number;
	amount: number;
	title: string;
	color: string;
	releaseDate: number;
	isAvailable: boolean;
	category: string;
	categoryType: string;
	brand: string;
	features: IFeatures;
	images: IImages;
	priceInfo: IPriceInfo;
	rating: number;
	reviewsInfo: IreviewsInfo;
}
